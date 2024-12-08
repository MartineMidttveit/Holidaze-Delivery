import {Link} from 'react-router-dom'
import Button from '../../components/Button'
import EditProfile from '../../components/Modals/EditProfile'
import {classNames} from '../../utils/className.js'

const ProfileActions = ({ isManager }) => (
  <div className="flex gap-3 justify-center md:self-end pt-4 lg:pt-0 z-50">
    <EditProfile
      trigger={
        <Button type="button" variant="secondary">
          Edit profile
        </Button>
      }
    />

    {isManager && (
      <Link
        to="/newVenue"
        className={classNames(
          'text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 hover:bg-contrast duration-300 hover:text-white hover:border-contrast flex items-center justify-center'
        )}
      >
        New venue
      </Link>
    )}
  </div>
)

export default ProfileActions
