import './App.css'
import AuctionIndexPage from './components/AuctionIndexPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomePage'
import SignInPage from './components/SignInPage'
import { User } from './requests'
import { useState, useEffect } from 'react'
import SignUpPage from './components/SignUpPage'
import AuctionShowPage from './components/AuctionShowPage'
import NewAuctionPage from './components/NewAuctionPage'
import AuthRoutes from './components/AuthRoutes'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = () => {
    return User.current().then((user) => {
      console.log(`CurrentUser:`, user)
      if (user?.id) {
        setUser(user)
      }
    })
  }

  const onSignOut = () => {
    setUser(null)
  }

  return (
    <>
      <NavBar currentUser={user} onSignOut={onSignOut} />
      <Routes>
        <Route element={<AuthRoutes isAllowed={!!user} />}>
          <Route exact path="/auctions/new" element={<NewAuctionPage />} />
        </Route>

        {/* <Route exact path="/auctions/new" element={<AuctionCreatePage />} /> */}
        <Route exact path="/auctions" element={<AuctionIndexPage />} />
        <Route exact path="/auctions/:id" element={<AuctionShowPage />} />

        <Route path="/" element={<WelcomePage />} />
        <Route
          exact
          path="/sign_in"
          element={<SignInPage onSignIn={getCurrentUser} />}
        />
        <Route
          exact
          path="/sign_up"
          element={<SignUpPage onSignUp={getCurrentUser} />}
        />
      </Routes>
    </>
  )
}


