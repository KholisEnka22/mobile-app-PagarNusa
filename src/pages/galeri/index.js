import React, { Component } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View, Text, Image } from "react-native";
import Cardnama from "../assets/components/cardNama";

function Galeri(props) {
  return (
    <View style={styles.container}>
      <Cardnama style={styles.cardnama1}></Cardnama>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.latihanGabungan}>Latihan Gabungan</Text>
          <View style={styles.image1Row}>
            <ScrollView horizontal>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
            </ScrollView>
          </View>
          <Text style={styles.latihanGabungan4}>Ujian Kenaikan Tingkat</Text>
          <View style={styles.image4Row}>
            <ScrollView horizontal>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image6}
              ></Image>
            </ScrollView>
          </View>
          <Text style={styles.latihanGabungan6}>Latihan Gabungan</Text>
          <View style={styles.image7Row}>
            <ScrollView horizontal>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image8}
              ></Image>
              <Image
                source={require("../assets/images/image.jpg")}
                resizeMode="contain"
                style={styles.image9}
              ></Image>
            </ScrollView>
          </View>
        </View>
      </View>
      <Text style={styles.text}>Galeri</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293462"
  },
  cardnama1: {
    width: 346,
    height: 124,
    marginTop: 38,
    alignSelf: "center"
  },
  rect: {
    top: 0,
    width: 346,
    height: 479,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    left: 0
  },
  latihanGabungan: {
    fontFamily: "Inter-SemiBold",
    color: "#293462",
    fontSize: 12,
    marginTop: 14,
    marginLeft: 8
  },
  image1: {
    width: 111,
    height: 65
  },
  image2: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image3: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image1Row: {
    height: 65,
    width: 330,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 8,
  },
  latihanGabungan4: {
    fontFamily: "Inter-SemiBold",
    color: "#293462",
    fontSize: 12,
    marginTop: 11,
    marginLeft: 8
  },
  image4: {
    width: 111,
    height: 65
  },
  image5: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image6: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image4Row: {
    height: 65,
    width: 330,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 8,
  },
  latihanGabungan6: {
    fontFamily: "Inter-SemiBold",
    color: "#293462",
    fontSize: 12,
    marginTop: 14,
    marginLeft: 8
  },
  image7: {
    width: 111,
    height: 65
  },
  image8: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image9: {
    width: 111,
    height: 65,
    marginLeft: 6
  },
  image7Row: {
    height: 65,
    width: 330,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 8,
  },

  rectStack: {
    width: 353,
    height: 479,
    marginTop: 58,
    marginLeft: 14
  },
  text: {
    fontFamily: "Inter-SemiBold",
    color: "rgba(255,255,255,1)",
    marginTop: -505,
    marginLeft: 15
  }
});

export default Galeri;
