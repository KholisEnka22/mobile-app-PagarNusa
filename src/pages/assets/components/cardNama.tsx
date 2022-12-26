import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Cardnama(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.image2Row}>
          <Image
            source={require("../images/Mark.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <View style={styles.muhammadSamsul2Column}>
            <Text style={styles.muhammadSamsul2}>Muhammad Samsul</Text>
            <Text style={styles.pesilat1}>Pesilat</Text>
            <View style={styles.rect2}>
              <View style={styles.rayonRow}>
                <Text style={styles.rayon}>Rayon</Text>
                <Text style={styles.garis}>|</Text>
                <Text style={styles.pacSukorejo}>PAC.Sukorejo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 346,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25
  },
  image2: {
    width: 74,
    height: 74,
    borderRadius: 10
  },
  muhammadSamsul2: {
    fontFamily: "Inter-SemiBold",
    color: "#293462",
    fontSize: 17
  },
  pesilat1: {
    fontFamily: "Inter-Regular",
    color: "rgba(41,52,98,1)",
    marginTop: 9
  },
  rect2: {
    width: 184,
    height: 26,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 0.2,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#cccccc",
    flexDirection: "row",
    marginTop: 13
  },
  rayon: {
    fontFamily: "Inter-Regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13
  },
  garis: {
    fontFamily: "Inter-Regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13,
    marginLeft: 28
  },
  pacSukorejo: {
    fontFamily: "Inter-Regular",
    color: "rgba(41,52,98,1)",
    fontSize: 13,
    marginLeft: 9
  },
  rayonRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 12,
    marginTop: 4
  },
  muhammadSamsul2Column: {
    width: 184,
    marginLeft: 10,
    marginTop: 11
  },
  image2Row: {
    height: 96,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 9,
    marginRight: 69
  }
});

export default Cardnama;
