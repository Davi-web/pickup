import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Login = () => {
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
        <h1>Login</h1>
        <form action="/api/login" method="POST" onSubmit={e => e.preventDefault()}>
            <label htmlFor="username"></label>
            <input type="text" name="username" placeholder="Username" id="username" required/>

            <label htmlFor="password"></label>
            <input type="password" name="password" placeholder="Password" id="password"  value={password} onChange={e => setPassword(e.target.value)} required/>

            <button id="submitBtn" onClick={checkUser}>Login</button>
        </form>
    </div>
    );
}

export default Login;