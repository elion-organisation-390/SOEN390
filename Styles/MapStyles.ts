import { StyleSheet, Dimensions } from 'react-native'; 

export const MarkerInfoBoxStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#722F37',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const DefaultMapStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    position: 'absolute',
    top: 10,
    width: '90%',
    alignSelf: 'center',
  },
  searchBox: {
    marginBottom: 10,
  },
  campusButtons: {

  },
  campusButton: {
    // marginHorizontal: 5,
  },
  campusButtonWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  }
});

const { width, height } = Dimensions.get("window");


export const DirectionsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    top: 15,
    alignSelf: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom: 7,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 2,
  },
  roundedInput: {
    height: 25,
    borderRadius: 18,
    paddingHorizontal: 8,
    backgroundColor: "white",
      textAlignVertical: "center",
      paddingTop: 0,
      paddingBottom: 0,
  },
  transportModeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  statsContainer: {
    position: "absolute",
    top: 155,
    left: 20,
    right: 20,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  statsText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
});


