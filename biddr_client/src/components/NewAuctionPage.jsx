import { Component } from 'react'
import { Auction } from '../requests'
import { useNavigate } from 'react-router-dom'
import NewAuctionForm from './NewAuctionForm'

export const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate()

  return <WrappedComponent {...props} navigate={navigate} />
}
class NewAuctionPage extends Component {
  constructor(props) {
    super(props)
  this.state = { errors: [] }
  }

  createNewAuction(params) {
    // console.log(`Params: ${params.title} ${params.body}`)
    Auction.create(params).then((Auction) => {
      console.log(`Auction: ${Auction}`)
      if (Auction.errors) {
        console.log(`AuctionErrors: ${Auction.errors}`, Auction.errors)
        this.setState({ errors: Auction.errors })
      } else {
        console.log(this.props)
        this.props.navigate(`/Auctions/${Auction.id}`)
      }
    })
  }

  render() {
    return (
      <div>
        <NewAuctionForm
          errors={this.state.errors}
          submitForm={(params) => this.createNewAuction(params)}
        />
      </div>
    )
  }
}

export default withRouter(NewAuctionPage)
