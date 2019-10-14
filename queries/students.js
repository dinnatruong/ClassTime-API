class Student {
  static createStudent() {
    let query =
    `
        INSERT INTO classtime.student(
            first_name, last_name, phone_number, created_date
        ) VALUES(?, ?, ?, ?)
    `
    return query
  }

  static getStudentByPhone() {
    let query =
    `
        SELECT *
            FROM classtime.student
            WHERE phone_number = ?
    `
    return query
  }
}

module.exports = Student