import icons from "../../../utils/icons"
import NavLinks from "../../../components/NavLinks"

export default function VenueManager() {
    return(
        <div className="flex flex-col lg:hidden">
            <NavLinks linkedPage="profile" icon={<icons.homeIcon />} navText="Home"/>
            <NavLinks linkedPage="profile" icon={<icons.profileIcon />} navText="Your profile"/>
            <NavLinks linkedPage="newVenue" icon={<icons.newVenueIcon/>} navText="New venue"/>
        </div>
    )
}