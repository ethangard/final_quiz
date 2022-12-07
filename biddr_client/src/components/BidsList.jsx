import BidDetails from './BidsDetails'

const BidsList = ({ bids }) => {
  return (
    <>
      {bids
        ? bids.map((a, i) => {
            return (
              <BidDetails
                key={i}
                id={a.id}
                price={a.price}
                created_at={a.created_at}
              />
            )
          })
        : null}
    </>
  )
}

export default BidsList
