import { useRef, useEffect } from 'react';
import NavbarLogo from '../../Images/MainMenu/Navbar/navbar-logo.png';
import EmotionsList from './EmotionsList';

export default function MainMenu() {
  const typedText = useRef(null);
  const text = 'Cześć,\njak się teraz czujesz?';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      if (typedText.current) {
        typedText.current.innerText += text.charAt(i);
        i++;
        if (text.charAt(i) === ' ' || text.charAt(i) === '\n') {
          typedText.current.innerHTML += '&nbsp;';
        }
      }
      setTimeout(typeWriter, 150);
    }
  }
  useEffect(() => {
    if (!typedText.current) {
      console.error("The element with the id 'typed-text' was not found in the document.");
      return;
    }
    typeWriter();
  }, []);

  return (
    <div className="container">
      <nav>
        <img src={NavbarLogo} alt="Navbar logo app" />
      </nav>
      <div className="feeling-state">
        <h1 ref={typedText} className="typed-text"></h1>
      </div>
      <div className="emotions-container">
        <EmotionsList />
      </div>
      <hr />
    </div>
  );
}

/* <div class="emotions-status">
        <h1 id="typed-text"></h1>
        <div class="emotion-buttons">
          <div class="box calm-div">
            <img src="./images/calm.png" alt="Image 1" />
            <p class="title">Spokój</p>
          </div>
          <div class="box relax-div">
            <img src="/images/relax.png" alt="Image 2" />
            <p class="title">Relaks</p>
          </div>
          <div class="box focus-div">
            <img src="./images/focus.png" alt="Image 3" />
            <p class="title">Skupienie</p>
          </div>
          <div class="box chaos-div">
            <img src="./images/chaos.png" alt="Image 4" />
            <p class="title">Chaos</p>
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="thoughts-exercise">
          <img src="./images/thoughtsexcercise.png" alt="" />
          <h3>Pułapki myślenia</h3>
          <h4>3-10 MIN</h4>
          <a class="start-button" href="thoughtsexercise.html">
            Start
          </a>
        </div>
        <div class="thoughts-exercise challenge">
          <img src="./images/challenge.png" alt="" />
          <h3>Wyzwanie dnia</h3>
          <h4>5-15 MIN</h4>
          <a class="start-button" href="">
            Start
          </a>
        </div>
        <div class="thoughts-exercise challenge discomfort">
          <div class="text-challange">
            <h3>Trening dyskomfortu</h3>
            <h4>24 H</h4>
          </div>
          <a class="start-button" href="">
            Start
          </a>
        </div>
        <div class="thoughts-exercise visualisation">
          <h3>
            Kontemplacja
            <br />
            nieszczęścia
          </h3>
          <h4>5 MIN</h4>
          <a class="start-button" id="link-to-contemplation" href="contemplation.html">
            Start
          </a>
        </div>
        <div class="thoughts-exercise qoutes">
          <h3>
            Stoickie <br />
            cytaty
          </h3>
          <h4>3 MIN</h4>
          <a class="start-button" id="link-to-generator" href="qoutegenerator.html">
            Start
          </a>
        </div>
        <div id="loader" style="display: none">
          <div class="loading-text">Ładowanie...</div>
          <div class="loading-spinner"></div>
        </div> **/
