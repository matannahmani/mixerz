class SessionsController < Devise::SessionsController
  respond_to :json
  def new
    if current_user.nil?
      render json: {msg: "Not logged in"}
    else
      render json: {user: current_user}
    end
  end
  private

  def respond_with(resource, _opts = {})
    render json: resource
  end

  def respond_to_on_destroy
    head :no_content
  end
end
