import { FiSearch } from "react-icons/fi";
import "./App.sass";

function App() {
  return (
    <div className="container">
      <h1 className="container-title">Zip code finder</h1>

      <form className="container-input" method="post">
        <input type="text" placeholder="Enter your zip code..." />
        <button className="container-input-searchButton">
          <FiSearch size={25} color="#fff" />
        </button>
      </form>

      <main className="container-main">
        <h2>Zip code: 79003222</h2>
        <span>Rua Teste algum</span>
        <span>Complemento: Algum complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - RS</span>
      </main>
    </div>
  );
}

export default App;
