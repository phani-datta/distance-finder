import React from 'react'
import Map, {Marker} from 'react-map-gl'
import {FaMapMarkerAlt} from 'react-icons/fa'
import './Style.css'
import addMarkerAction from '../store/_actions/mapAction'
import { useDispatch, useSelector } from 'react-redux'

const MAPBOX_TOKEN = "pk.eyJ1IjoicGhhbmlkYXR0YXJlZGR5IiwiYSI6ImNrZjd1MW4zczA1djIycm11bG5wazJ5ZGQifQ.Z1jmXgscOPSOajhWvyC-TA"

function OpenMap() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const addMarker = (event) => {
    let coordinates = event.lngLat
    dispatch(addMarkerAction(coordinates))
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
      {state.markerCoordinates.length !== 0 && state.markerCoordinates.map((marker, index) =>
        <Marker longitude={marker.lng} latitude={marker.lat} anchor="bottom" key={marker.lng + marker.lat + index}>
          <div className='marker'>
            <h4>{index + 1}</h4>
          </div>
        </Marker>
      )}
      </Map>
      
      <div className='mapMarkers'>
        {state.markerCoordinates.length !== 0 && state.markerCoordinates.map((coords, index) => 
          <div key={index}>
            <div className='pin'>
              {index !== 0 &&
                <div className='distance'>
                  <p>{Number(coords.distance).toLocaleString('en-IN')} <small>m</small></p>
                  <div className='line'></div>
                </div>
              }
              <FaMapMarkerAlt size={50} color="#00b4d0" title='Hello Bayya' />
            </div>
            <div className='marker' style={{float: 'right', backgroundColor: "#ff2e19", marginRight: '10px'}}>
              <h4>{index + 1}</h4>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
    
  );
}

export default OpenMap;
