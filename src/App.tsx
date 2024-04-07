import Home from "./pages/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header title="Bienvenido a Booking Pets" />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        {/* Aquí podrías agregar un componente de pie de página común si lo tienes */}
      </footer>
    </div>
  );
}

export default App;
