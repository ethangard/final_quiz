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
                created_at={a.created_at.toLocaleString('en-GB', {
                  timeZone: 'UTC',
                })}
              />
            )
          })
        : null}
    </>
  )
}

export default BidsList
