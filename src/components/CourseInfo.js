import React from 'react';

const CourseInfo = (props) => {

    const { listCourses, deleteCourse } = props;

    const handleDelete = (courseId) => {
        deleteCourse(courseId);
    }

        
    return (
        <>
            {(listCourses.map((course) => {
                    return (
                        <div key={course.id}>
                            Name: <b>{ course.name }</b> - price: { Number(course.price) } USD - Teacher: { course.teacher } 
                                <button 
                                    style={{ padding: "10px", borderRadius: "12px", cursor: "pointer" }}
                                    onClick={()=> {handleDelete(course.id)}}
                                >
                                    Delete
                                </button>
                        </div>
                    )
                })
            )}
        </>
    )
}

export default CourseInfo;