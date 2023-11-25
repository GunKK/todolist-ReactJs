import React from 'react';

export default class CourseInfo extends React.Component {

    handleDelete = (courseId) => {
        this.props.deleteCourse(courseId)
    }
    render() {

        const { listCourses } = this.props;
        
        return (
            <React.Fragment>
                {(listCourses.map((course) => {
                        return (
                            <div key={course.id}>
                                Name: <b>{ course.name }</b> - price: { Number(course.price) } USD - Teacher: { course.teacher } 
                                    <button 
                                        style={{ padding: "10px", borderRadius: "12px", cursor: "pointer" }}
                                        onClick={()=> {this.handleDelete(course.id)}}
                                    >
                                        Delete
                                    </button>
                            </div>
                        )
                    })
                )}
            </React.Fragment>
        )
    }
}