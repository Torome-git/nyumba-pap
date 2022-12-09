class ClientSerializer < ActiveModel::Serializer
  attributes :id, :contact, :img_url, :location, :price, :rooms
end
