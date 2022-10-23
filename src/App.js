import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" homeText="Home" />
      <div className="container mt-5">
        <TextForm heading="Let's Analyze the text" />
      </div>
    </>
  );
}

export default App;
