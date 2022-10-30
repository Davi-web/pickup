import { trpc } from "../utils/trpc";
import Event from "../components/event";

const Home = () => {
    const events = trpc.useQuery(["events.get-all-events"]);
    const eventsBySportsType = trpc.useQuery(["events.get-event-by-sports-type", {type: "Spikeball"}]);




    return(
    <div className="flex flex-col items-center">
        <div className="flex justify-center">
            Events
            </div>
            {eventsBySportsType.data && eventsBySportsType.data.map((event) => (
                <div key={event.id} className="">
                    <Event
                    eventName={event.eventName}
                    eventDescription={event.eventDescription? event.eventDescription : "No description"}
                    eventTime={event.eventTime}
                    eventLocation={event.eventLocation? event.eventLocation : "No location"}
                    postedBy={event.postedBy}
                    postedDate={event.postedDate}
                    sportsType={event.sportsType? event.sportsType : "No sports type"}
                    />
                   
                </div>
                
            ))}
           

            {/* <Event events={events.data}/> */}
        
    </div>
    );
}

export default Home;