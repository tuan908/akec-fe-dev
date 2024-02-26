"use client";

import {Icon} from "leaflet";
import "leaflet/dist/leaflet.css";
import {MapContainer, Marker, TileLayer} from "react-leaflet";

const Map = () => {
  return (
    <div>
      <div className="container px-5 py-6 mx-auto">
        <MapContainer
          center={[11.316911704353663, 106.83235128527161]}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: "50em",
            width: "100%",
            position: "relative",
            zIndex: 0
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[11.316911704353663, 106.83235128527161]}
            icon={MarkerIcon}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;

const MarkerIcon = new Icon({
  iconUrl: "/assets/image/marker-icon.png"
});
