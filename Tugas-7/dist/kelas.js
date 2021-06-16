"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kelas = /*#__PURE__*/function () {
  function Kelas(name, level, instructor) {
    _classCallCheck(this, Kelas);

    this._name = name, this._lavel = level, this._instructor = instructor;
    this._students = [];
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
  }]);

  return Kelas;
}();

module.exports = Kelas;