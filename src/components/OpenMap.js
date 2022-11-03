import React, { useState } from 'react'
import Map, {Marker} from 'react-map-gl'
import {FaMapMarkerAlt} from 'react-icons/fa'
import * as turf from '@turf/turf'
import './Style.css'

const MAPBOX_TOKEN = "pk.eyJ1IjoicGhhbmlkYXR0YXJlZGR5IiwiYSI6ImNrZjd1MW4zczA1djIycm11bG5wazJ5ZGQifQ.Z1jmXgscOPSOajhWvyC-TA"

function OpenMap() {
  const [markerCoordinates, setMarkerCoordinates] = useState([])

  const addMarker = (event) => {
    let coordinates = event.lngLat
    const options = {units: 'meters'}

    if(markerCoordinates.length === 1) {
      let from = turf.point(Object.values(markerCoordinates[0]))
      let to = turf.point(Object.values(coordinates))
      let distanceResult = turf.distance(from, to, options).toFixed([2])
      coordinates.distance = distanceResult
    } else if(markerCoordinates.length !== 0) {
      let from = turf.point(Object.values(markerCoordinates[markerCoordinates.length - 2]).slice(0, 2))
      let to = turf.point(Object.values(coordinates))
      let distanceResult = turf.distance(from, to, options).toFixed([2])
      coordinates.distance = distanceResult
    }

    setMarkerCoordinates([...markerCoordinates, coordinates])
  }

  return (
    <React.Fragment>
      <Map 
      initialViewState={{
        longitude: 78.3871,
        latitude: 17.4834,
        zoom: 14
      }}
      style={{
        width: window.innerWidth,
        height: 500
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken= {MAPBOX_TOKEN}
      onClick={addMarker}
    >
      {markerCoordinates.length !== 0 && markerCoordinates.map((marker, index) =>
        <Marker longitude={marker.lng} latitude={marker.lat} anchor="bottom" key={marker.lng + marker.lat + index}>
          <div className='marker'>
            <h2>{index + 1}</h2>
          </div>
        </Marker>
      )}
      </Map>
      
      <div className='mapMarkers'>
        {markerCoordinates.length !== 0 && markerCoordinates.map((coords, index) => 
          <div key={index}>
            <div className='pin'>
              {index !== 0 &&
                <div className='distance'>
                  <p>{Number(coords.distance).toLocaleString('en-IN')} <small>m</small></p>
                  <div className='line'></div>
                </div>
              }
              <FaMapMarkerAlt size={50} color="#00b4d0" />
            </div>
            <p className='pinName'><small>Point {index+1}</small></p>
          </div>
        )}
      </div>
    </React.Fragment>
    
  );
}

export default OpenMap;
