import React, { useState } from "react";
import Button from "../../components/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    const { value } = e.target;

    const filteredValue = value.replace(/[^a-zA-ZÆØÅæøå\s]/g, "");

    setFormData({
      ...formData,
      name: filteredValue,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.length >= 3 &&
      formData.email &&
      formData.phone &&
      formData.message
    ) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-background w-full xl:w-1/2 flex justify-end px-[5%] lg:px-0 xl:pl-[5%] xl:pr-[7%] 2xl:pl-0 2xl:pr-[15%] py-12 md:py-16 lg:py-20 2xl:py-28">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-full 2xl:ml-[15%] bg-white mx-auto rounded-lg">
        <h1 className="text-xl 2xl:text-2xl pt-10 px-8 md:px-10 lg:px-12 font-bold">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit}
          className="px-8 md:px-10 lg:px-12 pt-6 pb-12 space-y-3 lg:space-y-4 xl:space-y-6 bg-white rounded-lg shadow-md"
        >
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
              required
            />

            {
              <p className="text-red-500 text-xs mt-1">
                {formData.name.length < 3 &&
                  formData.name.length > 0 &&
                  "Name must be at least 3 characters."}
              </p>
            }
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-secondary"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-secondary rounded text-sm md:text-base lg:text-base resize-none"
              required
            />
          </div>

          <div>
            <Button
              type="submit"  
              className="w-full"        
            >
              {isSubmitted ? "Message Sent!" : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
