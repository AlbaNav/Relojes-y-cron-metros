import './App.css';
import DigitalClock from './components/DigitalClock';
import CuentaAtras from './components/CuentaAtras';
import Cronometro from './components/Cronometro';

function App() {
  return (
    <div className="relojitos">
    <h3>Hora:</h3>
    <DigitalClock/>
    <h3>Tiempo que queda para terminar:</h3>
    <CuentaAtras/>
    <h3>Cronómetro:</h3>
    <Cronometro/>
      
    </div>
  );
}

export default App;
