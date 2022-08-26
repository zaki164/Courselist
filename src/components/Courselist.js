import React, { Component, Fragment } from 'react'

export default class Courselist extends Component {

    state = {
        isEdit: false
    } 
    rendercourse = () => {
        return (
        <li>
            <span>{this.props.details.name}</span>
            <button onClick={() => {this.toggleState()}}>Edit Course</button>
            <button onClick={() => {this.props.deleteCourse(this.props.index)}}>delete Course</button>
        </li>
        )
    }
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState()
    }
    renderupdateform = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update Course</button> 
            </form>
        )
    } 
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({isEdit: !isEdit})
    }

    render() {
        let {isEdit} = this.state;
        return (
        <Fragment>
            { isEdit ? this.renderupdateform() : this.rendercourse()}
        </Fragment>
        )
    }
}
