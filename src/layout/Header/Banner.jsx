import icons from '../../utils/icons'

export default function Banner() {
    return (
        <div className='bg-contrast h-10 lg:h-12 flex items-center justify-end px-[5%] lg:px-[7%] gap-6 lg:gap-[3rem] text-xs md:text-sm text-white'>
        <span className='flex items-center gap-2'> 
          <icons.phoneIcon className="text-white" size={18}/>
          <p>+47 55 22 11 00</p>
        </span>
        
        <span className='flex items-center gap-2'> 
          <icons.mailIcon className="text-white" size={18}/>
          <p className='underline'>support@holidaze.com</p>
        </span>
      </div>
    )
}

