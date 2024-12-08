import RegisterForm from './RegisterForm'
import AccountType from './AccountType'
import { useState, useEffect } from 'react'

export default function Register() {
  const [manager, setManager] = useState(undefined)

  useEffect(() => {
    const title = 'Register | Holidaze';
    document.title = title;

    const description = 'Sign up for Holidaze to create your profile and manage venues, bookings, and more.';
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="flex items-center px-[5%] lg:px-[7%] 2xl:px-[20%] w-full justify-between gap-[3%] 2xl:gap-[5%] py-[2.5%] bg-background">
      <div className="w-full xl:w-1/2 xl:pr-[5%] md:px-[10%] lg:px-[20%] xl:px-[0%]">
        <h1 className="text-xl md:text-2xl 2xl:text-4xl font-bold pt-4 lg:pt-4 pb-6 md:pb-10">
          Register
        </h1>

        <AccountType manager={manager} setManager={setManager} />
        <RegisterForm venueManager={manager} />
      </div>

      <div className="hidden xl:flex xl:w-1/2">
        <img src="register.jpg" alt="The busy streets in the middle of Tokyo city at night" className="w-full object-cover" />
      </div>
    </div>
  )
}