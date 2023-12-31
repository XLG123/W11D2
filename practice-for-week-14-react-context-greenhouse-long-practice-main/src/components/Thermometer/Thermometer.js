import ReactSlider from "react-slider";
import './Thermometer.css';
// import useClimateContext from "../../context/ClimateContext";
import { useClimateContext } from "../../context/ClimateContext";

function Thermometer() {

  // debugger
  const {climateName, setClimateName} = useClimateContext();
  return (
    // <h1>Hello</h1>
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {climateName}°F</div>
      <ReactSlider
        value={climateName}
        onAfterChange={(val) => setClimateName(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;