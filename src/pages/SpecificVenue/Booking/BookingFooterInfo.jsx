import { Link } from "react-router-dom";

export default function BookingFooterInfo() {
  return (
    <div className="pt-6 pb-10 lg:py-10">
      <p className="text-center pb-1 text-secondary text-sm 2xl:text-base">
        Pressing the button will redirect you to the booking confirmation page.
      </p>
      <p className="text-center text-secondary text-sm 2xl:text-base">
        For more information regarding booking, read our{" "}
        <Link to="/terms" className="underline">
          terms and conditions.
        </Link>
      </p>
    </div>
  );
}
