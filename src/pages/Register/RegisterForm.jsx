import Checkboxes from './Agreements'
import InputLabel from '../../components/InputLabel'
import {useState} from 'react'
import register from '../../api/post/register'
import Button from '../../components/Button'
import LoginModal from '../../components/Modals/LoginModal.jsx'

export default function RegisterForm({ venueManager }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await register({ name, email, password, venueManager })
  }

  return (
    <>
      <form
        className="pt-4 pb-12 space-y-3 lg:space-y-4 xl:space-y-6"
        onSubmit={handleSubmit}
      >
        <InputLabel
          name="name"
          type="text"
          label="Name"
          onChange={e => setName(e.target.value)}
          required={true}
        />
        <InputLabel
          name="email"
          type="text"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
          title="Must contain @stud.noroff.no or @noroff.no"
          required={true}
        />
        <InputLabel
          name="password"
          type="password"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          required={true}
        />

        <InputLabel
          name="repeatPassword"
          type="password"
          label="Repeat password"
          required={true}
        />

        <div>
          <Checkboxes />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
      </form>

      <p className="text-secondary -mt-6 flex gap-1">
        Already have an account?
        <LoginModal className="font-medium underline" text="Log in here." />
      </p>
    </>
  )
}
