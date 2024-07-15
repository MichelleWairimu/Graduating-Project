import { Navbar } from "../../components/Navbar"
import"./defaulthome.css"

export const DefaultHome = () => {
    return (
        <div role="main" aria-label="Default Home page" className="def">
            <Navbar/>
            <h1 aria-label="Welcome Message">Welcome User. Please Login or Register to use AgriGrow</h1>
        </div>
    )
}