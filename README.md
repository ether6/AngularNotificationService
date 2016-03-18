# AngularNotificationService
Implements an observer pattern in AngularJS with subscription, broadcasting, and memory 
<br>
The following methods are included as part of the notificationService:
<br>
<br>listen(callback, event, id)
<br>listenMemory (callback, event, id)
<br>stopListening (event, id)
<br>unregisterAllEventsById (id)
<br>getMemory (event)
<br>notify (event, parameters)
<br>
<br><blockquote>callback: callback function reference
<br>event: string name of the event (e.x. "button clicked", or "search initiated", or "search data ready", etc)
<br>id: string identifying the listener -- used for unsubscribing and debugging
<br>parameters: obj or literal representing the data you are notifying</blockquote>
<br>
<br>The difference between the listen and listenMemory methods is that listenMemory will immediately retrieve past data if it exists for the registered event. Get memory retrieves past data if it exists but does not subscribe to future event notifications.
