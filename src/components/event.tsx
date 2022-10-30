type EventProp = {
        eventName: string;
        eventDescription: string;
        eventLocation: string;
        eventTime: Date;
        postedBy: string;
        postedDate: Date;
        sportsType: string;
    
}
const Event = ({ eventDescription, eventLocation, eventName, postedBy, postedDate, sportsType}: EventProp)=> {
    const sportEmojis: any = {
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

    return (
        <div className=" grid-flow-row grid">

            <div className="p-4 flex  flex-col border-sky-400 border-2 rounded-lg">
        
                <div className="text-sm font-mono">Event Name: {eventName}</div>
                <div className="flex flex-row">
                    <p className="font-serif">Location: </p>
                    <p className="font-mono pl-48">{eventLocation}</p>
                </div>
                <div>Event Description: {eventDescription}</div>
                <div>Posted By: {postedBy}</div>
                <div>Posted Date: {postedDate.getMonth()}/{postedDate.getDate()}/{postedDate.getFullYear()}</div>
                <div>Sports Type: {sportsType} {getSportsEmoji(sportsType)}</div>

            </div>
        </div>
       
    )
}

export default Event;