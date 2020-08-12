class ModificationsController < ApplicationController
  before_action :set_modification, only: [:show, :update, :destroy]

  # GET /modifications
  def index
    @modifications = Modification.all

    render json: @modifications
  end

  # GET /modifications/1
  def show
    render json: @modification
  end

  # POST /modifications
  def create
    @modification = Modification.new(modification_params)

    if @modification.save
      render json: @modification, status: :created, location: @modification
    else
      render json: @modification.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /modifications/1
  def update
    if @modification.update(modification_params)
      render json: @modification
    else
      render json: @modification.errors, status: :unprocessable_entity
    end
  end

  # DELETE /modifications/1
  def destroy
    @modification.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_modification
      @modification = Modification.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def modification_params
      params.require(:modification).permit(:name, :brand_name, :mod_type, :performance_gain, :cost, :vehicle_id)
    end
end
