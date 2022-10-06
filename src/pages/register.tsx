const register = () => {
    return (
    <div className="register">
    <h1>SignUp to use PickUp!</h1>
    <form action="/auth" method="post">
        <label htmlFor="email"></label>
        <input type="text" placeholder="Enter Email" id="email" required/>

        <label htmlFor="username"></label>
        <input type="text" placeholder="Enter Username" id="username" required/>

        <label htmlFor="password"></label>
        <input type="password" placeholder="Enter Password" id="password" required/>

        <label htmlFor="psw-repeat"></label>
        <input type="password" placeholder="Repeat Password" id="psw-repeat" required/>

        <input type="submit" value="Register"/>
    </form>
    </div>
    )
}

export default register;