import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//AIzaSyCzlRk7BJYX5F8ISCd2ar1IP8bcusIeT84

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 21.1702, // default (Surat)
  lng: 72.8311,
};

export function Lat_long_get() {
   
     const [location, setLocation] = useState(null);

      const handleClick = (e) => {
    setLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

    return (<>
         <LoadScript googleMapsApiKey="AIzaSyCzlRk7BJYX5F8ISCd2ar1IP8bcusIeT84">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={handleClick}
      >
        {location && <Marker position={location} />}
      </GoogleMap>

      <br />

      <input
        type="text"
        placeholder="Latitude"
        value={location?.lat || ""}
        readOnly
      />

      <input
        type="text"
        placeholder="Longitude"
        value={location?.lng || ""}
        readOnly
      />
    </LoadScript>
    </>)
}