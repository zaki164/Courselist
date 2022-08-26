

function Courseform(props) {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.updateCourse} value={props.current}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default Courseform