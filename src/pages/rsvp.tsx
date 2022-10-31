import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Rsvp = () => {
    const router = useRouter();
    const [username ,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = trpc.useQuery(["example.get-user", {id:username}]);

    const checkUser = () => {
        setUsername((document.getElementById("username") as HTMLInputElement).value);
        console.log(user);
        if(user.data?.password === password){
            router.push(`/profile/${username}`);
        }
    }
   
    return (
        
        <div className="login">
        <h1>RSVP</h1>
        <form action="/api/login" method="POST" onSubmit={e => e.preventDefault()}>

            <label htmlFor="email"></label>
            <input type="text" name="email" placeholder="Enter Email"id="email" required/>

            <label htmlFor="first name"></label>
            <input type="text" name="first name" placeholder="Enter First Name" id="first name" required/>

            <label htmlFor="last name"></label>
            <input type="text" name="last name" placeholder="Enter Last Name" id="last name" required/>

            <button id="submitBtn" onClick={checkUser}>Register</button>
        </form>
    </div>

    );
}

export default Rsvp;
