import React from 'react'
import { Bid, User } from '../requests'
import { useState, useEffect } from 'react'

const NewBid = () => {
  function handleEvent(e) {
    e.preventDefault()
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

  const getDataAndSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    const fd = new FormData(event.currentTarget)
    console.log(fd)
    if (!user) {
      alert('Must be logged in to bid!')
    } else {
      user.submitForm({
        // onsole.log(fd.get('title'), fd.get('body'))
        // console.log(User.current())
        // props.submitForm({
        //   price: fd.get('price'),
        //   description: fd.get('description'),
        //   /*    created_at: new Date(),
        //   id: 5, */
        //   user_id: user.id,
        //   created_at: new Date(),
        //   updated_at: new Date(),
        //   date: new Date(),
        //   reserve_price: fd.get('reserve_price'),
        // })
        price: fd.get('price')
      })
      console.log()
    }
    event.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={getDataAndSubmit} className="bid-form">
        <input type="text" name='price'/>
        <input type="submit" value="Bid" />
      </form>
    </>
  )
}

export default NewBid
