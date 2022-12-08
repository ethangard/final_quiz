import React from 'react'
import { Bid, User } from '../requests'
import { useState, useEffect } from 'react'

const NewBid = () => {
  function handleEvent(e) {
    e.preventDefault();
    console.log(e)
  }

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

  return (
    <>
      <div>NewBid</div>
      <form onSubmit={handleEvent}>
        <input type="text" />
        <input type="submit" value="Bid" />
      </form>
    </>
  )
}

export default NewBid
