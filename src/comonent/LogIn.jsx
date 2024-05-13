
function LogIn() {
  return (
    <div className="container">
    <img src="logo.png" alt="Company Logo"/>
    <form action="/action_page.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Your Username"/>
        <label for="psw">Password:</label>
        <input type="password" id="psw" name="password" placeholder="Your Password"/>
        <button type="submit">Login</button>
        <a href="#">Forgot Password?</a>
        <a href="#">Sign Up</a>
        
    </form>
</div>
  );
}

export default LogIn;
