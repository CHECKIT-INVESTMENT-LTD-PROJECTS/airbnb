
import './App.css';
import Logo from "../images/airbnb1.png"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){

  return (
      <div>
          <nav className="nav">
              <img src={Logo} alt="AirBNB Logo" className="nav--log"/>
          </nav>

          <h1 className="Hero--h1">Online Experiences</h1>
          <p className="Hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
      </div>


  )
}

export default App;
