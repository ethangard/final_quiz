const BidDetails = ({ id, price, created_at }) => {
  return (
    <div>
      <p>
        ${price} on {created_at}
      </p>
    </div>
  )
}

export default BidDetails
