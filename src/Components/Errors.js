import { useNavigate } from "react-router-dom"


export const PageNotFound=()=>{
    const navigateTo= useNavigate()

    return(
        <div>
            <h1>504 Page Not Found</h1>
            <button onClick={()=>navigateTo('/footer')}>Home Page</button>
        </div>
    )
}