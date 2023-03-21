import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Comopnents Section
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

//// Pages Section
// import Home from './pages/Home';
// import Homeex from './pages/Homeex';
// import Faq from './pages/Faq';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Portfolio from './pages/Portfolio';
// import Profile1 from './pages/Profile1';
// import Table from './components/DataTable';
// import CbG from './pages/Deuteranopia';
// import CbRG from './pages/Deuteranomly_master';
// import CbR from './components/DataTable';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


function App() {

  return (
    <>
    <ApolloProvider client={client}>
   <Router>
    <Navbar />
    <Switch>
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact}/>
    {/* <Route path="/cbg" component={CbG}/>
    <Route path="/cbr" component={CbR}/>
      <Route path="/home" component={Homeex}/>
      <Route path="/faq" component={Faq} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} /> */}
      <Route path="/" component={About}/>
      
      {/* <Route path="/table" component={Table}/> */}
      
            
   
    </Switch>
    <Footer />
   </Router>
   </ApolloProvider>
    </>
  );
}

export default App;

{/* <Route path="/profile" element={Profile} /> */}
