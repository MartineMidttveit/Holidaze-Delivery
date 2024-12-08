import {Link} from 'react-router-dom'
import './Error.css'

export default function ErrorComponent() {
  return (
    <main className="error-page px-5">
      <div className="container">
        <div className="eyes">
          <div className="eye">
            <div className="eye__pupil eye__pupil--left" />
          </div>
          <div className="eye">
            <div className="eye__pupil eye__pupil--right" />
          </div>
        </div>
        <div className="error-page__heading">
          <h1 className="error-page__heading-title leading-none">
            Looks like you found an error
          </h1>
        </div>
        <Link
          className="mt-10 max-w-sm mx-auto text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 enabled:hover:bg-customLightBlue duration-300 enabled:hover:border-customLightBlue flex items-center justify-center"
          to="/"
          aria-label="back to home"
          title="back to home"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
