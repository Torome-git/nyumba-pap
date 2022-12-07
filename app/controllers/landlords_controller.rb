class LandlordsController < ApplicationController

    def index
        render json: Landlord.all
    end

    def show
        landlord = Landlord.find_by(id: params[:id])
        render json: landlord
    end

    def create
        landlord = Landlord.create(landlord_params)
        render json: landlord
    end

    def update
        landlord = Landlord.find_by(id: params[:id])
        if landlord
            landlord.update(landlord_params)
            render json: landlord
        else
            render json: { error: "Apartment not found"}, status: :not_found
        end
    end

    def destroy
        landlord = Landlord.find_by(id: params[:id])
        if landlord
            landlord.destroy
            head :no_content
        else
            render json: { error: "Apartment not found" }, status: :not_found
        end
    end

    private

    def landlord_params
        params.permit(:rooms, :location, :price, :contact, :img_url)
    end
end
