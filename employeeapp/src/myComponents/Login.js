    function Login(){
        return(
    <div className="userclass">
        <h2>Login</h2>
        <form>
     
            <label for="userID">User ID</label>
            <input type="text" id="userID" name="userID" required/><br/>

         
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required/><br/>

            <button type="submit">Login</button>
        </form>
    </div>
        )}

export default Login;        
