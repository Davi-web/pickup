const login = () => {
    return (
    <div className="login">
    <h1>Login</h1>
    <form action="/api/login" method="POST">
        <label htmlFor="username"></label>
        <input type="text" name="username" placeholder="Username" id="username" required/>

        <label htmlFor="password"></label>
        <input type="password" name="password" placeholder="Password" id="password" required/>

        <input type="submit" value="Submit"/>
    </form>
    </div>
    );
}

export default login;