import { useState, useEffect } from "react";
const Script = () => {
  // Cursor position
  const [pos, setPos] = useState({ x: 0, y: 0 });
  // Location
  const [loc, setLoc] = useState(null);
  const [err, setErr] = useState("");
  // Function for handling mouse movement
  const handleMouseMove = (e) => {
    setPos({
      x: e.pageX,
      y: e.pageY,
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoc({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        setErr(err.message);
      }
    );
  }, []);
  return (
    <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
      <h2>Location</h2>

      {loc ? (
        <>
          <p>Latitude: {loc.latitude}</p>
          <p>Longitude: {loc.longitude}</p>
        </>
      ) : (
        <p>Getting location...</p>
      )}

      {err && <p>Error: {err}</p>}
      <h2>Mouse Position</h2>
      <div style={{ position: "absolute", bottom: 0 }}>
        <p>X: {pos.x}</p>
        <p>Y: {pos.y}</p>
      </div>
    </div>
  );
};

export default Script;
