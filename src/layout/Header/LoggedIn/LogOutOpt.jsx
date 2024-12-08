import icons from "../../../utils/icons"
import logoutUser from "../../../api/requests/logoutUser"

export default function LogOutOpt({user}) {
    return(
        <div className="lg:hidden px-8 py-6 flex gap-6 border-t border-secondary">
            <img src={user.avatar.url} alt="" className="rounded-full h-16 w-16 object-cover"/>
                <div className="flex flex-col items-start pb-6 gap-1">
                    <div className="flex items-center gap-2">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm">| {user.venueManager ? "Venue Manager" : "Customer"}</p>
                    </div>
                            
                    <p className="text-secondary text-sm font-medium">{user.email}</p>
                    <button onClick={logoutUser} type="button" className="underline hover:no-underline text-sm hover:font-medium duration-100 flex gap-2 items-center group">
                        Log out
                        <icons.longArrowRight/>
                    </button>
                </div>
            </div>
    )
}