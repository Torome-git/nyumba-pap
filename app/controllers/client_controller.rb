class ClientController < ApplicationController
    def index
        clients = Client.all
        render json: clients
    end

    def show
        client = Client.find_by(id: params[:id])
        if client
            render json: client
        else 
            render json: { error: "Apartment not found"}, status: :not_found
        end
    end

    def create
        byebug
        client = Landlord.create!(client_params)
        if client
            render json: client, status: :created
        else
            render json: {error: "unprocessable entity"}, status: :unprocessable_entity
        end

    end

    private

    def client_params
        params.require(:rooms, :img_url, :price, :location, :contact)
    end
end
