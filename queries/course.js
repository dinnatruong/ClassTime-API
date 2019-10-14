class Course {
    static createCourse() {
        let query =
        `
            INSERT INTO classtime.course(
                title, code, created_date
            ) VALUES(?, ?, ?)
        `
        return query
    }

    static getCourseById() {
        let query =
        `
            SELECT *
                FROM classtime.course
                WHERE id_course = ?
        `
        return query
    }
}

module.exports = Course