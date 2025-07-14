import Polaroid from "./components/Polaroid"
import headshot from "./assets/headShot-e245810b.jpg"
function App() {
  return (
    <>
      <nav>
        <p>Randy's Portfolio</p>
      </nav>
      <div id="intro-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </p>
          <div id="intro-polaroid">
            <Polaroid img={headshot} rotate={true}/>
          </div>
      </div>
    </>
  )
}

export default App
