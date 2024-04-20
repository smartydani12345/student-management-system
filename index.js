#! /usr/bin/env node
class Student {
    name;
    studentId;
    coursesEnrolled;
    balance;
    constructor(name) {
        this.name = name;
        this.studentId = this.generateStudentId();
        this.coursesEnrolled = [];
        this.balance = 0;
    }
    generateStudentId() {
        // Generate a 5-digit unique student ID
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    enroll(course) {
        this.coursesEnrolled.push(course);
        // Assuming each course has a fixed tuition fee of 500 for simplicity
        this.balance += 600;
    }
    payTuitionFee(amount) {
        this.balance -= amount;
    }
    viewBalance() {
        return this.balance;
    }
    showStatus() {
        return `Name: ${this.name}\nID: ${this.studentId}\nCourses Enrolled: ${this.coursesEnrolled.join(', ')}\nBalance: ${this.balance}`;
    }
}
class StudentManagementSystem {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const student = new Student(name);
        this.students.push(student);
        return student;
    }
    enrollStudent(student, course) {
        student.enroll(course);
    }
}
// Example usage:
const sms = new StudentManagementSystem();
const student1 = sms.addStudent("Daniyal Azhar");
sms.enrollStudent(student1, "Banking Finance");
console.log(student1.showStatus());
export {};
