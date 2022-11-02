import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN = "pk.eyJ1IjoicGhhbmlkYXR0YXJlZGR5IiwiYSI6ImNrZjd1MW4zczA1djIycm11bG5wazJ5ZGQifQ.Z1jmXgscOPSOajhWvyC-TA"

function App() {
  return (
    <Map 
      initialViewState={{
        longitude: 78.3871,
        latitude: 17.4834,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {MAPBOX_TOKEN}
    />
  );
}

export default App;
