// the modueles are imported
const express = require("express"); //express.js is required for creating the server
const cors = require("cors"); // enable cross-origin requests
const axios = require ("axios"); // used for makking the HTTP requests

const app = express();  //the instance of the express application is created
app.use(express.json()); // The app will use the express.json when data is received. 
app.use(cors({ origin: true })); // this allows requests from all places/origins

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(  // A put requests to chat engine api to make or update a user
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "aa3903ef-6706-4f3c-a862-066d0c3f82e9" } } // the private key is used for authentication of the chat project. 
    );
    return res.status(r.status).json(r.data); // It will give the response from chat engine 
  } catch (e) {
    return res.status(e.response.status).json(e.response.data); // handling of errors during response requests
  }
});

app.listen(3001);  // The port 3001 is used to start the server