class Attendance {
    static createAttendance() {
        let query =
        `
            INSERT INTO classtime.attendance(
                id_student, id_course, created_date
            ) VALUES(?, ?, ?)
        `
        return query
    }

    static getAttendanceByUser() {
        let query =
        `
            SELECT a.id_attendance, a.id_student, a.attended, a.missed, a.created_date AS attendance_created_date,
             c.id_course, c.title, c.code, c.created_date AS course_created_date
                FROM classtime.attendance a, classtime.course c
                WHERE id_student = ? AND a.id_course = c.id_course
        `
        return query
    }

    static updateAttendance() {
        let query =
        `
            UPDATE classtime.attendance
                SET attended = ?, missed = ?
                WHERE id_attendance = ?
        `
        return query
    }
}

module.exports = Attendance