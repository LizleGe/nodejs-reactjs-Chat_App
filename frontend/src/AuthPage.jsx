import axios from "axios" // The axios are imported for the HTTP requests.

const AuthPage = (props) => {  // The AutPage component are defined. 
    const onSubmit = (e) => { // A funstion is defined to handle the submission of the form. 
      e.preventDefault(); // The default behaviour is stopped when the form is submitted. 
      const { value } = e.target[0];
      axios.post( // A post request is done ti get the autentication endpoint. 
        "http://localhost:3001/authenticate", // The endpoint of the of the URL
        {username: value} //The data that is send within the request. 
        )
        .then( r => props.onAuth({ ...r.data, secret: value })) //The onAuth function is called and userdata passed
        .catch(e => console.log("error", e)) // errors will be handled during request and log in 
    };
    // The below are the html for the main app page to login. 
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 🙋‍♂️</div>
          
          <div className="form-subtitle"><b>Please enter your username to start chatting with 🫵🏻 friends</b></div>
          
          <div className="auth">
            <div className="auth-label">Username</div> 
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit"><b>Enter</b>
              
            </button>
          </div>
        </form>
      </div>
    );
  };
  // THe AuthPage is exported to be used in other parts of the program. 
  export default AuthPage;