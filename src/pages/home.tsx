import { trpc } from "../utils/trpc";
import Event from "../components/event";

const Home = () => {
    const events = trpc.useQuery(["events.get-events"]);




    return(
    <div className="flex flex-col items-center">
        <div className="flex justify-center">
            Events
            </div>
            {events.data && events.data.map((event) => (
                <div key={event.id} className="flex h-1/2 flex-col items-center align-middle w-3/4 min-w-fit border-sky-400 border-2 rounded-lg mb-5">
                    <Event
                    eventName={event.eventName}
                    eventDescription={event.eventDescription? event.eventDescription : "No description"}
                    eventTime={event.eventTime}
                    eventLocation={event.eventLocation? event.eventLocation : "No location"}
                    postedBy={event.postedBy}
                    postedDate={event.postedDate}
                    />
                   
                </div>
                
            ))}
           

            {/* <Event events={events.data}/> */}
        
    </div>
    );
}

export default Home;