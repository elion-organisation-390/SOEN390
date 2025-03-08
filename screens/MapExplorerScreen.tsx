import React, { useState, useRef, useEffect } from "react";
import { View, Alert, ScrollView } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Region,
  Geojson,
  Circle,
  Marker,
} from "react-native-maps";
import { DefaultMapStyle } from "@/Styles/MapStyles";
import { CustomMarkersComponent } from "../components/MapComponents/MarkersComponent";
import { GOOGLE_MAPS_API_KEY } from "@/constants/GoogleKey";
import { useNavigation } from "@react-navigation/native";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { Button, List } from "react-native-paper";
import * as Location from "expo-location";
import { ButtonsStyles } from "@/Styles/ButtonStyles";
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  LOY_CAMPUS,
  SGW_CAMPUS,
} from "@/constants/MapsConstants";
import { AutocompleteSearchWrapper } from "@/components/InputComponents/AutoCompleteSearchWrapper";
import { MarkerInfoBox } from "@/components/MapComponents/MarkerInfoBox";

import { MapExplorerScreenStyles } from "@/Styles/MapExplorerScreenStyles";

const googleMapsKey = GOOGLE_MAPS_API_KEY;

const buildingMarkers =
  require("@/gis/building-markers.json") as FeatureCollection<
    Geometry,
    GeoJsonProperties
  >;
const buildingOutlines =
  require("@/gis/building-outlines.json") as FeatureCollection<
    Geometry,
    GeoJsonProperties
  >;
const hall9RoomsPois =
  require("@/gis/hall-9-rooms-pois.json") as FeatureCollection<
    Geometry,
    GeoJsonProperties
  >;
const hall9FloorPlan =
  require("@/gis/hall-9-floor-plan.json") as FeatureCollection<
    Geometry,
    GeoJsonProperties
  >;

const markerImage = require("@/assets/images/marker.png");

const handleRoomPoiPress = (event: any) => {
  console.log("Hall 9 room POI pressed:", event);
};

