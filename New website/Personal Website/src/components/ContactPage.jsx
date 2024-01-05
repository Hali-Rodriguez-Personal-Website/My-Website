import NavBar from "./NavBar";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import artstation from "../assets/artstation.png";
import tumblr from "../assets/tumblr.png";

export default function ContactPage() {
  return (
    <>
      <div>
        <NavBar />
        <h1>My socials</h1>
        <span>
          <div className="socialbox">
            <a href="https://www.linkedin.com/in/hali-rodriguez">
              <img src={linkedin} className="socials" />
            </a>
            <a href="https://www.instagram.com/ayeitshali/">
              <img src={instagram} className="socials" />
            </a>
            <a href="https://github.com/Shaberryy">
              <img src={github} className="socials" />
            </a>
            <a href="https://www.artstation.com/jaden_png">
              <img src={artstation} className="socials" />
            </a>
            <a href="https://www.artstation.com/jaden_png">
              <img src={tumblr} className="socials" />
            </a>
          </div>
        </span>
      </div>
    </>
  );
}