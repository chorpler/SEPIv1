(function () {
	angular.module('app.activitylog')
	.config(config);

	function config ($stateProvider) {
		$stateProvider
		.state('app.activitylog', {
			url: '/activitylog',
			cache: false,
			views: {
				'menuContent': {
					templateUrl: 'ActivityLog/templates/activityLog.html',
					controller: 'ActivityLogController',
					controllerAs: 'activity'
				}
			},
			resolve: {
				timeFrame: function () {
					return { id: 'reports_header_day', value: 'day'};
				},
				startDate: function (timeFrame) {
					return moment().startOf('day');
				},
				endDate: function (startDate, timeFrame) {
					return moment(startDate).endOf(timeFrame.value);
				},
				startingCash: function (startDate, timeFrame, Database) {
					return Database.calculateCashOnHand(null, startDate).then(function (response) {
						return response.rows.item(0).total;
					});
				},
				expenses: function (startDate, endDate, Database) {
					return Database.select('expense', null, null, null, startDate, endDate).then(function (response) {
						var items = [];

						if (!response || response.rows.length === 0) {
							return items;
						}

						for (var i = response.rows.length - 1; i >= 0; i--) {
							var item = response.rows.item(i);
							item.amount = Number(item.amount);
							item.date = moment(item.date);
							items.push(item);
						};

						return items;
					});
				},
				sales: function (startDate, endDate, Database) {
					return Database.select('sale', null, null, null, startDate, endDate).then(function (response) {
						var items = [];
						if (response.rows.length === 0) {
							return items;
						}

						for (var i = response.rows.length - 1; i >= 0; i--) {
							var item = response.rows.item(i);
							item.date = moment(item.date);
							items.push(item);
						};

						return items;
					});
				},
				cashInfusions: function (startDate, endDate, Database) {
					return Database.select('cashInfusion', null, null, null, startDate, endDate)
					.then(function (response) {
						var items = [];
						if (response.rows.length === 0) {
							return items;
						}

						for (var i = response.rows.length - 1; i >= 0; i--) {
							var cashInfusion = response.rows.item(i);
							cashInfusion.date = moment(cashInfusion.date);
							items.push(cashInfusion);
						}

						return items;
					});
				}
				,formats: function (Database) {
					return Database.select('formats').then(function (response) {
						var items = [];
						if (response.rows.length === 0) {
							return items;
						}
						for (var i = response.rows.length - 1; i >= 0; i--) {
							var item = response.rows.item(i);
							/* id, dateformat */
							items.push(item);
						}
						return items[0];
					});
				}
			}
		})
	}
})();
