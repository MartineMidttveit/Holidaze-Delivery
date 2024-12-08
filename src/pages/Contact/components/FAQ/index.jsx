import { useState } from "react";
import icons from "../../../../utils/icons";
import faqQuestions from "../../../../utils/data/faqQuestions";
import FAQQuestion from "./FAQQuestion";
/**
 * FAQ component that displays collapsible sections of frequently asked questions
 * @returns {JSX.Element} Rendered FAQ component with multiple sections
 */
export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState({});

  const toggleFAQ = (section, index) => {
    setActiveIndex((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <div className="bg-customLightBlue grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 lg:py-20 px-[5%] lg:px-[7%] 2xl:px-[15%]">
      <h2 className="text-3xl lg:text-5xl font-bold lg:pb-6 lg:col-span-2">
        FAQs
      </h2>

      {/* Booking & Reservations */}
      <FAQQuestion
        title="Booking & Reservations"
        faqQuestions={faqQuestions.booking}
        icons={icons}
        toggleFAQ={toggleFAQ}
        activeIndex={activeIndex}
        section="booking"
      />

      {/* Payment and Pricing */}
      <FAQQuestion
        title="Payment & Pricing"
        faqQuestions={faqQuestions.payment}
        icons={icons}
        toggleFAQ={toggleFAQ}
        activeIndex={activeIndex}
        section="payment"
      />

      {/* Support & Troubleshooting */}
      <FAQQuestion
        title="Support & Troubleshooting"
        faqQuestions={faqQuestions.support}
        icons={icons}
        toggleFAQ={toggleFAQ}
        activeIndex={activeIndex}
        section="support"
      />

      {/* Guest Policies and Requirements */}
      <FAQQuestion
        title="Guest Policies and Requirements"
        faqQuestions={faqQuestions.policies}
        icons={icons}
        toggleFAQ={toggleFAQ}
        activeIndex={activeIndex}
        section="policies"
      />
    </div>
  );
}