// Wrapper for the <MapView> component
const MapComponent = ({
  mapRef,
  results,
  currentCampus,
  userLocation,
  setSelectedMarker,
}: {
  mapRef: React.RefObject<MapView>;
  results: any;
  currentCampus: Region;
  userLocation: Region | null;
  setSelectedMarker: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handleOutlinePress = (event: any) => {
    console.log("Building outline pressed:", event);
  };

  const [selectedCoordinate, setSelectedCoordinate] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [selectedProperties, setSelectedProperties] = useState<any>(null);
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleMarkerPress = (markerData: any) => {
    console.log("Building marker pressed:", markerData);

    if (markerData.coordinates) {
      setSelectedCoordinate(markerData.coordinates);
      

      if (markerData.feature?.properties) {
        setSelectedProperties({
          ...markerData.feature.properties,
          coordinate: markerData.coordinates
        });
      } else {
        setSelectedProperties(markerData);
      }
      
      setShowInfoBox(true);
      setSelectedMarker(markerData);
    } else {
      console.log("No coordinates found in marker data");
    }
  };

  const handleCloseInfoBox = () => {
    setShowInfoBox(false);
    setSelectedCoordinate(null);
  };

  // const handleSearchResultPress = (event: any) => {
  //   console.log("Search result pressed:", event);

  //   // const { coordinates, feature, type } = event;
  //   // const { latitude, longitude } = coordinates;
  //   // const { properties } = feature;
  //   // const message = `
  //   //   Coordinates:
  //   //     Latitude: ${latitude}
  //   //     Longitude: ${longitude}
  //   //   Feature:
  //   //     Type: ${feature.type}
  //   //     Geometry Type: ${feature.geometry.type}
  //   //     Formatted Address: ${properties.formatted_address}
  //   //     Name: ${properties.name}
  //   //     Place ID: ${properties.place_id}
  //   //   Type: ${type}
  //   // `;
  //   // Alert.alert("Search result pressed", message);
  // };

  return (
    <>
      <MapView
        ref={mapRef}
        style={DefaultMapStyle.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={currentCampus}
        showsBuildings={false} // Disable 3D buildings
        customMapStyle={[
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
        ]}
      >
        <Geojson
          geojson={buildingMarkers}
          strokeColor="blue"
          fillColor="cyan"
          strokeWidth={2}
          tappable={true}
          onPress={handleMarkerPress} // Add onPress handler
        />
        <Geojson
          geojson={buildingOutlines}
          strokeColor="green"
          fillColor="rgba(255, 0, 200, 0.16)"
          strokeWidth={2}
          onPress={handleOutlinePress}
          tappable={true}
        />
        <Geojson
          geojson={hall9RoomsPois}
          image={markerImage}
          strokeColor="red"
          fillColor="rgba(255, 0, 0, 0.5)"
          strokeWidth={2}
          tappable={true}
          onPress={handleRoomPoiPress}
        />
        <Geojson
          geojson={hall9FloorPlan}
          strokeColor="orange"
          fillColor="rgba(255, 165, 0, 0.5)"
          strokeWidth={2}
          tappable={true}
        />
        {results.features && (
          <Geojson
            geojson={results}
            strokeColor="red"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={2}
            tappable={true}
            onPress={handleSearchResultPress} // Add onPress handler for search results
          />
        )}
        {userLocation && (
          <>
            <Circle
              center={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              radius={10}
              strokeColor="rgba(0, 122, 255, 0.3)"
              fillColor="rgb(0, 123, 255)"
            />
            <Circle
              center={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
              }}
              radius={50}
              strokeColor="rgba(0, 122, 255, 0.3)"
              fillColor="rgba(0, 122, 255, 0.1)"
            />
          </>
        )}
      </MapView>
      {showInfoBox && selectedCoordinate && selectedProperties && (
        <MarkerInfoBox
          coordinate={selectedCoordinate}
          title={selectedProperties.Building_Name || selectedProperties.BuildingName || "Building"}
          properties={selectedProperties}
          onClose={handleCloseInfoBox}
        />
      )}
    </>
  );
};

export default function MapExplorerScreen() {
  const mapRef = useRef<MapView | null>(null);
  const [results, setResults] = useState<any>({});
  const [currentCampus, setCurrentCampus] = useState<Region>(SGW_CAMPUS);
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [userLocation, setUserLocation] = useState<Region | null>(null);
  const [expanded, setExpanded] = useState(false);
  const navi = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Highest,
          maximumAge: 10000,
          timeout: 5000,
        });
        const { latitude, longitude } = location.coords;
        const userRegion: Region = {
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setUserLocation(userRegion);
        mapRef.current?.animateToRegion(userRegion, 1000);
      } catch (error) {
        console.error("Error getting location:", error);
      }
    })();
  }, []);

  const handleDirections = (marker: any) => {
    console.log("Selected marker ", selectedMarker);
    navi.navigate("Directions", { destination: selectedMarker });
  };

  const handleSwitchToSGW = () => {
    setCurrentCampus(SGW_CAMPUS);
    mapRef.current?.animateToRegion(SGW_CAMPUS, 1000);
  };

  const handleSwitchToLoyola = () => {
    setCurrentCampus(LOY_CAMPUS);
    mapRef.current?.animateToRegion(LOY_CAMPUS, 1000);
  };

  const handleCenterToUserLocation = () => {
    if (userLocation) {
      mapRef.current?.animateToRegion(userLocation, 1000);
    } else {
      Alert.alert(
        "Location not available",
        "User location is not available yet."
      );
    }
  };

  const handleGoPress = () => {
    console.log("GO button pressed");
  };

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={DefaultMapStyle.container}>
      <MapComponent
        mapRef={mapRef}
        results={results}
        currentCampus={userLocation || currentCampus}
        userLocation={userLocation}
        setSelectedMarker={setSelectedMarker}
      />
      <View
        style={[
          ButtonsStyles.controlsContainer,
          MapExplorerScreenStyles.controlsContainer,
        ]}
      >
        <AutocompleteSearchWrapper
          mapRef={mapRef}
          setResults={setResults}
          userLocation={userLocation}
          currentCampus={currentCampus}
          googleMapsKey={googleMapsKey}
          location={userLocation}
        />
        <List.Section>
          <List.Accordion
            title="Hall Building" // Change title to Hall Building
            left={(props) => <List.Icon {...props} icon="office-building" />} // Change icon to office-building
            expanded={expanded}
            onPress={handlePress}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} // Add background color with opacity
          >
            <ScrollView style={{ maxHeight: 400 }}>
              {" "}
              // Set a max height for the scrollable area
              {Array.from({ length: 12 }, (_, i) => (
                <List.Item
                  key={i + 1}
                  title={`H${i + 1}`} // Change floor titles to H1, H2, ..., H12
                  left={(props) => <List.Icon {...props} icon="floor-plan" />} // Add icon to each item
                  style={{ backgroundColor: "white" }} // Ensure white background for each item
                />
              ))}
            </ScrollView>
          </List.Accordion>
        </List.Section>
      </View>
      <View
        style={[
          ButtonsStyles.buttonContainer,
          MapExplorerScreenStyles.buttonContainer,
        ]}
      >
        <Button
          mode="contained"
          onPress={handleSwitchToSGW}
          style={ButtonsStyles.button}
        >
          SGW
        </Button>
        <Button
          mode="contained"
          onPress={handleSwitchToLoyola}
          style={ButtonsStyles.button}
        >
          Loyola
        </Button>
        <Button
          mode="contained"
          onPress={handleCenterToUserLocation}
          style={ButtonsStyles.button}
        >
          ME
        </Button>
        <Button
          mode="contained"
          onPress={handleGoPress}
          style={ButtonsStyles.button}
        >
          GO
        </Button>
      </View>
      {showInfoBox && selectedMarker && (
        <MarkerInfoBox
          title={selectedMarker.BuildingName || selectedMarker.name}
          address={selectedMarker.Address || selectedMarker.vicinity}
          onClose={() => {
            setShowInfoBox(false);
            setSelectedMarker(null);
          }}
          onDirections={handleDirections}
        />
      )}
    </View>
  );
}
