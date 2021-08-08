import logo from './logo.svg';
import './App.css';
import Login from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/rohit.jpg" className="App-logo" alt="logo" /> 
        <p>
          Welcome to my Website Guys
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Login></Login>  
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
