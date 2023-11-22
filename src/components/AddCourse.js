import React from "react";

export default class AddCourse extends React.Component {

    state = {
        name: "",
        price: 0,
        teacher: "",
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    changePrice = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    changeTeacher = (event) => {
        this.setState({
            teacher: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const uniqueNumber = Math.floor(Math.random() * 1000000000);
        const newCourse = {
            id: uniqueNumber, 
            name: this.state.name, 
            price: this.state.price, 
            teacher: this.state.teacher
        }
        
        this.props.addCourse(newCourse)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={event => {this.handleSubmit(event)}}>
                    <h1>Add New course</h1>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text"
                            onChange={event => {this.changeName(event)}}
                            value={this.state.name}
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input 
                            type="number"
                            onChange={event => {this.changePrice(event)}}
                            value={this.state.price}
                        />
                    </div>
                    <div>
                        <label>Teacher</label>
                        <input 
                            type="text"
                            onChange={event => {this.changeTeacher(event)}}
                            value={this.state.teache}
                        />
                    </div>
                    <button type="submit">Add</button>
                </form>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}