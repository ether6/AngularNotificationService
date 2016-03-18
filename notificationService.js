  angular.module('someApp')
		.service('notificationService', [function () {
			
			var service = {
				observers: {},
				memoryObservers: {},
				memoryParameters: {},
				
				listen: listen,
				listenMemory: listenMemory,
				getMemory: getMemory,
				stopListening: stopListening,
				notify: notify,
				unregisterAllEventsById: unregisterAllEventsById
			};
			
			return service;

			/* Using observer pattern over Angular's $emit/$on */
			/* Start listening now and disregard anything that has happend in the past */
			function listen (callback, event, id) {
				if(id) {
					if (!service.observers[event])
						service.observers[event] = {};
					service.observers[event][id] = [];
					service.observers[event][id].push(callback);
				}
			};

			/* Start listening now and update with the most recent past event data */
			function listenMemory (callback, event, id) {
				listen(callback, event, id);
				if(service.memoryParameters[event] 
						&& typeof service.observers[event][id][0] == 'function') {
					service.observers[event][id][0](service.memoryParameters[event]);
				}
			};

			function stopListening (event, id){
				if(service.observers && service.observers[event] && service.observers[event][id]) {
					delete service.observers[event][id];
				}
			};
			
			function unregisterAllEventsById (id) {
				for (var event in service.observers) {
					if (service.observers[event][id])
						delete service.observers[event][id];
				}
			}
			
			function getMemory (event) {
				if(service.memoryParameters[event])
					return service.memoryParameters[event];
				else
					return false;
			};

			function notify (event, parameters) {
				console.log('Event Notification: ' + event);
				if (arguments.length > 1)
					service.memoryParameters[event] = parameters;
				for (var id in service.observers[event]) {
					angular.forEach(service.observers[event][id], function (callback) {
						callback(parameters);
					});
				};
			};

		}]);
