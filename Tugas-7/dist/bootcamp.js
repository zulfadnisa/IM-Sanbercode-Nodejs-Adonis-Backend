"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kelas = _interopRequireDefault(require("./kelas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp(name) {
    _classCallCheck(this, Bootcamp);

    this._name = name;
    this._classes = [];
  }

  _createClass(Bootcamp, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(input) {
      this._name = input;
    }
  }, {
    key: "createClass",
    value: function createClass(kelas, level, instructor) {
      var newClass = new _kelas["default"](kelas, level, instructor);
      console.log(newClass.name);
    }
  }]);

  return Bootcamp;
}();

var _default = Bootcamp;
exports["default"] = _default;