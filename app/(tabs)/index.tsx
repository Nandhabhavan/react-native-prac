import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import { SearchBar } from "react-native-screens";

export default function Index() {
  return (
    <ImageBackground
      source={require("../../assets/images/pexels-eva-bronzini-7605676.jpg")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/Netflix_Logo_RGB.png")}
          style={styles.logo}
        />
        <View> 
          <SearchBar />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    // justifyContent: "center",
    // alignItems: "center",
    // width: '100%',
    minHeight: '100%',
    paddingBottom: 10,
  },
  logo: {
    width: 200,
    height: 80,
  },
});
