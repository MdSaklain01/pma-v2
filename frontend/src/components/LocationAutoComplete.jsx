import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";

const libraries = ["places"];

function LocationInput({ value, onChange }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const autocompleteRef = useRef(null);

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();

    if (!place.geometry) return;

    const locationData = {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      placeId: place.place_id,
    };

    onChange(locationData);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete
      onLoad={(ref) => (autocompleteRef.current = ref)}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        placeholder="Enter location"
        defaultValue={value?.address || ""}
      />
    </Autocomplete>
  );
}

export default LocationInput;