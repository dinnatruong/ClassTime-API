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
            SELECT *
                FROM classtime.attendance
                WHERE id_student = ?
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