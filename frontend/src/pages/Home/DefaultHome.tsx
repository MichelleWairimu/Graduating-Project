import { Navbar } from "../../components/Navbar"
import"./defaulthome.css"

export const DefaultHome = () => {
    return (
        <div className="def">
            <Navbar/>
            <h1>Welcome User. Please Login or Register to use AgriGrow</h1>
        </div>
    )
}