class VehiclesController < ApplicationController
  before_action :set_vehicle, only: [:show, :update, :destroy]
  before_action :authorize_request , only: [:create, :destroy]

  # GET /vehicles
  def index
    @vehicles = Vehicle.all
    # @vehicles.user = @current_user

    render json: @vehicles
  end

  # GET /vehicles/1
  def show
    # @vehicle.user = @current_user
    render json: @vehicle, include: :modifications
  end

  # POST /vehicles
  def create
    @vehicle = Vehicle.new(vehicle_params)
    @vehicle.user = @current_user

    if @vehicle.save
      render json: @vehicle, status: :created, location: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vehicles/1
  def update
    if @vehicle.update(vehicle_params)
      render json: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vehicles/1
  def destroy
    @vehicle.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle
      @vehicle = Vehicle.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def vehicle_params
      params.require(:vehicle).permit(:vehicle_type, :make, :model, :year, :engine_type, :description, :color, :image, :user_id)
    end
end
