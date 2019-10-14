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
}

module.exports = Course