import React, { Component } from 'react'
import Courseform from './components/Courseform'
import Courselist from './components/Courselist'

export default class App extends Component {

  state = {
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JQuery"}
    ],
    current: ''
  }

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    }) 
  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    if (current === '') {
      return false 
    } else {
      let courses = this.state.courses;
      courses.push({name: current});
      this.setState({
        courses,
        current: ''
      })
    }
  }

  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({courses})
  }

  editCourse = (index, val) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = val;
    this.setState({courses})
  }

  render() {
    let {courses} = this.state;
    let mycourses = courses.map((course, index) => {
      return <Courselist details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
    return (
      <section className='App'>

        <h2>Add Course</h2>
        <Courseform updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        { courses.length ? <ul>{mycourses}</ul> : <p>There is no items to show</p>}

      </section>
    )
  }
}

