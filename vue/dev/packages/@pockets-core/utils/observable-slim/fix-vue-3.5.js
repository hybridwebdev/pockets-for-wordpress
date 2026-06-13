        Object.defineProperty(target, '__getPath', {
			enumerable: false,  // Make sure it doesn't show up in enumerations
			get: function() {
				return _getPath(target, path);
			},
			set: function(){
				
			}
		});
		
		Object.defineProperty(target, '__getParent', {
            enumerable: false,  // Make sure it doesn't show up in enumerations
            get: function() {
                return function(i) {
                    if (typeof i === "undefined") var i = 1;
                    var parentPath = _getPath(target, "__getParent").split(".");
                    parentPath.splice(-(i+1),(i+1));
                    return _getProperty(observable.parentProxy, parentPath.join("."));
                }
            }
		});
