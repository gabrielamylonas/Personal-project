import Gabs from "../img/family/Gabs.jpeg";
import Ninho from "../img/family/Ninho.jpeg";
import Chicha from "../img/family/Chicha.jpeg";
import Dolores from "../img/family/Dolores.jpeg";
import Nana from "../img/family/Nana.jpeg";

function Family() {
  return (
    <div className="section">
      <h2 className="subtitle">My litle family</h2>
      <div className="family">
        <div className="family__member">
          <img alt="Doodle of my beloved partner" src={Gabs}></img>
          <p>Gabs</p>
        </div>
        <div className="family__member">
          <img alt="Photograph of my cat Ninho" src={Ninho}></img>
          <p>Ninho</p>
        </div>
        <div className="family__member">
          <img alt="Photograph of my cat Chicha" src={Chicha}></img>
          <p>Chicha</p>
        </div>
        <div className="family__member">
          <img alt="Photograph of my cat Dolores" src={Dolores}></img>
          <p>Dolores</p>
        </div>
        <div className="family__member">
          <img alt="Photograph of my cat Nana" src={Nana}></img>
          <p>Nana</p>
        </div>
      </div>
    </div>
  );
}

export default Family;
