"use strict";

// function hasDevTools() {
// 	return (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__);
// }

function connectDevTools() {
	if (hasDevTools()) {
		return window.__REDUX_DEVTOOLS_EXTENSION__.connect();
	} else {
		// ??
		return null;
	}
}

function disconnectDevTools() {
	if (hasDevTools()) {
		return window.__REDUX_DEVTOOLS_EXTENSION__.disconnect();
	} else {
		// ??
		return null;
	}
}

function sendToDevTools(connection) {
	return function(action) {
		return function(state) {
			return function() {
				if (hasDevTools()) {
					return connection.send(action, state);
				} else {
					// ??
					return null;
				}
			};
		};
	};
}

function subscribeDevTools(connection) {
	return function(handler) {
		return function() {
			if (hasDevTools()) {
				return connection.subscribe(function (message) {
					if (message.type === 'DISPATCH' && message.state) {
						// Extra () due to handler being a State -> Effect
						handler(message.state)();
					}
				});
			} else {
				// ??
				return null;
			}
		};
	};
}

function unsubscribeDevTools(connection) {
	return function() {
		connection.unsubscribe();
	};
}

export {connectDevTools, disconnectDevTools, /* hasDevTools, */ sendToDevTools, subscribeDevTools, unsubscribeDevTools}
