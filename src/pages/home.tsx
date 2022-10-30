import { trpc } from "../utils/trpc";
import Event from "../components/event";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
    const [inputSlider, setInputSlider] = useState("10");
    const [expandDetails, setExpandDetails] = useState(false);
    const events = trpc.useQuery(["events.get-all-events"]);
    const eventsBySportsType = trpc.useQuery(["events.get-event-by-sports-type", {type: "Spikeball"}]);



    return(
    <div className="bg-slate-50 dark:bg-slate-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-slate-600 dark:text-slate-100 grid-rows-auto1">
        <header className="text-center grid p-4 place-items-center content-center">
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">My Event</h1>
            <label htmlFor="eventAmt">Events to Show</label>
            <input type={"range"} min={1} max={20} value={inputSlider} onChange={(e) => setInputSlider(e.target.value)} className="accent-blue-600 cursor-grab"></input>
        </header>
        <main className="max-w-6xl w-full mx-auto">
            <section className="grid grid-cols-cards gap-4 md:gap-6 lg:gap-8 items-center" id="events-container">
                {eventsBySportsType.data?.map((event) => (
                    <Event key={event.id}  eventName={event.eventName}
                    eventDescription={event.eventDescription? event.eventDescription : "No description"}
                    eventTime={event.eventTime}
                    eventLocation={event.eventLocation? event.eventLocation : "No location"}
                    postedBy={event.postedBy}
                    postedDate={event.postedDate}
                    eventDate={event.eventTime}
                    sportsType={event.sportsType? event.sportsType : "No sports type"} />
                ))}
                
            </section>
            
        </main>
        {/* <div className="flex justify-center">
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
            */}

            {/* <Event events={events.data}/> */}
        
    </div>
    );
}

export default Home;