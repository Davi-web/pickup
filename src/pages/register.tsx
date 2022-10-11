import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [pswRepeat, setPswRepeat] = useState("");
    
    

    return (
    <div className="register">
    <h1>SignUp to use PickUp!</h1>
    <form action="/api/signup" method="post">
        <label htmlFor="email"></label>
        <input type="email" name="email" placeholder="Enter Email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>

        <label htmlFor="username"></label>
        <input type="text" name="username" placeholder="Enter Username" id="username" value={username} onChange={e=>setUsername(e.target.value)} required/>

        <label htmlFor="password"></label>
        <input type="password" name="password" placeholder="Enter Password" id="password" value={password} onChange={e=>setPassword(e.target.value)} required/>

        <label htmlFor="psw-repeat"></label>
        <input type="password" name="psw-repeat" placeholder="Repeat Password" id="psw-repeat" value={pswRepeat} onChange={e=>setPswRepeat(e.target.value)} required/>
        <input type="submit" value="Submit"/>
    </form>
    <div id="errorMsg" className=" text-red-600 text-lg"/>
    </div>
    )
}

export default Register;