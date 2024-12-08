import { Helmet } from "react-helmet";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import FAQ from "./components/FAQ";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Contact Us | Holidaze</title>
        <meta
          name="description"
          content="Have questions or need assistance? Contact Holidaze! We're here to help with bookings, venues, and more. Reach out to us today!"
        />
      </Helmet>
      <div className="flex items-center flex-col xl:flex-row">
        <ContactInfo />
        <ContactForm />
      </div>
      <FAQ />
      <img
        src="contact.jpg"
        className="w-full object-cover h-[35rem] pt-6 bg-customLightBlue"
        alt=""
      />
    </div>
  );
}
