import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Join = () => {
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
        <h1>Group Chat Creation</h1>
        <form action="/api/login" method="POST" onSubmit={e => e.preventDefault()}>

            <label htmlFor="chat name"></label>
            <input type="text" name="chat name" placeholder="Enter Email"id="email" required/>

            <label htmlFor="sport"></label>
            <input type="text" name="sport" placeholder="Enter Sport" id="sport" required/>

            <label htmlFor="gender"></label>
            <input type="text" name="gender" placeholder="Enter Gender/(s)" id="gender" required/>

            <button id="submitBtn" onClick={checkUser}>Register</button>
        </form>
    </div>

    );
}

export default Join;