(function () {
	angular.module('app.sales')
	.controller('SalesController', SalesController);

	function SalesController ($scope, $rootScope, $ionicModal, $q, $persist, products, Database, categories, CashBalance, $filter, tax) {

		var vm = this;
		var win = window;
		win.sepi = {};
		win.sepi.persist = $persist;
		win.sepi.scope = $scope;
		win.sepi.db = Database;
		var rs = $rootScope;
		rs = $rootScope;
		vm.code = rs.code;
		win.sepi.code = $rootScope.code;
		win.sepi.rs = $rootScope;
		vm.scopes = vm.scopes || {};
		vm.scopes.root = $rootScope;
		vm.scopes.sales = $scope;
		win.vm = vm;

		vm.products            = products;
		vm.categories          = categories;
		vm.filters             = {};
		vm.invalidTotal				 = false;
		vm.submitted					 = false;

		vm.addProduct          = addProduct;
		vm.removeProduct       = removeProduct;
		vm.checkout            = checkout;
		vm.cancelCheckout      = cancelCheckout;
		vm.overrideSaleTotal   = overrideSaleTotal;
		vm.saleTotalFocus   = saleTotalFocus;
		vm.getCurrencyIconClasses   = getCurrencyIconClasses;
		vm.saveSale            = saveSale;
		vm.resetSale           = resetSale;
		vm.editSaleProduct     = editSaleProduct;
		vm.doneEditSaleProduct = doneEditSaleProduct;
		vm.cancelEditSaleProduct = cancelEditSaleProduct;
		vm.tax = tax;


		var saleTable = 'sale';
		var saleProductTable = 'saleproduct';
		var tempEditProduct    = null;
		var absoluteTotal = 0;

		function init () {
			vm.saleDate           = new Date();
			vm.saleTotal          = 0;
			vm.displayTotal		  = 0;
			vm.productCount       = 0;
			vm.salesTax           = 0;
			vm.saleProducts       = [];
			vm.error              = null;
			vm.currentEditProduct = null;
			vm.filter = '';

			if (tax.length) {
				for (var j = 0; j < tax.length; j++) {
					vm.activeTax = tax[0].active;
					if (vm.activeTax === true) {
						vm.tax_rate = tax[0].percentage;
					}
				}
			} else {
				vm.tax_rate = 0;
				vm.activeTax = false;
			}
		}

		function showCheckoutModal () {
			$ionicModal.fromTemplateUrl('Sales/templates/checkoutModal.html', {
				scope: $scope,
				animation: 'slide-in-right'
			}).then(function (modal) {
				vm.checkoutModal = modal;
				vm.checkoutModal.show();
			});
		}

		function showEditModal () {
			$ionicModal.fromTemplateUrl('Sales/templates/saleProductEditModal.html', {
				scope: $scope,
				animation: 'slide-in-right'
			}).then(function (modal) {
				vm.saleProductEditModal = modal;
				vm.saleProductEditModal.show();
			});
		}

		function addProduct (product) {
			// Check inventory limit if applicable
			if (product.inventoryid) {
				if (product.count + 1 > product.limit) {
					// vm.error = '' + product.name + ' has only ' + product.limit + ' in inventory.  You cannot sell more than ' + product.limit;
					vm.productError = product;
					vm.error = true;
					return;
				}
			}
			product.count += 1;
			vm.productCount += 1;
			vm.saleTotal += product.saleprice;
			absoluteTotal = vm.saleTotal;
		}

		function removeProduct (product) {
			if (product.count > 0) {
				product.count -= 1;
				vm.productCount -= 1;
				vm.saleTotal -= product.saleprice;
				absoluteTotal = vm.saleTotal;
			}
		}

		function checkout () {
			function hasCount (product) {
				return product.count > 0;
			}

			vm.saleProducts = vm.products.filter(hasCount);
			vm.displayTotal = Math.round(	vm.saleTotal * 100) / 100;

			showCheckoutModal();
		}

		function getCurrencyIconClasses() {
			var strClasses = "icon ";
			strClasses += $filter('translate')('str_currency_icon');
			strClasses += " placeholder-icon";
			return strClasses;
		}

		function saleTotalFocus() {
			Log.l("saleTotal got focus! Checking for zero value...");
			if(Number(vm.displayTotal) == 0) {
				Log.l("saleTotal had zero value! Blanking it out...");
				vm.displayTotal = '';
			}
		}

		function cancelCheckout () {
			vm.checkoutModal.remove();
		}

		function overrideSaleTotal (price) {
			price = price && price.replace ? Number(price.replace(',','.')) : Number(price);
			console.log(price);

			if (price && !isNaN(parseFloat(price))) {
				vm.saleTotal = Number(price);
				updateSalesPrices();
				vm.invalidTotal = false;
				// absoluteTotal = Number(price);
			} else {
				vm.invalidTotal = true;
			}
		}

		function updateSalesPrices() {
			var calcTotal = 0;
			vm.saleProducts.forEach(function (product) {
				var temp = parseFloat(((vm.saleTotal * ((product.absoluteSalePrice * product.count) / absoluteTotal)) / product.count).toFixed(2));
				product.saleprice = isNaN(temp) || temp === 0 ? product.saleprice : temp;
				console.log(product.saleprice, vm.saleTotal, product.saleprice, product.count, absoluteTotal);
				calcTotal += product.saleprice * product.count;
			});

			var diff = Math.round((vm.saleTotal - calcTotal) * 100);

			var maxIterations = 5;
			var iteration = 0;

			if (vm.saleProducts.length === 0) {
				return;
			}

			while (diff !== 0 && iteration < maxIterations) {
				var best = null;
				for (var i = vm.saleProducts.length - 1; i >= 0; i--) {
					var currentProduct = vm.saleProducts[i];
					if (currentProduct.count === Math.abs(diff)) {
						if (diff > 0) {
							currentProduct.saleprice += 0.01;
							diff -= currentProduct.count;
						} else {
							currentProduct.saleprice -= 0.01;
							diff += currentProduct.count;
						}
						break;
					}

					if (best && Math.abs(diff) === Math.abs((currentProduct.count - best.count))) {
						if ((diff > 0 && currentProduct.count > best.count) || (diff < 0 && currentProduct.count < best.count)) {
							currentProduct.saleprice += 0.01;
							best.saleprice -= 0.01;
							diff = diff - currentProduct.count + best.count;
						} else {
							currentProduct.saleprice -= 0.01;
							best.saleprice += 0.01;
							diff = diff + currentProduct.count - best.count;
						}
					}

					if (!best || ((best.count - Math.abs(diff)) > (currentProduct.count - Math.abs(diff)))) {
						best = currentProduct;
					}
				}

				if (diff > 0) {
					best.saleprice += 0.01;
					diff -= best.count;
				} else if (diff < 0) {
					best.saleprice -= 0.01;
					diff += best.count;
				}

				iteration++;
			}
		}

		function editSaleProduct (product) {
			tempEditProduct = angular.copy(product);
			vm.currentEditProduct = product;
			showEditModal();
		}

		function doneEditSaleProduct (form, $event) {
			$event.stopPropagation();
			if (form && form.$invalid) {
				return;
			}

			vm.submitted = true;

			vm.saleTotal = vm.saleProducts.reduce(function(total, product) {
				product.saleprice = product.saleprice && product.saleprice.replace ?
									Number(product.saleprice.replace(',','.')) : product.saleprice;
				product.count = product.count && product.count.replace ?
								Number(product.count.replace(',','.')) : product.count;
				product.absoluteSalePrice = product.saleprice;
				return total + (product.saleprice * product.count);
			}, 0);
			vm.saleTotal = parseFloat(vm.saleTotal.toFixed(2));

			absoluteTotal = vm.saleTotal;
			vm.saleProductEditModal.remove();
			vm.submitted = false;
		}

		function cancelEditSaleProduct(form, $event) {
			vm.currentEditProduct.count = tempEditProduct.count;
			vm.currentEditProduct.saleprice = tempEditProduct.saleprice;
			doneEditSaleProduct(form, $event);
		}

		function saveSale (form, $event) {
			$event.stopPropagation();
			if (form && form.$invalid) {
				return;
			}
			vm.submitted = true;
			vm.saleTotal = vm.saleTotal && vm.saleTotal.replace ?
							Number(vm.saleTotal.replace(',','.')) : vm.saleTotal;
			var saleTotal = vm.saleTotal + (vm.saleTotal * vm.tax_rate/100);
			saleTotal = Math.round(saleTotal * 100) / 100;
			Database.insert(saleTable, [saleTotal, moment(vm.saleDate).format('YYYY-MM-DD HH:mm:ss')])
			.then(function (response) {
				CashBalance.updateCashBalance();
				return response.insertId;
			})
			.then(function (saleId) {
				var promises = [];

				vm.saleProducts.forEach(function (p) {
					promises.push(Database.insert(saleProductTable, [saleId, p.id, p.count, p.saleprice]));

					// Decrement inventory if applicable
					if (p.inventoryid) {
						promises.push(Database.select('inventory', p.inventoryid)
							.then(function (response) {
								var inv = response.rows.item(0);

								var quantity = inv.quantity - p.count;
								p.limit = quantity;

								return Database.update('inventory', p.inventoryid, [
									inv.name,
									quantity,
									p.id
								]);
							})
						);
					}
				});

				$q.all(promises).then(function () {
					vm.checkoutModal.remove();
					resetSale();
				});
			});
			vm.submitted = false;
		}

		function resetSale () {
			vm.error = null;
			vm.filter = '';
			vm.saleDate     = new Date();
			vm.saleTotal    = 0;
			vm.productCount = 0;
			vm.saleProducts = [];
			vm.products.forEach(function (product) {
				product.count = 0;
				product.saleprice = product.price;
			});
		}

		init();
	}
})();
