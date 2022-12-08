class Api::V1::BidsController < Api::ApplicationController

  def index
    bids = Bid.order(created_at: :desc)
    render json: bids
  end

  def create
    bid = Bid.new(bid_params)
    bid.save!
    render json: {id: bid.id}
  end

  def show
    bid = Bid.find params[:id]
    render json: bid
  end

  private

  def bid_params
    params.require(:bid).permit(:price)
  end

end
