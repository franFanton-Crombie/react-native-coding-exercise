import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
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
  const [filterSelected, setFilterSelected] = useState("mission_name");
  const [orderSelected, setOrderSelected] = useState("asc");
  const [search, setSearch] = useState("");
  const [find, setFind] = useState("");

  const { data, result, loading } = useLaunchesPastResult(
    page,
    filterSelected,
    orderSelected,
    find
  );
  const [listData, setListData] = useState([]);
  const [idSelected, setIdSelected] = useState("");
  const [close, setClose] = useState(false);
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
            <View style={styles.buttonSearchFlight}>
              <View style={styles.viewSmallRocket}>
                <SmallRocket />
              </View>
              <View style={styles.viewTextSearchFlight}>
                <TextInput
                  placeholder="Search for flights"
                  placeholderTextColor={Colors.BrownLight}
                  style={styles.textSearchFlight}
                  onChangeText={(text) => setSearch(text)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonSearch}
              onPress={() => setFind(search)}
            >
              <Text style={styles.textSearch}>SEARCH</Text>
            </TouchableOpacity>
          </View>
          <View style={{ zIndex: 100 }}>
            <FilterData
              close={close}
              titleFilter={filterSelected}
              orderFilter={orderSelected}
              functionClose={setClose}
              setFilterSelected={setFilterSelected}
              setOrderSelected={setOrderSelected}
            />
          </View>
          <View>
            <FlatList
              nestedScrollEnabled
              data={listData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={Item}
              style={styles.flatList}
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
    width: WIDTH_SCREEN * 0.58,
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
  viewLoading: {
    flex: 1,
    justifyContent: "center",
  },
  flatList: { width: WIDTH_SCREEN, height: HEIGHT_SCREEN * 0.45 },
});
