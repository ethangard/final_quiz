import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Auction } from '../requests'

const AuctionIndexPage = () => {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    const fetchedData = async () => {
      const data = await Auction.index()
      setAuctions(data)
    }

    fetchedData()
  }, [])


  return (
    <>
      <div>AuctionIndexPage</div>
      {auctions.map((a, i) => {
        return (
          <div key={i}>
            {/* {console.log(a.created_at.toLocaleString())} */}
            <Link to={`/auctions/${a.id}`}>
              <div>Title: {a.title}</div>
              {/* <div>Description: {a.description}</div>
              <div>Date: {a.date}</div>
              <div>Reserve Price: ${a.reserve_price}</div> */}
              <div>Posted on {a.created_at.toLocaleString()}</div>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default AuctionIndexPage
