import { useState } from "react"; // Import the usestate from react

import "./App.css"; // the CSS is imported for the style and easthetics of the App. 
// The Chatpage and Authpage components are imported to use. 
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {  // the main app is defined
  const [user, setUser] = useState(undefined);
  // you check if user is not defined.
  if (!user) {  
    return <AuthPage onAuth={(user) => setUser(user)} />; // If the user is not defined, pass a function to handle the autentication. 
  } else { // 
    return <ChatsPage user={user} />; // If the user is defined then pass the user data for use to login. 
  }
}

export default App; // The app is exported for use in other parts of the program/application
