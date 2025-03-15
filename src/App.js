import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapChart from './MapChart';

function App() {
  return (
    <div className="App">
      <img
        src="https://www.uniconnectabroad.com/wp-content/uploads/2022/07/uniconnect_logo.jpg" 
        alt="Logo"
        className="top-right-image"
      />
      <MapChart/>
    </div>
  );
}

export default App;
