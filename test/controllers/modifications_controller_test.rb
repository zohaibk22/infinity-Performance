require 'test_helper'

class ModificationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @modification = modifications(:one)
  end

  test "should get index" do
    get modifications_url, as: :json
    assert_response :success
  end

  test "should create modification" do
    assert_difference('Modification.count') do
      post modifications_url, params: { modification: { brand_name: @modification.brand_name, cost: @modification.cost, mod_type: @modification.mod_type, name: @modification.name, performance_gain: @modification.performance_gain, vehicle_id: @modification.vehicle_id } }, as: :json
    end

    assert_response 201
  end

  test "should show modification" do
    get modification_url(@modification), as: :json
    assert_response :success
  end

  test "should update modification" do
    patch modification_url(@modification), params: { modification: { brand_name: @modification.brand_name, cost: @modification.cost, mod_type: @modification.mod_type, name: @modification.name, performance_gain: @modification.performance_gain, vehicle_id: @modification.vehicle_id } }, as: :json
    assert_response 200
  end

  test "should destroy modification" do
    assert_difference('Modification.count', -1) do
      delete modification_url(@modification), as: :json
    end

    assert_response 204
  end
end
