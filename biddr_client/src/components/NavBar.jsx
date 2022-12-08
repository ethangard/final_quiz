import { Link, NavLink } from 'react-router-dom'
import { Session } from '../requests'
import '../App.css'
import coins from '../coins.png'

const NavBar = ({ currentUser, onSignOut }) => {
  const handleSignOut = () => {
    Session.destroy().then(() => {
      onSignOut()
    })
  }

  return (
    <nav>
      <div>
        <Link to="/">
          <img src={coins} className="logo" />
        </Link>
      </div>
      <NavLink className="nav-item" to="/">
        Home
      </NavLink>{' '}
      <NavLink className="nav-item" to="/auctions">
        Auctions
      </NavLink>{' '}
      {currentUser ? (
        <>
          <NavLink className="nav-item" to="/auctions/new">
            List Auction
          </NavLink>{' '}
          <span>Welcome, {currentUser.first_name}</span>-
          <button onClick={handleSignOut}>Sign Out</button>-
        </>
      ) : (
        <>
          <NavLink className="nav-item" to="/sign_in">
            Sign In
          </NavLink>{' '}
          <NavLink className="nav-item" to="/sign_up">
            Sign Up
          </NavLink>
        </>
      )}
    </nav>
  )
}

export default NavBar

// import { NavLink } from 'react-router-dom'
// import { Session } from '../requests'

// const NavBar = ({ currentUser, onSignOut, clocksCount }) => {
//   const handleSignOut = () => {
//     Session.destroy().then(() => {
//       onSignOut()
//     })
//   }

//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>|
//       <NavLink to="/questions">QuestionIndex</NavLink>|
//       {currentUser ? (
//         <>
//           <NavLink to="/questions/new">New Question</NavLink>-
//           <span>Welcome, {currentUser.first_name}</span>-
//           <button onClick={handleSignOut}>Sign Out</button>-
//         </>
//       ) : (
//         <>
//           <NavLink to="/sign_in">Sign In</NavLink>|
//           <NavLink to="/sign_up">Sign Up</NavLink>
//         </>
//       )}
//     </nav>
//   )
// }

// export default NavBar
