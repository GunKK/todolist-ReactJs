import React from "react";
import { useState } from "react";

const AddCourse = (props) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [teacher, setTeacher] = useState('');
    const { addCourse } = props;

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changePrice = (event) => {
        setPrice(event.target.value);
    }

    const changeTeacher = (event) => {
        setTeacher(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const uniqueNumber = Math.floor(Math.random() * 1000000000);
        const newCourse = {
            id: uniqueNumber, 
            name: name, 
            price: price, 
            teacher: teacher
        }
                
        addCourse(newCourse)
    }

    return (
        <>
            <form onSubmit={event => {handleSubmit(event)}}>
                <h1>Add New course</h1>
                <div>
                    <label>Name</label>
                    <input 
                        type="text"
                        onChange={event => {changeName(event)}}
                        value={name}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input 
                        type="number"
                        onChange={event => {changePrice(event)}}
                        value={price}
                    />
                </div>
                <div>
                    <label>Teacher</label>
                    <input 
                        type="text"
                        onChange={event => {changeTeacher(event)}}
                        value={teacher}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default AddCourse;