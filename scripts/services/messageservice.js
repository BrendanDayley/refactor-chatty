'use strict';

app
	.service('MessageService', function ($q, $http) {
		this.getMessages = function () {
				var deferred = $q.defer();

				$http({
						method: 'GET',
						url: 'http://localhost:8181'
					})
					.success(function (data) {
						deferred.resolve(data);
					});

				return deferred.promise;
			},
			
			this.addMessage = function (message) {
				var deferred = $q.defer();

				$http({
						method: 'POST',
						url: 'http://localhost:8181',
						data: {
							message: message,
						},
					})
					.success(function (data) {
						deferred.resolve(data);
					});
				return deferred.promise;
			}
	});
