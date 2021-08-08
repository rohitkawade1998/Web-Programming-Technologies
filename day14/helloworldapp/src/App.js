import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Product from './product';
import Login from './login';
import Register from './register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/rohit.jpg" className="App-logo" alt="logo" /> 
        <p>
          Welcome to my Website Guys
        </p>
        
      </header> 

      <br/>
      <Home></Home>
      <br/>
      <About></About>
      <br/>
      <Contact></Contact>
      <br/>
      <Product></Product>
      <br/>
      <Login></Login>
      <br/>
      <Register></Register>
      <br/>

     
    </div> 
  );
}


/*
//function component
function Hello(){
  return(
    <div>
    <h2> New hello component </h2>
    <h3> Welcome to Child component</h3>

    </div>
  );
}
*/

export default App;
