import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Banner, SmallRocket } from "../assets/Icons";
import CardMission from "../component/CardMission";
import FilterData from "../component/FilterData";
import HeaderScreen from "../component/Header";
import { Colors } from "../helpers/colors";
import { HEIGHT_SCREEN, WIDTH_SCREEN } from "../helpers/constants";
import useLaunchesPastResult from "../helpers/useLaunchesPastResult";

const MainScreen = () => {
  const [page, setPage] = useState(1);
  const { data, result, loading } = useLaunchesPastResult(page);
  const [listData, setListData] = useState([]);
  const [idSelected, setIdSelected] = useState("");
  const Item = useCallback(
    (props) => (
      <CardMission
        {...props}
        functionSelect={selectItem}
        idSelected={idSelected}
      />
    ),
    [idSelected]
  );
  const [close, setClose] = useState(false);
  const [selected, setSelected] = useState("MISSION NAME");

  //true is decend and false is ascend

  const orderList = (entry) => {
    let vector;
    if (entry) {
      vector = listData
        .slice()
        .sort(
          (a, b) => a.mission_name.toLowerCase() > b.mission_name.toLowerCase()
        );
    } else {
      vector = listData
        .slice()
        .sort(
          (a, b) => b.mission_name.toLowerCase() > a.mission_name.toLowerCase()
        );
    }
    setListData(vector);
  };

  const selectItem = (id) => {
    if (id === idSelected) {
      setIdSelected("");
    } else {
      setIdSelected(id.toString());
    }
  };

  useEffect(() => {
    if (!loading) {
      setListData(data);
    }
  }, [loading]);

  return (
    <View
      style={styles.container}
      onTouchStart={() => {
        setClose(false);
      }}
    >
      <View style={{ backgroundColor: Colors.BlueDark }}>
        <HeaderScreen />
      </View>
      {loading ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={Colors.BlueDark} />
        </View>
      ) : (
        <View>
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
            <FilterData
              close={close}
              functionClose={setClose}
              functionSelected={setSelected}
              fuctionOrder={orderList}
            />
          </View>
          <View>
            <Text>{selected}</Text>

            <FlatList
              nestedScrollEnabled
              data={listData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={Item}
              style={{ width: WIDTH_SCREEN, height: HEIGHT_SCREEN * 0.45 }}
            />
            <View style={styles.viewLoadMore}>
              <Text style={styles.textNumberItem}>
                {data?.length} of {result?.totalCount}
              </Text>
              <TouchableOpacity
                style={styles.buttonLoadMore}
                onPress={() => setPage(page + 1)}
              >
                <Text style={styles.textLoadMore}>LOAD MORE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  collapsable: {
    flex: 1,
    zIndex: 100,
  },
  viewLoading: {
    flex: 1,
    justifyContent: "center",
  },
});
