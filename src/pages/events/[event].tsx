import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Event = () => {
    const router = useRouter();
    const { event } = router.query;
    //fetch event data
    const data = trpc.useQuery(["events.get-event-by-id", {id: event?.toString()}]);

    
    return (
        //style with tailwind css
        <div className=" grid col-2 w-screen h-1/2">
           
            <div className="col-span-1">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{data.data?.eventName}</h1>
                    <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{data.data?.sportsType}</h2>
                    {/* <h3 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{data.data?.eventTime}</h3> */}
                    <h4 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{data.data?.eventLocation}</h4>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">Description</h1>
                    <h2 className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">{data.data?.eventDescription}</h2>
                </div>
            </div>
        </div>

    );
};


export default Event;