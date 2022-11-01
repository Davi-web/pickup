import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { trpc } from "../utils/trpc";

const Rsvp = () => {
    const router = useRouter();
    const [email ,setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const createdRef = useRef<HTMLDivElement>(null);
    // const user = trpc.useQuery(["example.get-user", {id:username}]);

    const checkUser = () => {
       if(email.length > 0 && lastName.length > 0 && firstName.length > 0){
           router.push("/events/displayEvents");
       } else {
            if(createdRef.current){
                createdRef.current.innerHTML = "Please fill in required fields.";
            }
        }

    }
   
    return (
        <div className="login">
        <h1>RSVP</h1>
        <div ref={createdRef} id="createdRef" className='text-purple-600 text-lg flex justify-center'/>
        <form action="/api/login" method="POST" onSubmit={e => e.preventDefault()}>

            <label htmlFor="email"></label>
            <input type="text" name="email" placeholder="Enter Email" id="email" onChange={e => setEmail(e.target.value)} required/>

            <label htmlFor="first name"></label>
            <input type="text" name="first name" placeholder="Enter First Name" id="first_name" onChange={e =>setFirstName(e.target.value)} required/>

            <label htmlFor="last name"></label>
            <input type="text" name="last name" placeholder="Enter Last Name" id="last_name" onChange={e => setLastName(e.target.value)} required/>

            <button id="submitBtn" onClick={checkUser}>Register</button>
        </form>
    </div>

    );
}

export default Rsvp;

