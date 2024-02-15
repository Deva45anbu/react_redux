import Footer from "./Footer"
import Header from "./Header"
import { AddTask } from "./AddTask"
import Taskdetails from "./TaskDeatils"

export const HomePage=()=>{
    return(
        <div>
            <Header/>
            <AddTask></AddTask>
            <Taskdetails></Taskdetails>
            <Footer/>
        </div>
    )
}