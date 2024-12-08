import { classNames } from "../../../../utils/className";

const FAQQuestion = ({
  faqQuestions,
  title,
  icons,
  toggleFAQ,
  activeIndex,
  section,
  
}) => {
  return (
    <div className="bg-white rounded-lg p-8 lg:p-10 2xl:p-12">
      <h3 className="md:text-lg lg:text-xl font-bold pb-4 lg:pb-6">{title}</h3>

      <div className="flex flex-col gap-3">
        {faqQuestions.map((faq, index) => (
          <div key={index} className="lg:pb-2">
            <button
              type="button"
              className="flex items-center justify-between cursor-pointer w-full"
              onClick={() => toggleFAQ(section, index)}
            >
              <span className="font-medium text-left text-sm md:text-base w-full leading-relaxed">
                {faq.question}
              </span>
              <span
                className={classNames(
                  "w-[3rem] flex items-center justify-center transition-transform",
                  activeIndex[section] === index ? "rotate-0" : "-rotate-90"
                )}
              >
                <icons.chevronDown />
              </span>
            </button>
            {activeIndex[section] === index && (
              <p className="pt-3 lg:pt-5 leading-relaxed text-secondary text-sm md:text-base pr-16">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQQuestion;
