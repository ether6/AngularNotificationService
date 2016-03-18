# AngularNotificationService
Implements an observer pattern in AngularJS with subscription, broadcasting, and memory 
* Note, general appropriation and credit due to various parties disclaimer!

The following methods are included as part of the notificationService:

listen(callback, event, id)
listenMemory (callback, event, id)
stopListening (event, id)
unregisterAllEventsById (id)
getMemory (event)
notify (event, parameters)

  callback: callback function reference
  event: string name of the event (e.x. "button clicked", or "search initiated", or "search data ready", etc)
  id: string identifying the listener -- used for unsubscribing and debugging
  parameters: obj or literal representing the data you are notifying
  
The difference between the listen and listenMemory methods is that listenMemory will immediately retrieve past data if it exists for the registered event. Get memory retrieves past data if it exists but does not subscribe to future event notifications.
