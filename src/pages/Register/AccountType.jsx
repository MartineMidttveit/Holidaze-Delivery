import { useEffect } from 'react'

export default function AccountType({ manager, setManager }) {
  return (
    <>
      <h2 className="text-sm font-medium text-secondary">Account type</h2>
      <div className="grid grid-cols-2 w-full gap-3 mt-3">
        <button
          onClick={() => setManager(true)}
          type="button"
          className={`border p-8 rounded duration-200 text-sm font-medium ${manager === true ? 'bg-contrast border-contrast text-white' : 'bg-white border-secondary text-secondary hover:bg-background'}`}
        >
          Venue Manager
        </button>
        <button
          onClick={() => setManager(false)}
          type="button"
          className={`border p-8 rounded duration-200 text-sm font-medium ${manager === false ? 'bg-contrast border-contrast text-white' : 'bg-white border-secondary text-secondary hover:bg-background'}`}
        >
          Guest
        </button>
      </div>
    </>
  )
}
