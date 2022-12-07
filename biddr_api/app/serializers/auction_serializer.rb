class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :reserve_price, :created_at
end
