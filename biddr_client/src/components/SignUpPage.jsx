import { User } from '../requests'
import { useNavigate } from 'react-router-dom'

function SignUpPage(props) {
  const { onSignUp } = props

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event
    const formData = new FormData(currentTarget)
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    }

    User.create(params).then((data) => {
      if (data.id) {
        onSignUp()
        // Navigated to Index page from the browser
        // We can 'push' on history to manipulate the browser
        // and direct our user to any page in our app
        navigate('/')
      }
    })
  }

  return (
    <main>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First name</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </main>
  )
}

export default SignUpPage
