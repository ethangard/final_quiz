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
      <div className="auctions-title-header">Auctions</div>
      <div className="auction-index-container">
        {auctions.map((a, i) => {
          return (
            <div key={i}>
              {/* {console.log(a.created_at.toLocaleString())} */}
              <Link to={`/auctions/${a.id}`}>
                <div className='index-title'>{a.title}</div>
                {/* <div>Description: {a.description}</div>
              <div>Date: {a.date}</div>
              <div>Reserve Price: ${a.reserve_price}</div> */}
                <div className='index-time'>Posted on {a.created_at.toLocaleString()}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AuctionIndexPage
