import { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Banner, SmallRocket } from "../assets/Icons";
import CardMission from "../component/CardMission";
import FilterData from "../component/FilterData";
import HeaderScreen from "../component/Header";
import { Colors } from "../helpers/colors";
import { WIDTH_SCREEN } from "../helpers/constants";
import useLaunchesPastResult from "../helpers/useLaunchesPastResult";

const MainScreen = () => {
  const information = useLaunchesPastResult();
  const data = information.data;
  const result = information?.data?.result;
  const Item = useCallback((props) => <CardMission {...props} />, []);
  const [close, setClose] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: Colors.BlueDark }}>
        <HeaderScreen />
      </View>
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
      <View style={{ zIndex: 100 }}>
        <FilterData close={close} functionClose={setClose} />
      </View>
      <View>
        <FlatList
          data={data?.data}
          limit={5}
          keyExtractor={(item) => item.id}
          renderItem={Item}
        />
        <View style={styles.viewLoadMore}>
          <Text style={styles.textNumberItem}>1 of {result?.totalCount}</Text>
          <TouchableOpacity style={styles.buttonLoadMore}>
            <Text style={styles.textLoadMore}>LOAD MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  textNumberItem: {
    fontSize: 15,
    color: Colors.BlueDark,
    alignSelf: "center",
  },
  viewLoadMore: {
    paddingLeft: 79,
    paddingTop: 13,
    paddingRight: 66,
    flexDirection: "row",
  },
  buttonLoadMore: {
    borderRadius: 16.5,
    backgroundColor: Colors.RedLight,
    justifyContent: "center",
    marginLeft: 41,
    paddingTop: 6,
    paddingBottom: 7,
    paddingLeft: 30,
    paddingRight: 29,
  },
  textLoadMore: {
    fontSize: 15,
    color: Colors.White,
  },
  viewCollapsable: {
    backgroundColor: Colors.BlueDark,
    width: 250,
    marginLeft: 16,
    paddingLeft: 22,
    paddingRight: 33,
    borderRadius: 6,
  },
  textItemFilter: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.BlueDark,
    alignSelf: "center",
  },
  viewItemFilter: {
    backgroundColor: Colors.BrownLight,
    borderRadius: 14,
    paddingVertical: 16.5,
    marginVertical: 22,
  },
  collapsable: {
    flex: 1,
    zIndex: 100,
  },
});
