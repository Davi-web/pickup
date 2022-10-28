import { FC } from "react";


type EventProp = {
        eventName: string;
        eventDescription: string;
        eventLocation: string;
        eventTime: Date;
        postedBy: string;
        postedDate: Date;
    
}
const Event = ({ eventDescription, eventLocation, eventName, postedBy, postedDate}: EventProp)=> {

    return (
        <div className="flex flex-col">
        
            <div className="">Event Name: {eventName}</div>
            <div className=" relative ">Location: {eventLocation}</div>
            <div>Event Description: {eventDescription}</div>
            <div>Posted By: {postedBy}</div>
            <div>Posted Date: {postedDate.getMonth()}/{postedDate.getDate()}/{postedDate.getFullYear()}</div>
        </div>
    )
}

export default Event;