class CustomController < ApplicationController
    before_action :authorize_request
    def add_modification
        # Grab a vehicle and modification

        @vehicle = Vehicle.find(params[:id])
        @modification = Modification.find(params[:modification_id])
        @vehicle.modifications << @modification

        render json: @vehicle, include: :modifications

    end

end
