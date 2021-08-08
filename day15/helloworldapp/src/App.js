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
      <Homee></Homee>
      <br/>
      

     
    </div> 
  );
}



//function component
function Homee(){
  return(
    <div>
       <div class="jumbotron">
          <h1>Welcome to Transflower</h1>
          <p>Mentoring as A service</p>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-sm-4">
            <h1>Mentoring</h1>
            <p>YA YA YA</p>
            </div>
            <div class="col-sm-4">
            <h1>Consulting</h1>
            <p>YO YO YO</p>
            </div>
            <div class="col-sm-4">
            <h1>Learning</h1>
            <p>Yes Yes Yes</p>
          </div>
        </div>
      </div>

    </div>
  );
}


export default App;
