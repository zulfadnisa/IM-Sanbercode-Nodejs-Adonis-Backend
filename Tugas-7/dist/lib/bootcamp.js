"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _kelas = _interopRequireDefault(require("./kelas"));

var _student = _interopRequireDefault(require("./student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp(name) {
    _classCallCheck(this, Bootcamp);

    this._name = name;
    this._classes = [];
    this._graduated = {};
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
    key: "classes",
    get: function get() {
      return this._classes;
    }
  }, {
    key: "graduated",
    get: function get() {
      return this._graduated;
    }
  }, {
    key: "createClass",
    value: function createClass(kelas, level, instructor) {
      var newClass = new _kelas["default"](kelas, level, instructor);

      this._classes.push(newClass);
    }
  }, {
    key: "register",
    value: function register(kelas, newStudent) {
      this._classes.find(function (el) {
        if (el._name === kelas) {
          var newStud = new _student["default"](newStudent);
          el.createStudent(newStud);
        }
      });
    }
  }, {
    key: "runBatch",
    value: function runBatch(kelas, week) {
      var _this = this;

      this._classes.find(function (el) {
        if (el._name == kelas) {
          el._students.map(function (student, index) {
            for (var i = 0; i < week; i++) {
              var score = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
              student.createScore(score * 10);
            }

            el.updateStudent(index, student);
          });

          _this._graduated["graduated from ".concat(kelas)] = el.graduate(el._students);
        }
      });
    }
  }]);

  return Bootcamp;
}();

var _default = Bootcamp;
exports["default"] = _default;