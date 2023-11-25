import React from "react";
import CourseInfo from "./CourseInfo";
import AddCourse from "./AddCourse";


export default class ListCouses extends React.Component {

    state = {
        listCourses: [
            {id: 1, name: "PHP", price: 300, teacher: "Nduchau"},
            {id: 2, name: "Ruby", price: 400, teacher: "Nduchau1"},
            {id: 3, name: "Java", price: 700, teacher: "Nduchau2"},
        ]
    }

    addCourse = (newCourse) => {
        this.setState({
            listCourses: [newCourse, ...this.state.listCourses]
        })
    }

    deleteCourse = (courseId) => {
        let coursesClone = [...this.state.listCourses];
        coursesClone = coursesClone.filter(course => course.id !== courseId)
        this.setState({
            listCourses: coursesClone
        })
    }

    render() {
        return (
            <>
                <AddCourse addCourse={this.addCourse} />
                <CourseInfo listCourses={this.state.listCourses} deleteCourse={this.deleteCourse} />
            </>
        )
    }
}