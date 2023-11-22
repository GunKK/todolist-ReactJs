import React from 'react';

export default class CourseInfo extends React.Component {
    
    render() {

        const { listCourses } = this.props;
        
        return (
            <div>
                {(listCourses.map((course) => {
                        return (
                            <div key={course.id}>
                                Name: <b>{ course.name }</b> - price: { Number(course.price) } USD - Teacher: { course.teacher } 
                            </div>
                        )
                    })
                )}
            </div>
        )
    }
}