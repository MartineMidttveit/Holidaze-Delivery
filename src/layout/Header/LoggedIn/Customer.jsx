import icons from "../../../utils/icons"
import NavLinks from "../../../components/NavLinks"

export default function Customer() {
    return(
        <div className="lg:hidden">
            <NavLinks linkedPage="profile" icon={<icons.profileIcon/>} navText="Your profile"/>
        </div>
    )
}