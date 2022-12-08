import { Session } from '../requests'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignInPage(props) {
  const { onSignIn } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const [errors, setErrors] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const params = {
      email: email,
      password: password,
    }

    Session.create(params).then((data) => {
      console.log('Session data', data)
      if (data.status === 404) {
        setErrors([...errors, { message: 'Wrong email or password' }])
      } else if (data.id) {
        onSignIn()
        navigate('/auctions')
        // window.location.reload()
      }
    })
  }

  return (
    <main className="sign-in">
      <form onSubmit={handleSubmit} className="form">
        {errors.length > 0 ? (
          <div>
            <h4>Failed to Sign In</h4>
            <p>{errors.map((error) => error.message).join(', ')}</p>
          </div>
        ) : (
          ''
        )}
        <div className="flex-group">
          <label htmlFor="email">Email</label>
          <input
            className="sign-in-input"
            type="text"
            name="email"
            id="email"
            onChange={(event) => {
              setEmail(event.currentTarget.value)
            }}
          />
        </div>
        <div className="flex-group">
          <label htmlFor="password">Password</label>
          <input
            className="sign-in-input"
            type="password"
            name="password"
            id="password"
            onChange={(event) => {
              setPassword(event.currentTarget.value)
            }}
          />
        </div>
        <input type="submit" value="Sign In" className='sign-in-btn'/>
      </form>
    </main>
  )
}

export default SignInPage

// import { useNavigate } from 'react-router-dom'
// import { Session } from '../requests'

// function SignInPage(props) {
//   const { onSignIn } = props

//   const navigate = useNavigate()

//   function handleSubmit(event) {
//     event.preventDefault()
//     const { currentTarget } = event

//     const formData = new FormData(currentTarget)
//     const params = {
//       email: formData.get('email'),
//       password: formData.get('password'),
//     }

//     Session.create(params).then((data) => {
//       //console.log(params.email)
//       //console.log(params.password)
//       if (data.id) {
//         console.log(params)
//         onSignIn()
//         // Navigated to Index page from the browser
//         // We can 'push' on history to manipulate the browser
//         // and direct our user to any page in our app
//         // props.history.push('/questions');
//         // window.location.href(`/questions`)
//         navigate('/questions')
//       }
//     })
//   }

//   return (
//     <main>
//       <h1>Sign In</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="text" name="email" id="email" />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="password" />
//         </div>
//         <input type="submit" value="Sign In" />
//       </form>
//     </main>
//   )
// }

// export default SignInPage
