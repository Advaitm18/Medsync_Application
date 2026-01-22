import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useUserLocation } from "../hooks/useUserLocation";

const containerStyle = {
  width: "100%",
  height: "500px",
};

type Hospital = {
  lat: number;
  lng: number;
  name: string;
};

const libraries: ("places")[] = ["places"];

const HospitalMap: React.FC = () => {
  const { position, error } = useUserLocation();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const fetchNearbyHospitals = useCallback(() => {
    if (!mapRef.current || !position) return;

    const service = new google.maps.places.PlacesService(mapRef.current);

    const request: google.maps.places.PlaceSearchRequest = {
      location: new google.maps.LatLng(position.lat, position.lng),
      radius: 5000, // 5km
      type: "hospital",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const mapped: Hospital[] = results
          .filter((p) => p.geometry && p.geometry.location)
          .map((p) => ({
            lat: p.geometry!.location!.lat(),
            lng: p.geometry!.location!.lng(),
            name: p.name || "Hospital",
          }));
        setHospitals(mapped);
      }
    });
  }, [position]);

  useEffect(() => {
    // whenever user moves, refetch nearby hospitals
    if (position) {
      fetchNearbyHospitals();
    }
  }, [position, fetchNearbyHospitals]);

  if (error) {
    return <div>Error: {error}. Please allow location access.</div>;
  }

  if (!position) {
    return <div>Getting your live location...</div>;
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: position.lat, lng: position.lng }}
        zoom={14}
        onLoad={onMapLoad}
      >
        {/* User location marker */}
        <Marker
          position={{ lat: position.lat, lng: position.lng }}
          label="You"
        />

        {/* Nearby hospitals markers */}
        {hospitals.map((h, i) => (
          <Marker
            key={i}
            position={{ lat: h.lat, lng: h.lng }}
            title={h.name}
          />
        ))}
      </GoogleMap>

      <div style={{ marginTop: "8px" }}>
        Found {hospitals.length} nearby hospitals.
      </div>
    </LoadScript>
  );
};

export default HospitalMap;
