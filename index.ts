#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name: string;
    studentId: string;
    coursesEnrolled: string[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentId = this.generateStudentId();
        this.coursesEnrolled = [];
        this.balance = 0;
    }

    private generateStudentId(): string {
        // Generate a 5-digit unique student ID
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

    enroll(course: string): void {
        this.coursesEnrolled.push(course);
        // Assuming each course has a fixed tuition fee of 500 for simplicity
        this.balance += 600;
    }

    payTuitionFee(amount: number): void {
        this.balance -= amount;
    }

    viewBalance(): number {
        return this.balance;
    }

    showStatus(): string {
        return `Name: ${this.name}\nID: ${this.studentId}\nCourses Enrolled: ${this.coursesEnrolled.join(', ')}\nBalance: ${this.balance}`;
    }
}

class StudentManagementSystem {
    students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string): Student {
        const student = new Student(name);
        this.students.push(student);
        return student;
    }

    enrollStudent(student: Student, course: string): void {
        student.enroll(course);
    }

    // Other methods for viewing balance, paying tuition fees, etc.
}

// Example usage:
const sms = new StudentManagementSystem();
const student1 = sms.addStudent("Daniyal Azhar");
sms.enrollStudent(student1, "Banking Finance");
console.log(student1.showStatus());