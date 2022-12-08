class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :reserve_price, :created_at


   class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
   end

end
