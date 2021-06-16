"use strict";

var _student = _interopRequireDefault(require("./student"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(nama, level, instructor) {
    _classCallCheck(this, Kelas);

    this._name = nama;
    this._students = [];
    this._level = level;
    this._instructor = instructor;
    this.mastered = [];
    this.completed = [];
    this.participant = [];
  }

  _createClass(Kelas, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(input) {
      this._name = input;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    },
    set: function set(input) {
      this._level = input;
    }
  }, {
    key: "instructor",
    get: function get() {
      return this._instructor;
    },
    set: function set(input) {
      this._instructor = input;
    }
  }, {
    key: "createStudent",
    value: function createStudent(student) {
      this._students.push(student);
    }
  }, {
    key: "updateStudent",
    value: function updateStudent(index, student) {
      this._students[index] = student;
    }
  }, {
    key: "graduate",
    value: function graduate(students) {
      var _this = this;

      students.map(function (el) {
        if (el._finalScore > 85) {
          _this.mastered.push(el);
        } else if (el._finalScore <= 60 && el._finalScore >= 85) {
          _this.completed.push(el);
        } else {
          _this.participant.push(el);
        }
      });
      return {
        participant: this.participant,
        completed: this.completed,
        mastered: this.mastered
      };
    }
  }]);

  return Kelas;
}();

module.exports = Kelas;