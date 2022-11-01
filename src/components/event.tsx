type EventProp = {
    id: number,
    eventName: string;
    eventDescription: string;
    eventLocation: string;
    eventTime: Date;
    postedBy: string;
    postedDate: Date;
    eventDate : Date;
    sportsType: string;
    
}
interface sportsType {
    [key: string]: string;
}
const Event = ({id, eventDescription, eventLocation, eventName, postedBy, postedDate, eventDate, sportsType}: EventProp)=> {
    const sportEmojis: sportsType = {
        "Basketball": "🏀",
        "Soccer": "⚽",
        "Tennis": "🎾",
        "Volleyball": "🏐",
        "Spikeball": "🤾",
        "Frisbee": "🥏",
        "Golf": "⛳",
        "Other": "🏓"
    }
    const getSportsEmoji = (sportsType: string) => {
        return sportEmojis[sportsType];
    }
    const  getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const colors = ["blue", "amber", "pink", "rose", "indigo", "pink"];
    const colorScheme = colors[id % colors.length];


    return (
        <article className="bg-white dark:bg-slate-800 shadow-xl shadow-slate-200 dar:shadow-slate-800 rounded-lg" id={`event-${id}`}>
                    <div className={`p-3 shadow bg-${colorScheme}-500 text-${colorScheme}-50 uppercase grid place-items-center rounded-t-lg`}>
                        <div className="text-sm">{eventDate.toDateString().substring(4,7)}</div>
                        <div className="text-2xl font-bold">{eventDate.getDate()}</div>
                        
                    </div>
                    <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
                            <div className="grid gap-1">
                                <p className="text-slate-400 text-sm">Posted {postedDate.toLocaleString().substring(0,10)}</p>
                            
                                <h2 className="text-xl font-bold">
                                    <a href="#" className="hover:underline">{eventName} {getSportsEmoji(sportsType)}</a>
                                </h2>
                                <p className="text-slate-400 text-sm">{eventLocation}</p>
                                <div className="grid gap-1">
                                    <button className="text-slate-400 flex gap-1 items-center cursor-pointer" aria-expanded="false" aria-controls={`details-${id}`} id={`btn-${id}`} onClick={e => {
                                         if (e.currentTarget.hasAttribute("aria-expanded")) {
                                            e.currentTarget.setAttribute("aria-expanded", e.currentTarget.getAttribute("aria-expanded") === "false" ? "true" : "false");
                                            document.getElementById(`details-${id}`)?.classList.toggle("hidden");
                                            e.currentTarget.querySelector("svg")?.classList.toggle("rotate-180");
                                        }
                                    }}>
                                    <p className="pointer-events-none">See details</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    </button>
                                    <div className="grid gap-1 hidden" id={`details-${id}`} aria-labelledby={`btn-${id}`}>
                                    <p className="text-slate-400">{eventDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className={` bg-${colorScheme}-500 rounded-md px-4 py-2 text-${colorScheme}-50 shadow-2xl shadow-${colorScheme}-200 dark:shdow-none text-center font-bold hover:shadow-none ring ring-offset-0 ring-${colorScheme}-500 focus:outline-none`}>Register</a>
                        </div>
                </article>
       
    )
}

export default Event;