class Apartment < ApplicationRecord
    belongs_to :client
    belongs_to :landlord
end
