import { User } from '../requests'
import { useEffect, useState } from 'react'

const NewAuctionForm = (props) => {

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
    const fd = new FormData(event.currentTarget)
    // onsole.log(fd.get('title'), fd.get('body'))
    console.log(User.current())
    props.submitForm({
      title: fd.get('title'),
      description: fd.get('description'),
      /*    created_at: new Date(),
      id: 5, */
      user_id: user.id,
      created_at: new Date(),
      updated_at: new Date(),
      date: new Date(),
      reserve_price: fd.get('reserve_price'),
    })
    event.currentTarget.reset()
  }
  return (
    <>
      <h2 className="auctions-title-header">Create An Auction</h2>
      <form onSubmit={getDataAndSubmit} className="form">
        <div className="new-auction-input">
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" name="title" id="" />
        </div>
        <div className="new-auction-input">
          <label htmlFor="description">Description</label>
          <br />
          <textarea cols="30" rows="5" name="description"></textarea>
          {/* <input type="text" name="description" id="" /> */}
        </div>
        <div className="new-auction-input">
          <label htmlFor="date">Date</label>
          <br />
          <input type="text" name="date" id="" />
        </div>
        <div className="new-auction-input">
          <label htmlFor="reserve_price">Reserve Price</label>
          <br />
          <input type="text" name="reserve_price" id="" />
        </div>
        <div className="new-auction-input">
          <input type="submit" value="Save" className="sign-in-btn" />
        </div>
      </form>
    </>
  )
}

export default NewAuctionForm
