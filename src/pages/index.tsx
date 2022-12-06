import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Card from "../components/card";
import Image from "next/image";
import Header from "../components/header";
import { useSession, signIn, signOut } from "next-auth/react"
import { StyledEngineProvider } from "@mui/material";
import { useEffect } from "react";


const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const { data: session } = useSession();
  useEffect(()=> {
    if(session?.user === undefined) {
      signIn();
    }
  },[session])

 
  return (
    <StyledEngineProvider>
      <Head>
        <title>PickUp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <Header/>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          {session?.user !== undefined ? (

            <div className="flex flex-row">
              <div className="text-purple-300 font-mono w-1/2 pr-10">Welcome</div>
              <div className="pl-10 w-1/2 font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{session?.user?.name?.split(" ")[0]}</div>
            </div>
           
          ): (
           <span className="text-purple-300">PickUp</span>

          )}
        </h1>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3">
          <Card
            name="Get started"
            description="Find friends at Vandy to start a pickup game with a click of a button"
            documentation="/events/eventCreation"
          />
          <Card
            name="Join a Sports Group Chat"
            description="Select from any of our various group chats to find a sport that you are interested in"
            documentation="/joinGroupChat"
          />
          <Card
            name="Browse event postings"
            description="Within each groupchat, there is a feature to find events to meet up with your peers. You can add yourself to any event and DM other group members who are going to show up."
            documentation="/events/displayEvents"
          />
          <Card
            name="Meetup with other vandy students!"
            description="Our application allows students to post events and suggest times where the most amount of people are available. RSVP for an event and meet up with your friends!"
            documentation={`https://pickup-chat-chi.vercel.app?username=${session?.user?.email}&secret=${session?.user?.name}`}
          />
         
        </div>
        <div className="flex items-center w-auto justify-center mt-8 px-8 py-4 text-white text-xl border-purple-600 border-4 rounded-full bg-purple-600 duration-500 motion-safe:hover:scale-105">
            <p>Are you ready to pick up sports you always wanted?</p>
            <button className="border-white border-2 rounded-full ml-10 px-4 duration-500 motion-safe:hover:scale-105">Browse Groupchats</button>
        </div>
      </main>
    </StyledEngineProvider>
   
  );
};

export default Home;