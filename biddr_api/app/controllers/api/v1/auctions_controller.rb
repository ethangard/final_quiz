class Api::V1::AuctionsController < Api::ApplicationController

  # skip_before_action :verify_authenticity_token

 # before_action :authenticate_user!, except: [:index, :show]

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
    params.require(:auction).permit(:title, :description, :date, :reserve_price, :user_id)
  end

end
