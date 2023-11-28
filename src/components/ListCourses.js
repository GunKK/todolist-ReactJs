import React, { useEffect, useState } from "react";
import CourseInfo from "./CourseInfo";
import AddCourse from "./AddCourse";


const ListCouses = () => {

    const [listCourses, setListCourses] = useState(
        [
            {id: 1, name: "PHP", price: 300, teacher: "Nduchau"},
            {id: 2, name: "Ruby", price: 400, teacher: "Nduchau1"},
            {id: 3, name: "Java", price: 700, teacher: "Nduchau2"},
        ]
    );

    const addCourse = (newCourse) => {
        setListCourses(
            [newCourse,...listCourses]
        );
    }

    const deleteCourse = (courseId) => {
        let coursesClone = [...listCourses];
        coursesClone = coursesClone.filter(course => course.id !== courseId)
        setListCourses([...coursesClone]);
    }

    useEffect(() => {
        if (listCourses.length < 1) {
            alert("You deleted all courses");
        }
    }, [listCourses])

    return (
        <>
            <AddCourse addCourse={addCourse} />
            <CourseInfo listCourses={listCourses} deleteCourse={deleteCourse} />
        </>
    )
}

export default ListCouses;