import { useNavigation } from "@react-navigation/core";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../assets/Background.png";
import BackgroundTicket from "../assets/BackgroundTicket.png";
import { ArrowLeftCircle } from "../assets/Icons";
import { Colors } from "../helpers/colors";
import { HEIGHT_SCREEN, WIDTH_SCREEN } from "../helpers/constants";

const TicketScreen = (route) => {
  const navigation = useNavigation();
  const information = route?.route?.params?.data;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.viewIconBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftCircle />
        </TouchableOpacity>
        <View style={styles.viewTicket}>
          <ImageBackground
            source={BackgroundTicket}
            resizeMode="contain"
            style={styles.imageTicket}
          >
            <View style={styles.viewData}>
              <Text style={styles.title}>MISSION NAME</Text>
              <Text style={styles.textMissionName}>
                {information.mission_name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.title}>ROCKET NAME</Text>
                  <Text style={styles.textRocket}>
                    {information.rocket.rocket_name}
                  </Text>
                </View>
                <View style={{ marginLeft: 75 }}>
                  <Text style={styles.title}>ROCKET TYPE</Text>
                  <Text style={styles.textRocket}>
                    {information.rocket.rocket_type}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Information", "Ticket Printing")}
          >
            <Text style={{ color: Colors.White }}>PRINT TICKET</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  imageTicket: {
    flex: 1,
  },
  viewIconBack: {
    marginTop: 19,
    marginLeft: 26,
  },
  button: {
    borderRadius: 16.5,
    backgroundColor: Colors.RedLight,
    paddingVertical: 6,
    paddingHorizontal: 22,
  },
  viewButton: {
    alignItems: "center",
  },
  viewData: {
    marginTop: HEIGHT_SCREEN * 0.22,
    marginBottom: HEIGHT_SCREEN * 0.4,
    marginLeft: WIDTH_SCREEN * 0.18,
    marginRight: WIDTH_SCREEN * 0.1,
    flex: 1,
    transform: [{ rotate: "90deg" }],
  },
  viewTicket: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN * 0.75,
  },
  title: {
    color: Colors.BrownLight,
    fontSize: 7,
    marginTop: 10,
  },
  textMissionName: {
    color: Colors.BrownLight,
    fontSize: 20,
    marginTop: 5,
  },
  textRocket: {
    color: Colors.BrownLight,
    fontSize: 9,
  },
});
