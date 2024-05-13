




function OpenQueshtion() {
    return (
      <div className="container">
      <h1>Three questions for the accuracy of the process</h1>
      <form action="/action_page.php">
          <label for="username">לאן המעבר:</label>
          <input type="text" id="username" name="username" placeholder="Your Username"/>
          <label for="psw">Password:</label>
          <input type="password" id="psw" name="password" placeholder="Your Password"/>
          
          
          <select id="day" name="day">
    <option value="">Day</option>
    
  </select>
  <select id="month" name="month">
    <option value="">Month</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
  <select id="year" name="year">
    <option value="">Year</option>
    
  </select>
      </form>

      <button type="submit">Login</button>
  </div>
    );
  }
  
  export default OpenQueshtion;
  