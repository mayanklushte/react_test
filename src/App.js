import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <Modal />
    </div>
  );
}

export default App;
