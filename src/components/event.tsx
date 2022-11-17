import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ApiCalendar from "react-google-calendar-api";
import {env} from "../env/server.mjs";
const config = {
    "clientId": "443757305938-g2ao75eap2acsn17ilf93ftratr5nq9f.apps.googleusercontent.com",
    "apiKey": "AIzaSyA6P7jaozY0eYxBc4-wOHt87XiXI6dosfI",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }


const apiCalender = new ApiCalendar(config);

type EventProp = {
    id: number,
    eventName: string;
    eventDescription: string;
    eventLocation: string;
    eventTime: Date;
    eventId: string;
    postedBy: string;
    postedDate: Date;
    eventDate : Date;
    sportsType: string;
    
}
interface sportsType {
    [key: string]: string;
}
const Event = ({id, eventDescription, eventId, eventLocation, eventName, postedBy, postedDate, eventDate, sportsType}: EventProp)=> {
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
    const [modal, setModal] = useState(false);

    const createEvent = async() => {
        try {
            await apiCalender.handleAuthClick();
            // create event at a certain date
            // const result = await apiCalender.createEventFromNow({
            //     time: 60,
            //     summary: eventName,
            //     description: eventDescription,

            // });
            const res = await apiCalender.createEvent({
                start: {
                    dateTime: eventDate.toISOString(),
                    timeZone: "America/Los_Angeles"
                },
                end: {
                    dateTime: eventDate.toISOString(),
                    timeZone: "America/Los_Angeles"
                },
                
            }, );
            console.log(res);
            //get calendar events id and update it


            const eventId = res.result.id;
            const update = await apiCalender.updateEvent({
                summary: eventName,
                description: eventDescription,
                location: eventLocation,
                event: {
                    start:{
                        dateTime: eventDate.toDateString(),
                        timeZone: "America/Los_Angeles"
                    },
                    end: {
                        dateTime: eventDate.toDateString(),
                        timeZone: "America/Los_Angeles",
                    }
                }
            }, eventId);
            console.log(update);

            // console.log(update);
            setModal(false);
        } catch (err) {
            console.log(err);
        }
       
    }
    


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
                            <button className={` bg-${colorScheme}-500 rounded-md px-4 py-2 text-${colorScheme}-50 shadow-2xl shadow-${colorScheme}-200 dark:shdow-none text-center font-bold hover:shadow-none ring ring-offset-0 ring-${colorScheme}-500 focus:outline-none cursor-pointer`} onClick={()=>setModal(true)}>
                                View Event
                            </button>
                        </div>
                {modal && (
                    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {eventName}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {eventDescription}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={createEvent}
                  >
                    Add to Calender
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>)}
        </article>

       
    )
}

export default Event;