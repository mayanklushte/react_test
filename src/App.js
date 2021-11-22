import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Modal from "./components/Modal";

function App() {
  let product_name = ["Bat", "Ball", "home"];

  return (
    <div>
      <Navbar />
      <div className="row">
        {product_name.map((product) => {
          return (
            <div className="col-md-4">
              <Cards name={product} />
            </div>
          );
        })}
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
