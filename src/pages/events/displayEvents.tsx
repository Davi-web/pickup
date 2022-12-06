import { trpc } from "../../utils/trpc";
import Event from "../../components/event";
import { useState, useEffect } from "react";
import Header from "../../components/header";
import { useSession, signIn } from "next-auth/react"


const DisplayEvent = () => {
    const [inputSlider, setInputSlider] = useState("10");
    const [sportsType, setSportsType] = useState("");

    const { data: session, status } = useSession();
    useEffect(()=> {
        if(status !== "loading" && status !== "authenticated") {
            signIn();
        }
    },[status])

    //fetch events by sports type and slider value
    const eventsBySportsType = trpc.useQuery(["events.get-event-by-sports-type", {type: sportsType, size: parseInt(inputSlider)}]);
    
    


    return(
    <div>
    <Header/>
    <div className="bg-slate-50 dark:bg-slate-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-slate-600 dark:text-slate-100 grid-rows-auto1">
        <header className="text-center grid p-4 place-items-center content-center">
            <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">My Event</h1>
            <label htmlFor="sportsType" className="block mb-2 text-sm font-medium text-gray-900">Select sport type</label>
            <select id="sportsType" onChange={e => setSportsType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5">
                <option value="">Choose a sport</option>
                <option value="Basketball">Basketball</option>
                <option value="Soccer">Soccer</option>
                <option value="Tennis">Tennis</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Spikeball">Spikeball</option>
                <option value="Frisbee">Frisbee</option>
                <option value="Golf">Golf</option>
                <option value="Other">Other</option>
            </select>
            <label htmlFor="eventAmt">{inputSlider} {inputSlider === '1' ? "Event": "Events"}</label>
            <input id="slider" type={"range"} min={1} max={20} value={inputSlider} onChange={(e) => setInputSlider(e.target.value)} className="accent-blue-600 cursor-grab"></input>
        </header>
        <main className="max-w-6xl w-full mx-auto">
            <section className="grid grid-cols-cards gap-4 md:gap-6 lg:gap-8 items-center" id="events-container">
                
                {eventsBySportsType.data?.map((event, id) => (
                    <Event key={event.id}  eventName={event.eventName}
                    id={id}
                    eventId={event.id}
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
    </div>
    );
}

export default DisplayEvent;
