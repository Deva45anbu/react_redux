import React from "react";
import {  useSelector } from "react-redux";
const Header = () => {
        const {taskslist}=useSelector((state)=>state.tasks)
    return (
        <div >
            <h1 className="text-center my-4 mx-4 text-primary">Project Management</h1>
            <p className="text-center lead">Currently {taskslist.length} task(s) Pending</p>
        </div>
    )
}

export default Header;