import {avatar} from '../../utils/avatar.js'
import {banner} from '../../utils/banner.js'
import icons from '../../utils/icons.js'
import ProfileActions from "./profileActions.jsx";

const ProfileHeader = ({ userData, isManager }) => (
  <>
    <img
      src={banner(userData.banner.url)}
      alt={userData.banner.alt}
      className="bg-background h-80 lg:h-96 w-full object-cover"
    />

    <div className="bg-white h-64 lg:h-56 xl:h-56 relative">
      <div className="px-[5%] lg:px-[7%] 2xl:px-[10%]">
        <div className="md:pl-[5%] lg:pl-[5%] 2xl:pl-[7%] absolute left-0 bottom-52 md:bottom-56 lg:bottom-16 w-full flex justify-center md:justify-start">
          <img
            src={avatar(userData.avatar.url)}
            alt="A profile avatar placeholder"
            className="shadow-lg border-8 border-white rounded-full size-72 xl:size-80 2xl:size-96 object-cover"
          />
        </div>

        <div className="flex justify-between w-full md:flex-row flex-col">
          <div className="flex flex-col items-center md:items-start pt-8 md:pt-16 lg:pt-8 lg:ml-60 xl:ml-80 2xl:ml-96 lg:pl-12">
            <div className="flex items-center justify-center md:justify-start gap-2 pb-2 pt-10 md:pt-0 2xl:pt-2 w-full">
              <h1 className="font-semibold xl:text-lg">{userData.name}</h1>

              <p className="text-secondary font-medium text-sm xl:text-base">
                | {isManager ? 'Venue Manager' : 'Customer'}
              </p>
            </div>

            <p className="text-secondary">{userData.email}</p>
            <div className="flex items-center gap-2 pt-2 text-sm xl:text-base">
              <icons.locationIcon />
              Bergen, Norway
            </div>
          </div>

          <ProfileActions isManager={isManager} />
        </div>
      </div>
    </div>
  </>
)

export default ProfileHeader
