import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowDown, Banner, Filter, SmallRocket } from "../assets/Icons";
import HeaderScreen from "../component/Header";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderScreen />
      <View style={styles.viewBanner}>
        <Banner />
      </View>
      <View style={styles.viewSearchButtons}>
        <TouchableOpacity style={styles.buttonSearchFlight}>
          <View style={styles.viewSmallRocket}>
            <SmallRocket />
          </View>
          <View style={styles.viewTextSearchFlight}>
            <Text style={styles.textSearchFlight}>Search for flight</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSearch}>
          <Text style={styles.textSearch}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewFilter}>
        <Filter />
        <Text style={styles.textMission}>MISSION NAME</Text>
        <View style={styles.viewArrowDown}>
          <ArrowDown />
        </View>
      </View>
      <View style={styles.viewLine} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background,
    width: WIDTH_SCREEN,
    flex: 1,
  },
  viewBanner: {
    paddingTop: 19.2,
    paddingHorizontal: 57,
  },
  viewSearchButtons: {
    flexDirection: "row",
    marginTop: 26.4,
    paddingLeft: 15,
    paddingRight: 18,
  },
  viewSmallRocket: {
    paddingVertical: 4.1,
    paddingLeft: 19.8,
    paddingRight: 13.3,
  },
  buttonSearchFlight: {
    backgroundColor: Colors.BlueDark,
    flexDirection: "row",
    borderRadius: 16.5,
  },
  buttonSearch: {
    borderRadius: 16.5,
    backgroundColor: Colors.RedLight,
    justifyContent: "center",
    marginLeft: 20,
  },
  viewTextSearchFlight: {
    paddingTop: 7,
    paddingBottom: 6,
    paddingRight: 55,
  },
  textSearchFlight: {
    fontSize: 15,
    color: Colors.Background,
  },
  textSearch: {
    fontSize: 15,
    color: Colors.White,
    marginLeft: 30,
    marginRight: 29,
  },
  viewFilter: {
    flexDirection: "row",
    marginTop: 15.9,
    paddingLeft: 31.5,
    paddingRight: 97.3,
  },
  textMission: {
    fontSize: 15,
    color: Colors.BlueDark,
    fontWeight: "bold",
    marginLeft: 83.6,
    marginRight: 21.9,
  },
  viewArrowDown: {
    alignSelf: "center",
  },
  viewLine: {
    height: 6,
    backgroundColor: Colors.BlueDark,
    marginLeft: 17.4,
    marginTop: 7.7,
    marginRight: 18.1,
    borderRadius: 6,
  },
});
