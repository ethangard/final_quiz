class Api::V1::AuctionsController <Api::ApplicationController

  def index
    auctions = Auction.order(created_at: :desc)
    render json: auctions
  end

  def create
    auction = Auction.new(auction_params)
    auction.save!
    render json: {id: auction.id}
  end

  def show
    auction = Auction.find params[:id]
    render json: auction
  end


  private

  def auction_params
    params.require(:auction).permit(:title, :description, :date, :reserve_price)
  end

end
