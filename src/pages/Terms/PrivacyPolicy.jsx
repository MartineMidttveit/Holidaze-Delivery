export default function PrivacyPolicy() {
    return(
        <div className="bg-customLightBlue py-10 2xl:py-12">
            <div className="px-[5%] md:px-[15%] lg:px-[25%] xl:px-[30%] 2xl:px-[36%]">
                <h2 className="text-xl xl:text-2xl font-bold pb-2">Privacy Policy</h2>
                <ul className="list-disc pl-5 font-normal py-4 flex flex-col gap-2 pt-2">
                    <li>We collect personal information such as your name, email, and payment details when you use our services.</li>
                    <li>This information is used to process bookings, manage your account, and communicate with you.</li>
                    <li>Holidaze is committed to protecting your personal information and complies with data protection regulations.</li>
                    <li>We do not share your personal information with third parties, except as necessary to fulfill services (e.g., sharing your details with hosts) or as required by law.</li>
                </ul>
            </div> 
        </div>        
    )
}