import Accordion from "./components/Accordion";
import profile from "./img/Profile.png";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Books from "./pages/Books";
import Movies from "./pages/Movies";

function App() {
  const sections = [
    { id: "123", label: "About me", content: <About /> },
    { id: "134", label: "My beliefs", content: <Beliefs /> },
    { id: "145", label: "Favorite Books", content: <Books /> },
    { id: "156", label: "Favorite Movies", content: <Movies /> },
  ];

  return (
    <div>
      <div className="profile">
        <h1>Gabriela (Gaybi) Mylonas 🏳️‍🌈</h1>
        <p>Pronoums (She/ Her/ They/ Them/ He/ Him)</p>
        <img className="photo" src={profile} alt="" />
      </div>
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
