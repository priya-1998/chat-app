import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Join from "./components/Join/Join"
import Chat from "./components/Chat/Chat"

const App = () => {

//when the user comes to our app , he would be greeted with our join component inside of here,
// he gonna pass his data in the login form and through query string we would 
//pass the data through to the chat.
//Once we have the data we gonna render the chat component
return(
<Router>
     <Route path="/" exact component= {Join} /> 
     <Route path="/chat" component= {Chat} />

   </Router>
);
}
export default App;    