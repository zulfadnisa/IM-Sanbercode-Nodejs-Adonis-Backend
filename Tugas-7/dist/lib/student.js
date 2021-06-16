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

var Student = /*#__PURE__*/function () {
  function Student(name) {
    _classCallCheck(this, Student);

    this._name = name;
    this._scores = [];
    this._finalScore = 0;
  }

  _createClass(Student, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(input) {
      this._name = input;
    }
  }, {
    key: "finalScore",
    get: function get() {
      return this._finalScore;
    }
  }, {
    key: "createScore",
    value: function createScore(score) {
      this._scores.push(score);

      var sum = this._scores.reduce(function (a, b) {
        return a + b;
      }, 0);

      var avg = sum / this._scores.length || 0;
      this._finalScore = avg;
    }
  }]);

  return Student;
}();

var _default = Student;
exports["default"] = _default;