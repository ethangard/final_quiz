import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { Auction, Bid } from '../requests'
import BidsList from './BidsList'

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
        // console.log(bid.auction_id)
        // console.log(bid.auctionID.id)
        // console.log(`Bid Auction ID is:`, bid.auction_id)
        // console.log(`Auction ID is:`, parseInt(auctionId.id))
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
    <>
      <div>AuctionShowPage</div>
      <div>Title: {auction.title}</div>
      <div>Description: {auction.description}</div>
      <div>Date: {auction.date}</div>
      <div>Reserve Price: ${auction.reserve_price}</div>
      {/* <Form></Form> */}
      <BidsList bids={bids} />
      <input type="text" />
    </>
  )
}

export default AuctionShowPage
