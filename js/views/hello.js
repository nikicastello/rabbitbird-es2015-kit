"use strict";

System.register([], function (_export, _context) {
  var _createClass, Hello;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      Hello = function () {
        function Hello() {
          _classCallCheck(this, Hello);
        }

        _createClass(Hello, [{
          key: "greetWorld",
          value: function greetWorld(name) {
            console.log("Hello " + name + "!");
          }
        }]);

        return Hello;
      }();

      _export("default", Hello);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzL3ZpZXdzL2hlbGxvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU07Ozs7Ozs7cUNBQ08sTUFBTTtBQUNmLG9CQUFRLEdBQVIsWUFBcUIsVUFBckIsRUFEZTs7OztlQURiOzs7eUJBTVMiLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWxsbyB7XG4gIGdyZWV0V29ybGQobmFtZSkge1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbyAke25hbWV9IWApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvO1xuIl19