import icons from "../../utils/icons";

export default function ContactInfo() {
  return (
    <section className="md:w-3/4 lg:w-2/3 xl:w-1/2 px-[5%] lg:px-0 xl:pl-[7%] xl:pr-[5%] 2xl:pl-[15%] 2xl:pr-[10%] pt-8 lg:pt-16 pb-8 md:py-16 lg:py-16 xl:py-0">
      <h2 className="text-contrast font-bold tracking-wider text-sm md:text-base">
        CONTACT US
      </h2>
      <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold pt-2 md:pt-4 lg:pt-4">
        Get in touch
      </h1>

      <div className="py-6 md:py-8 lg:py-8">
        <p className="leading-relaxed text-sm md:text-base">
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out to us.
        </p>
        <p className="pt-4 leading-relaxed text-sm md:text-base">
          Here are some ways to contact us:
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-6 bg-background p-5 rounded-lg">
          <span className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center bg-customLightBlue rounded-xl">
            <icons.mailIcon className="text-contrast" size={28} />
          </span>
          <div className="flex flex-col">
            <p className="text-secondary text-sm md:text-base font-medium md:font-normal">
              Email:
            </p>
            <p className="font-medium">support@holidaze.com</p>
          </div>
        </div>

        <div className="flex items-center gap-6 bg-background p-5 rounded-lg">
          <span className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center bg-customLightBlue rounded-xl">
            <icons.phoneIcon className="text-contrast" size={28} />
          </span>
          <div className="flex flex-col">
            <p className="text-secondary text-sm md:text-base font-medium md:font-normal">
              Phone:
            </p>
            <p className="font-medium">+47 55 22 11 00</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between w-full pb-4 pt-6 md:py-6 lg:py-8">
        <p className="font-medium text-secondary text-sm md:text-base pb-4 md:pb-0">
          Or check us out on social media:
        </p>
        <div className="flex items-center gap-3">
          <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
            <i title="Linkedin" className="fa-brands fa-linkedin text-2xl" />
          </span>

          <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
            <i
              title="Facebook"
              className="fa-brands fa-square-facebook text-2xl"
            />
          </span>

          <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
            <i
              title="Instagram"
              className="fa-brands fa-square-instagram text-2xl"
            />
          </span>

          <span className="bg-background h-12 w-12 flex items-center justify-center rounded-lg hover:scale-110 duration-200">
            <i title="Youtube" className="fa-brands fa-youtube text-2xl" />
          </span>
        </div>
      </div>
    </section>
  );
}
