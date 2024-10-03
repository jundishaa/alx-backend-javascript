xport default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  set students(value) {
    this._validateStudents(value);
    this._students = value;
  }

  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
