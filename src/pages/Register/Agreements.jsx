import { Link } from "react-router-dom"
import CheckboxLabel from "../../components/CheckboxLabel"

export default function Agreements() {
    return (
        <div className="flex flex-col space-y-4 pt-2 pb-8">
            <CheckboxLabel name="rememberMe" label="Remember me"/>
            
            <div className="flex items-center gap-3 text-sm md:text-base">
                <input type="checkbox" name="rememberMe" className="h-6 w-6"/>
                <label htmlFor="rememberMe" className="flex gap-1">I agree to the 
                    <Link to="/terms" className="text-contrast underline font-medium">terms & conditions.</Link>
                </label>
            </div>
        </div>    
    )
}

