import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";

export default function Footer() {

    const handlePageTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <footer className="flex flex-col bg-background text-primary border-t border-secondary w-full font-poppins">
            <div className="flex flex-col xl:flex-row justify-between px-[5%] lg:px-[7%] pt-10 pb-12">
                <Link to="/" className="font-bold text-xl">Holidaze</Link>
                <FooterNav/>
            </div>

            <div className="border-t border-secondary py-6 text-secondary">
                <div className="px-[5%] lg:px-[7%] flex flex-col justify-between md:items-center md:flex-row w-full">
                    <p className="font-medium flex items-center gap-1"><span className="text-lg">©</span>Holidaze 2024</p>

                        <p className="hidden xl:flex">Your perfect getaway, just a click away!</p>
                        <div className="flex items-center gap-4 text-2xl">
                            <i title="Linkedin" className="fa-brands fa-linkedin hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Facebook" className="fa-brands fa-square-facebook hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Instagram" className="fa-brands fa-square-instagram hover:scale-110 hover:text-primary duration-200"/>
                            <i title="Youtube" className="fa-brands fa-youtube hover:scale-110 hover:text-primary duration-200"/>

                            <button onClick={handlePageTop} type="button" className="ml-10 h-10 w-10 rounded bg-secondary flex items-center justify-center">
                                <icons.arrowUp/>
                            </button>
                        </div>
                </div>
            </div>
        </footer>
    )
}