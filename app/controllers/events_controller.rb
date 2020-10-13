class EventsController < ApplicationController
  # skip_before_action :authenticate_user!
  # before_action :authenticate_user!, expect: :index
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    # Geocoder.search(request.location)
    @events = Event.all

    allowed = [0,5,10,15,50,100]
    params['price'].nil? ? price = false : [0,1].include?(params['price'.to_i]) ? price = params['price'] == '0' : price = false
    params['words'].nil? ? words = false : (params['words'].length > 4 && params['words'].length < 25) ? words = params['words'] : words = false
    option = returnparams
    if option['distance'] != 0
      events = Event.near([params["lat"],params["long"]], option['distance'] * 2, units: :km )
      today = events.where(date: Date.today)
      tomorrow = events.where(date: Date.tomorrow)
      week = events.where(date: Date.today..Date.today+7)
    else
      today = Event.where(date: Date.today)
      tomorrow = Event.where(date: Date.tomorrow)
      week = Event.where(date: Date.today..Date.today+7)
    end
    json = {}
    today.empty? ? json["today"] = {code: 500, msg: "No Events for today"} : json["today"] = {code: 200, events: showindex(today)}
    tomorrow.empty? ? json["tomorrow"] = {code: 500, msg: "No Events for tomorrow"} : json["tomorrow"] = {code: 200, events: showindex(tomorrow)}
    week.empty? ? json["week"] = {code: 500, msg: "No Events for this week"} : json["week"] = {code: 200, events: showindex(week)}
    render json: json
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @event }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:name, :description, :capacity, :date, :user_id, :etype, :latitude, :longitude, :address, categories: [])
    end

    def returnparams
      option = {}
      if !params['distance'].nil? && !params['distance'].empty?
        if [0,5,10,15,50,100].include?(params['distance'].to_i)
          option['distance'] = params['distance'].to_i
        else
          option['distance'] = 5
        end
      else
        option['distance'] = 5
      end
      return option
    end

    def showindex(events)
      events_protected = []
      events.each do |event,index|
        # location = event.geocode
        # location[:code] == 200 ? location = location[:short] : location = "TBD"
        event.photos.attached? ? photo = event.photos[0].service_url : photo = nil
        events_protected << {key: event.id ,photo: photo,name: event.name, date: event.date.strftime('%d-%m'),location: event.geoshort, going: event.event_member.count, categories: event.categories}
      end
      return events_protected
    end

end
