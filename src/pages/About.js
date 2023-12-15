import Accordion from "../components/Accordion";
import profile from "../img/Profile.png";
import AboutMe from "./layout/AboutMe";
import Beliefs from "./layout/Beliefs";
import Books from "./layout/Books";
import Movies from "./layout/Movies";

function About() {
  const cards = [
    { id: "123", label: "About me", content: <AboutMe /> },
    { id: "134", label: "My beliefs", content: <Beliefs /> },
    { id: "145", label: "Favorite Books", content: <Books /> },
    { id: "156", label: "Favorite Movies", content: <Movies /> },
  ];

  return (
    <div className="section">
      <div className="profile">
        <h1>Gabriela (Gaybi) Mylonas 🏳️‍🌈</h1>
        <p>Pronoums (She/ Her/ They/ Them/ He/ Him)</p>
        <img className="photo" src={profile} alt="Just me" />
      </div>
      <Accordion cards={cards} />
    </div>
  );
}

export default About;
