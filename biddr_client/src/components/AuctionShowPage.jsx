import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { Auction, Bid } from '../requests'
import BidsList from './BidsList'
import NewBid from './NewBid'

const AuctionShowPage = () => {
  const auctionId = useParams()

  const [auction, setAuction] = useState({})

  const [bids, setBids] = useState([])

  useEffect(() => {
    Auction.show(auctionId.id).then((fetchedAPIQuestion) => {
      setAuction(fetchedAPIQuestion)
    })
  }, [])

  useEffect(() => {
    Bid.index().then((fetchedAPIBids) => {
      // console.log(fetchedAPIBids)
      const result = fetchedAPIBids.filter((bid) => {
        if (bid.auction_id === parseInt(auctionId.id)) {
          return bid
        }
      })

      setBids(result)

      // console.log(result)
    })
  }, [])

  const { title, description, date, reserve_price } = auction

  return (
    <div className='show-container'>
      <div className='show-left'>
        <h2>{auction.title}</h2>
        <div className='description'>{auction.description}</div>
        {/* <form>
          <input type="text" /> 
          <input type="submit" value="Bid" />
        </form> */}
        < NewBid />
        <div className='previous-bids'>Previous Bids</div>
        <BidsList bids={bids} />
      </div>
      <div className='show-right'>
        <div>Reserve Price: ${auction.reserve_price}</div>
        <div>Ends at: {auction.date}</div>
        <div>Reserve price not met</div>
      </div>
    </div>
  )
}

export default AuctionShowPage
