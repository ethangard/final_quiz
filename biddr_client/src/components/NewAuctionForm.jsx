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
    <form onSubmit={getDataAndSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <br />
        <input type="text" name="description" id="" />
      </div>
      <div>
        <label htmlFor="body">Date</label>
        <br />
        <input type="text" name="date" id="" />
      </div>
      <div>
        <label htmlFor="body">Reserve Price</label>
        <br />
        <input type="text" name="reserve_price" id="" />
      </div>
      <div>
        <input type="submit" value="Save" />
      </div>
    </form>
  )
}

export default NewAuctionForm
