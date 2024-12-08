import FooterLinks from "../../components/FooterLinks";
import { Link } from "react-router-dom";
import icons from "../../utils/icons";

export default function FooterNav() {
    return (
        <div className="grid gap-y-6 grid-cols-2 lg:flex justify-between w-full xl:w-4/5 2xl:w-2/3 pt-6 xl:pt-0">
                <div className="flex flex-col gap-2 xl:w-1/4">
                    <Link to="/contact" className="font-medium">Support</Link>
                    <FooterLinks linkedPage="/contact" navText="Contact us"/>
                    <FooterLinks linkedPage="/contact" navText="FAQs"/>
                    <FooterLinks linkedPage="/contact" navText="Help center"/>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <Link to="/about" className="font-medium">Company</Link>

                    <div className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        About us
                        <icons.arrowRight/>
                    </div>

                    <div className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Careers
                        <icons.arrowRight/>
                    </div>

                    <div className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Press & Media
                        <icons.arrowRight/>
                    </div>

                    <div className="flex gap-2 items-center text-secondary group hover:text-primary duration-300">
                        Blog
                        <icons.arrowRight/>
                    </div>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <Link to="/terms" className="font-medium">Legal</Link>
                    <FooterLinks linkedPage="/terms" navText="Terms & Conditions"/>
                    <FooterLinks linkedPage="/terms" navText="Privacy policy"/>
                    <FooterLinks linkedPage="/terms" navText="Cookie Policy"/>
                </div>

                <div className="flex flex-col gap-2 xl:w-1/4">
                    <Link to="/" className="font-medium">Explore</Link>
                    <FooterLinks linkedPage="/" navText="All venues"/>
                    <FooterLinks linkedPage="/" navText="Guest favorites"/>
                </div>
            </div>
    )
}

