(function () {
	angular.module('app.saleslog')
	.config(config);

	function config ($stateProvider) {
		$stateProvider.state('app.saleslog', {
			url: '/saleslog',
			cache: false,
			views: {
				'menuContent': {
					templateUrl: 'SalesLog/templates/saleslog.html',
					controller: 'SalesLogController',
					controllerAs: 'saleslog'
				}
			},
			resolve: {
				timeFrame: function () {
					return { id: 'reports_header_day', value: 'day' };
				},
				startDate: function (timeFrame) {
					return moment().startOf('day');
				},
				endDate: function (startDate, timeFrame) {
					return moment(startDate).endOf(timeFrame.value);
				},
				languages: function (Database) {
					return Database.select('languages').then(function (response) {
						var items = [];
						if (response.rows.length === 0) {
							return items;
						}
						for (var i = response.rows.length - 1; i >= 0; i--) {
							var item = response.rows.item(i);
							items.push(item);
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
		});
	}
})();
