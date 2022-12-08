const BidDetails = ({ id, price, created_at }) => {
  return (
    <p className="bids">
      ${price} on {created_at.toLocaleString()}
    </p>
  )
}

export default BidDetails
