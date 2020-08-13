class CustomController < ApplicationController
    def add_modification
        # Grab a vehicle and modification

        @vehicle = Vehicle.find(params[:id])
        @modification = Modification.find(params[:modification_id])
        @vehicle.modification << @modification

        render json: @vehicle, include: :modification

    end

end
