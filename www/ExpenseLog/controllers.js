(function () {
	angular.module('app.expenselog')
	// .controller('ExpenseLogController', ['ELpdfService', ExpenseLogController]);
	.controller('ExpenseLogController', ExpenseLogController);

	function ExpenseLogController (ELpdfService, Database, timeFrame, startDate, endDate, languages, formats, CashBalance, $state, $scope, $rootScope, $ionicModal, $ionicPopup, $filter, $ionicPopover, $q, $cordovaFile, $cordovaFileOpener2, $cordovaEmailComposer, $persist, IonicFiles) {
		var vm = this;

		var win = window;
		win.vm = vm;
		vm.scope = $scope;
		vm.vmScope = $scope;
		var rs = $rootScope;
		var code = rs.code || {};
		win.sepi = win.sepi || {};
		win.sepi.filter = $filter;
		vm.scopes = vm.scopes || {};
		vm.scopes.root = $rootScope;
		vm.scopes.expenselog = $scope;
		vm.formats = formats;

		var fileDirectory = cordova.file.syncedDataDirectory || cordova.file.dataDirectory;
		vm.fileDirectory = fileDirectory;
		win.sepi.fileDirectory = fileDirectory;

		vm.log = [];
		vm.reformattedList = {};
		vm.activeExpense = null;
		vm.editviewOpen = false;
		vm.totalExpenses = 0;
		vm.editModal = null;
		vm.expenses = '';
		vm.startDate = startDate;
		vm.endDate = endDate;
		vm.timeFrame = timeFrame;
		vm.date = Date.now();
		vm.submitted = false;

		vm.editExpense = editExpense;
		vm.save = save;
		vm.cancel = cancel;
		vm.addNewExpense = addNewExpense;
		vm.deleteExpense = deleteExpense;
		vm.getKeys = getKeys;
		vm.clearSearch = clearSearch;
		vm.showConfirm = showConfirm;
		vm.isCheckboxChecked = isCheckboxChecked;
		vm.change = change;

		vm.getUserInfo = getUserInfo;
		vm.createPopupMenu = createPopupMenu;
		vm.showPopupMenu = showPopupMenu;
		vm.closePopupMenu = closePopupMenu;
		vm.createExpenseLogPdf = ELpdfService.createExpenseLogPdf;
		vm.createPDFModal = createPDFModal;
		vm.closePDFViewer = closePDFViewer;
		vm.emailPDF = emailPDF;
		vm.createPDFEmail = createPDFEmail;
		vm.createPDFPopupMenu = createPDFPopupMenu;
		vm.openPDFPopupMenu = openPDFPopupMenu;
		vm.closePDFPopupMenu = closePDFPopupMenu;
		vm.pdfPopupMenu = null;
		vm.closeExpenseLog = closeExpenseLog;
		vm.setDefaultsForPdfViewer = setDefaultsForPdfViewer;
		// vm.initializeAllValues = initializeAllValues;
		vm.createReport = createReport;
		vm.user = null;
		vm.reportData = {};

		vm.pdfViewerTitle = "Expense Log";
		vm.pdfViewerNumber = 4;

		var tempExpense = null;
		var language = {};
		var expenseTable = 'expense';
		var title_delete, message_body, cancel_button;

		function init () {
			if (languages.length) {
				for (var i = 0; i < languages.length; i++) {
					language.type = languages[0].type;
				}
			}
			win.formats = vm.formats;
			vm.getUserInfo().then(function(res) {
				return vm.createPopupMenu(vm.scopes.expenselog);
			// }).then(function(res) {
			// 	return vm.createPDFModal($scope);
			// }).then(function(res) {
			// 	return vm.createPDFPopupMenu($scope);
			}).then(function(res) {
				return loadExpenseItems(Database, startDate, endDate);
			}).then(function(res) {
				Log.l("EL: Init() finished!");
			});
		}

		function showEditModal () {
			$ionicModal.fromTemplateUrl('ExpenseLog/templates/expenseEditModal.html', {
				scope: $scope,
				animation: 'slide-in-right'
			}).then(function (modal) {
				vm.editModal = modal;
				vm.editModal.show();
			});
		}

		function loadExpenseItems (Database, startDate, endDate) {
			return Database.select('expense', null, null, null, startDate, endDate)
			.then(function (response) {
				var items = [];
				vm.reformattedList = {};
				vm.log = items;
				vm.reportData.timeFrame = vm.timeFrame;
				vm.reportData.startDate = vm.startDate;
				vm.reportData.endDate = vm.endDate;
				vm.reportData.totalExpenses = vm.totalExpenses;


				if (response.rows.length === 0) {
					updateTotal();
					return;
				}

				for (var i = response.rows.length - 1; i >= 0; i--) {
					var item = response.rows.item(i);
					item.amount = Number(item.amount);
					item.date = moment(item.date).toDate();
					items.push(item);
				}

				vm.log.forEach(function (record) {
					var key = $filter('date')(record.date, 'mediumDate');
					vm.reformattedList[key] = vm.reformattedList[key] || [];
					vm.reformattedList[key].push(record);
				});

				vm.ischecked = false;

				updateTotal();
			});
		}

		function change (startDate, timeFrame) {
			vm.startDate = startDate;
			vm.timeFrame = timeFrame;
			vm.endDate = moment(vm.startDate).endOf(vm.timeFrame.value);
			loadExpenseItems(Database, vm.startDate, vm.endDate);
		}

		function editExpense (expense) {
			vm.activeExpense = expense;
			tempExpense = angular.copy(expense);
			vm.editviewOpen = true;
			showEditModal();
		}

		function save (item, form, $event) {
			$event.stopPropagation();
			if (form && form.$invalid) {
				return;
			}

			vm.submitted = true;

			item.amount = Number(item.amount.replace(',', '.'));
			var key = $filter('date')(vm.activeExpense.date, 'mediumDate');
			var oldKey = $filter('date')(tempExpense.date, 'mediumDate');

			if (oldKey === undefined) {
				oldKey = key;
			}

			vm.reformattedList[key] = vm.reformattedList[key] || [];

			Database.update(expenseTable, item.id, [
				item.name,
				item.amount,
				item.expType,
				item.comments,
				moment(item.date).format('YYYY-MM-DD HH:mm:ss'),
				item.type
			]);

			if (key !== oldKey) {
				vm.reformattedList[key].push(item);
				vm.reformattedList[oldKey].splice(vm.reformattedList[oldKey].indexOf(item), 1);
			}

			if (vm.reformattedList[oldKey].length === 0) {
				delete vm.reformattedList[oldKey];
			}

			vm.ischecked = false;
			vm.activeExpense = null;
			updateTotal();
			vm.editModal.remove();
			vm.submitted = false;
		}

		function cancel () {
			vm.submitted = true;
			if (vm.activeExpense) {
				vm.activeExpense.name = tempExpense.name;
				vm.activeExpense.amount = tempExpense.amount;
				vm.activeExpense.expType = tempExpense.expType;
				vm.activeExpense.comments = tempExpense.comments;
				vm.activeExpense.date = tempExpense.date;
				vm.activeExpense = null;
			}

			vm.editModal.remove();
			vm.submitted = false;
		}

		function addNewExpense () {
			tempExpense = {};
			vm.editviewOpen = false;
			showEditModal();
		}

		function deleteExpense (item) {
			var key = $filter('date')(item.date, 'mediumDate');
			vm.reformattedList[key].splice(vm.reformattedList[key].indexOf(item), 1);
			if (vm.reformattedList[key].length === 0) {
				delete vm.reformattedList[key];
			}
			Database.remove(expenseTable, item.id);
			vm.activeExpense = null;
			updateTotal();
			vm.editModal.remove();
			CashBalance.updateCashBalance();
		}

		function updateTotal () {
			vm.totalExpenses = 0;
			angular.forEach(vm.reformattedList, function (reports) {
				vm.totalExpenses += reports.reduce(function (previousValue, currentExpense) {
					return previousValue + currentExpense.amount;
				}, 0);
			});
			vm.reportData.totalExpenses = vm.totalExpenses;
		}

		function getKeys (obj) {
			return Object.keys(obj);
		}

		function clearSearch () {
			vm.search = '';
		}

		function isCheckboxChecked () {
			vm.ischecked = true;
		}

		function showConfirm () {
			if (language.type === 'es') {
				title_delete = 'Borrar Gasto';
				message_body = '¿Estás seguro?';
				cancel_button = 'Cancelar';
			}
			else {
				title_delete = 'Delete Expense';
				message_body = 'Are you sure?';
				cancel_button = 'Cancel';
			}

			var confirmPopup = $ionicPopup.confirm({
				title: title_delete,
				template: message_body,
				buttons: [
					{
						text: cancel_button,
						type: 'button-stable'},
					{
						text: '<b>Ok</b>',
						type: 'button-positive',
						onTap: function (e) {
							vm.deleteExpense(vm.activeExpense);
						}
					}
				]
			});
		}

		// Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function () {
			if (vm.editModal)
				vm.editModal.remove();
		});

		function getUserInfo() {
			Log.l("EL: in getUserInfo()...");
			return Database.select('user').then(function(response) {
				var items = [];
				Log.l("EL: getUserInfo() done, retrieved " + response.rows.length + " items.");
				if (response.rows.length === 0) {
					return items;
				}
				for (var i = response.rows.length - 1; i >= 0; i--) {
					var item = response.rows.item(i);
					items.push(item);
				}
				Log.l("EL: getUserInfo() done, retrieved:");
				Log.l(JSON.stringify(items[0]));
				vm.user = items[0];
				return items[0];
			});
		}

		function createPopupMenu($scope) {
			Log.l("EL: showing Popup Menu ...");
			var d = $q.defer();
			$ionicPopover.fromTemplateUrl('ExpenseLog/templates/PopupMenu.html', {
				scope: $scope
			}).then(function(popupMenu) {
				Log.l("EL: now in function after ionicPopover.fromTemplateUrl(PopupMenu) ...");
				$scope.popupMenu = popupMenu;
				vm.popupMenu = popupMenu;

				$scope.$on('$destroy', function() {
					Log.l("EL: now in scope.on('destroy')");
					vm.popupMenu.remove();
				});
				// Execute action on hidden popupMenu
				$scope.$on('popupMenu.hidden', function() {
					Log.l("EL: now in scope.on('popover.hidden')");
					// Execute action
				});
				// Execute action on remove popupMenu
				$scope.$on('popupMenu.removed', function() {
					Log.l("EL: now in scope.on('popover.removed')");
					// Execute action
				});
				d.resolve(vm.popupMenu);
			}).catch(function(err) {
				Log.l("EL: Error creating popupMenu!");
				Log.l(err);
				d.reject(err);
			});
			return d.promise;
		}

		function showPopupMenu($event) {
			Log.l("EL: now in scope.showPopupMenu()");
			// var menuElement = angular.element(document).find('.menu-button-expense-log');
			var menuElement = document.querySelector('.menu-button-expense-log');
			vm.popupMenu.show(menuElement);
			// vm.popupMenu.show('.menu-button-expense-log');
		}


		function closePopupMenu() {
			Log.l("EL: now in scope.closePopupMenu()")
			vm.popupMenu.hide();
		}

		function createPDFPopupMenu($scope) {
			Log.l("EL: creating PDFPopupMenu ...");
			var d = $q.defer();
			$ionicPopover.fromTemplateUrl('ExpenseLog/templates/PDFPopupMenu.html', {
				scope: $scope
			}).then(function(pdfPopupMenu) {
				Log.l("EL: now in function after ionicPopover.fromTemplateUrl('PDFPopupMenu') ...");
				$scope.pdfPopupMenu = pdfPopupMenu;
				vm.pdfPopupMenu = pdfPopupMenu;
				// pdfPopupMenu.show(".income-statement-menu")
				//Cleanup the pdfPopupMenu when we're done with it!
				$scope.$on('$destroy', function() {
					Log.l("EL: now in scope.on('destroy') for pdfPopupMenu");
					vm.pdfPopupMenu.remove();
				});
				// Execute action on hidden pdfPopupMenu
				$scope.$on('pdfPopupMenu.hidden', function() {
					Log.l("EL: now in scope.on('pdfPopupMenu.hidden')");
					// Execute action
				});
				// Execute action on remove pdfPopupMenu
				$scope.$on('pdfPopupMenu.removed', function() {
					Log.l("EL: now in scope.on('pdfPopupMenu.removed')");
					// Execute action
				});
				Log.l("EL: Now done creating pdfPopupMenu.");
				Log.l(vm.pdfPopupMenu);
				d.resolve(vm.pdfPopupMenu);
			}).catch(function(err) {
				Log.l("EL: Error creating pdfPopupMenu!");
				Log.l(err);
				d.reject(err);
			});
			return d.promise;
		}

		function openPDFPopupMenu($event) {
			Log.l("AL: now in openPDFPopupMenu(), pdfPopupmenu is:");
			Log.l(vm.pdfPopupmenu);
			// var menuElement = angular.element(document).find('.menu-button-pdf-viewer-expense-log');
			var menuElement = document.querySelector('.menu-button-pdf-viewer-expense-log');
			vm.pdfPopupMenu.show(menuElement);
			// vm.pdfPopupMenu.show('.menu-button-pdf-viewer-expense-log');
		}

		function closePDFPopupMenu() {
			Log.l("EL: Now in closePDFMenu() ...");
			vm.pdfPopupMenu.hide();
		}

		function closePDFViewer() {
			Log.l("EL: Now in closePDFViewer()...");
			// vm.pdfModal.hide();
			vm.pdfPopupMenu.remove();
			vm.pdfModal.remove();
			vm.closePopupMenu();
		}

		function emailPDF() {
			Log.l("EL: Now in emailPDF()...");
			vm.createPDFEmail();
		}

		function createPDFEmail() {
			Log.l("EL: Now in createPDFEmail()...");
			var SocialSharing = IonicNative.SocialSharing;
			SocialSharing.canShareViaEmail().then(function() {
				Log.l("EL: SocialSharing() is available!");
				var to = [];
				var attachments = [ vm.pdfDataFileURL];
				var subject = "Expense Log PDF";
				var body = "Attached is the expense log PDF file from SEPI.";
				Log.l("Now attempting to email file:\n%s", vm.pdfFileName);
				SocialSharing.shareViaEmail(body, subject, to, [], [], attachments).then(function(res) {
					Log.l("User sent e-mail successfully!");
					Log.l("Now closing PDF display!");
					// vm.closePDFViewer();
				}).catch(function(err) {
					Log.l("User canceled e-mail!");
					Log.l(err);
				});
			}, function() {
				Log.l("EL: SocialSharing() is NOT available.");
				var title = $filter('translate')("str_error").toUpperCase();
				var text = $filter('translate')("str_email_not_available");
				rs.code.showPopupAlert(title, text);
			});
		}

		function closeExpenseLog() {
			Log.l("EL: closing Expense Log ...");
			$state.go('app.reports');
		}

		function createPDFModal($scope) {
			Log.l("EL: Now in createPDFModal()");
			var d = $q.defer();
			// Initialize the modal view.
			$ionicModal.fromTemplateUrl('ExpenseLog/templates/pdf-viewer.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(pdfModal) {
				Log.l("EL: Now in function after ionicModal.fromTemplateUrl(pdfViewer)...");
				$scope.pdfModal = pdfModal;
				vm.pdfModal = pdfModal;
				$scope.$on('$destroy', function() {
					Log.l("EL: now in scope.on('destroy') for pdfModal");
					vm.pdfModal.remove();
				});
				// Execute action on hidden pdfModal
				$scope.$on('pdfModal.hidden', function() {
					Log.l("EL: now in scope.on('pdfModal.hidden')");
					// Execute action
				});
				// Execute action on remove pdfModal
				$scope.$on('pdfModal.removed', function() {
					Log.l("EL: now in scope.on('pdfModal.removed')");
					// Execute action
				});
				return createPDFPopupMenu($scope);
			}).then(function(res) {
				setDefaultsForPdfViewer($scope);
				Log.l("EL: Done creating pdfModal and pdfPopupMenu!");
				d.resolve(res);
			}).catch(function(err) {
				Log.l("EL: Error creating PDF modal!");
				Log.l(err);
				d.reject(err);
			});
			return d.promise;
		}

		function createReport() {
			Log.l("EL: Now running createReport(). reformattedList is:\n%s",JSON.stringify(vm.reformattedList, false, 2));
			vm.popupMenu.hide();
			createPDFModal(vm.scopes.expenselog).then(function(res) {
				return vm.pdfModal.show();
			}).then(function(res) {
				return vm.createExpenseLogPdf(vm.reformattedList, vm.user, vm.reportData);
			}).then(function(pdf) {
				Log.l("EL: Now in function after createExpenseLogPdf()...")
				var blob = new Blob([pdf], { type: 'application/pdf' });
				vm.pdfblob = blob;
				win.pdfblob = blob;
				vm.pdfFileURL = URL.createObjectURL(blob);
				win.pdfFileURL = vm.pdfFileURL;
				return $cordovaFile.writeFile(fileDirectory, "ExpenseLog.pdf", blob, true);
			}).then(function(res) {
				Log.l("EL: Success creating PDF file!");
				Log.l(res);
				vm.pdfFile = res;
				win.pdfFile = res;
				var cordovaURL = res.target.localURL;
				return IonicFiles.convertToDataURL(cordovaURL);
			}).then(function(res) {
				vm.pdfLocalFileURL = res;
				vm.pdfDataFileURL = res;
				win.pdfLocalFileURL = res;
				win.pdfDataFileURL = res;
				vm.scopes.expenselog.pdfUrl = vm.pdfFileURL;
				vm.pdfUrl = vm.pdfFileURL;
				Log.l("Done generating PDF and creating local URL for PDF.");
			}).catch(function(err) {
				Log.l("EL: Failed creating PDF file!");
				Log.l(err);
			});
		}

		function setDefaultsForPdfViewer(pdfScope) {
			pdfScope.scroll = 0;
			pdfScope.pdfLoaded = false;
			pdfScope.loading = 'loading';
			vm.loading = pdfScope.loading;
			pdfScope.pdfViewerTitle = vm.pdfViewerTitle;
			pdfScope.pdfViewerNumber = vm.pdfViewerNumber;

			pdfScope.onError = function(err) {
				Log.l("EL: Got pdfScope.onError!");
				Log.l(err);
			};

			pdfScope.onLoad = function() {
				Log.l("EL: Got pdfScope.onLoad!");
				pdfScope.loading = '';
				pdfScope.pdfLoaded = true;
			};

			pdfScope.onProgress = function(progress) {
				Log.l("EL: Got pdfScope.onProgress!");
				Log.l(progress);
			};
		}

		init();
	}
})();
