import icons from "../../utils/icons"
import NavLinks from "../../components/NavLinks"

export default function BottomNavEle() {
    return(
        <div className="lg:hidden flex flex-col py-4 border-t border-secondary mt-4 lg:mt-0">
            <NavLinks linkedPage="/Contact" icon={<icons.supportIcon/>} navText="Contact us"/>
            <NavLinks linkedPage="/Terms" icon={<icons.termsIcon/>} navText="Terms & Conditions"/>            
        </div>
    )
}