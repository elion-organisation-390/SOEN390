import React, { useState } from "react";
import { View, Keyboard, Alert } from "react-native";
import MapView, {Region } from "react-native-maps";
import { DefaultMapStyle } from "@/Styles/MapStyles";
import { searchPlaces } from "@/services/PlacesService";
import { Button } from "react-native-paper";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ButtonsStyles } from "@/Styles/ButtonStyles";
import { LATITUDE_DELTA, LONGITUDE_DELTA } from "@/constants/MapsConstants";
// The single search UI, combining autocomplete + text-based search
export const AutocompleteSearchWrapper = ({
mapRef,
setResults,
userLocation,
currentCampus,
googleMapsKey,
}: {
mapRef: React.RefObject<MapView>;
setResults: React.Dispatch<React.SetStateAction<any[]>>;
userLocation: Region | null;
currentCampus: Region;
googleMapsKey: string;
}) => {
// This local state tracks typed text in the Autocomplete's field
const [autoSearchText, setAutoSearchText] = useState("");

// Perform a full text-based search, returning multiple results
const handleFullTextSearch = async () => {
    if (!autoSearchText.trim()) return;

    try {
    const { results, coords } = await searchPlaces(
        autoSearchText,
        userLocation?.latitude || currentCampus.latitude,
        userLocation?.longitude || currentCampus.longitude,
        googleMapsKey
    );

    if (results.length === 0) {
        Alert.alert("No Results", "No locations found. Try a different search.", [{ text: "OK" }]);
        return;
    }

    setResults(results);
    if (coords.length) {
        mapRef.current?.fitToCoordinates(coords, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
        });
        Keyboard.dismiss();
    }
    } catch (error) {
    console.error("Error during text search:", error);
    Alert.alert("Error", "Failed to fetch places. Please try again.");
    }
};

// Handle user picking a suggestion from the dropdown
const handleSelectSuggestion = (data: any, details: any | null) => {
    console.log("Selected place:", data, details);
    if (!details) return;

    const { lat, lng } = details.geometry.location;
    mapRef.current?.animateToRegion(
    {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    },
    1000
    );
    // Show only this place as a result
    setResults([details]);
};

// Clear typed text and results
const handleClearAll = () => {
    setAutoSearchText("");
    setResults([]);
};

return (
    <View style={ButtonsStyles.searchWrapper}>
    {/* The Google Places Autocomplete field */}
    <GooglePlacesAutocomplete
        placeholder="Search for places..."
        fetchDetails={true}
        onPress={handleSelectSuggestion}
        query={{
        key: googleMapsKey,
        language: "en",
        }}
        textInputProps={{
        value: autoSearchText,
        onChangeText: setAutoSearchText,
        onSubmitEditing: handleFullTextSearch, // Press Enter to do a multi-result search
        }}
        styles={{ container: { flex: 0 }, textInput: DefaultMapStyle.searchBox }}
    />

    {/* Buttons below the Autocomplete input */}
    <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Button
        mode="contained"
        onPress={handleFullTextSearch}
        style={{ marginRight: 5, flex: 1 }}
        >
        Search
        </Button>
        <Button mode="contained" onPress={handleClearAll} style={{ backgroundColor: "red", flex: 1 }}>
        Clear
        </Button>
    </View>
    </View>
);
};