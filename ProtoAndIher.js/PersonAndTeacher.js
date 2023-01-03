function solve() {
 
        class Person {
            constructor(name, email) {
                this.name = name;
                this.email = email;
            }
        }
     
        class Teacher extends Person {
            constructor(teacherName, teacherEmail, subject) {
                super(teacherName, teacherEmail);
                this.subject = subject;
            }
        }
     
        return {
            Person,
            Teacher
        }
    }