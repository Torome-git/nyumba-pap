class SessionsController < ApplicationController
    def create
        client = Client.find_by(username: params[:username])
        session[:client_id] = client.id 
        render json: client
    end

    def show
        client = Client.find_by(id: session[:client_id])
        if client
            render json: client
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
end
