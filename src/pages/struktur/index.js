import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Cardnama from "../assets/components/cardNama";

function Struktur(props) {
    return (
        <View style={styles.container}>
            <Cardnama style={styles.cardnama}></Cardnama>
            <View style={styles.rect}>
                <Text style={styles.titleUser}>Pendiri Pagar Nusa Satria Agung</Text>
                <View style={styles.image3Row}>
                    <Image
                        source={require("../assets/images/Mark.png")}
                        resizeMode="contain"
                        style={styles.image3}
                    ></Image>
                    <Image
                        source={require("../assets/images/Mark.png")}
                        resizeMode="contain"
                        style={styles.image}
                    ></Image>
                    <Image
                        source={require("../assets/images/Mark.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    ></Image>
                </View>
                <View style={styles.nama2Row}>
                    <Text style={styles.nama2}>Nama</Text>
                    <Text style={styles.nama3}>Nama</Text>
                    <Text style={styles.nama4}>Nama</Text>
                </View>
                <Text style={styles.ketuaUmum}>Ketua Umum</Text>
                <Image
                    source={require("../assets/images/Mark.png")}
                    resizeMode="contain"
                    style={styles.image4}
                ></Image>
                <Text style={styles.nama5}>Nama</Text>
                <Text style={styles.wakilKetua}>Wakil Ketua</Text>
                <Image
                    source={require("../assets/images/Mark.png")}
                    resizeMode="contain"
                    style={styles.image5}
                ></Image>
                <Text style={styles.nama6}>Nama</Text>
                <View style={styles.sekretarisRow}>
                    <Text style={styles.sekretaris}>Sekretaris</Text>
                    <Text style={styles.bendahara}>Bendahara</Text>
                </View>
                <View style={styles.image6Row}>
                    <Image
                        source={require("../assets/images/Mark.png")}
                        resizeMode="contain"
                        style={styles.image6}
                    ></Image>
                    <Image
                        source={require("../assets/images/Mark.png")}
                        resizeMode="contain"
                        style={styles.image7}
                    ></Image>
                </View>
                <View style={styles.nama7Row}>
                    <Text style={styles.nama7}>Nama</Text>
                    <Text style={styles.nama8}>Nama</Text>
                </View>
            </View>
            <Text style={styles.textheader}>Struktur Perguruan Satria Agung</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#293462"
    },
    cardnama: {
        width: 346,
        height: 124,
        marginTop: 38,
        alignSelf: "center"
    },
    rect: {
        width: 346,
        height: 482,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 55,
        marginLeft: 15
    },
    titleUser: {
        fontFamily: "inter-600",
        color: "#293462",
        marginTop: 17,
        marginLeft: 63
    },
    image3: {
        width: 50,
        height: 50
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 46
    },
    image2: {
        width: 50,
        height: 50,
        marginLeft: 46
    },
    image3Row: {
        height: 50,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 52,
        marginRight: 52
    },
    nama2: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12
    },
    nama3: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginLeft: 63
    },
    nama4: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginLeft: 63
    },
    nama2Row: {
        height: 15,
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 60,
        marginRight: 61
    },
    ketuaUmum: {
        fontFamily: "inter-600",
        color: "#293462",
        marginTop: 10,
        marginLeft: 129
    },
    image4: {
        width: 50,
        height: 50,
        marginTop: 9,
        marginLeft: 148
    },
    nama5: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 10,
        marginLeft: 156
    },
    wakilKetua: {
        fontFamily: "inter-600",
        color: "#293462",
        marginTop: 13,
        marginLeft: 133
    },
    image5: {
        width: 50,
        height: 50,
        marginTop: 12,
        marginLeft: 148
    },
    nama6: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 10,
        marginLeft: 156
    },
    sekretaris: {
        fontFamily: "inter-600",
        color: "#293462"
    },
    bendahara: {
        fontFamily: "inter-600",
        color: "#293462",
        marginLeft: 100
    },
    sekretarisRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 53,
        marginRight: 51
    },
    image6: {
        width: 50,
        height: 50
    },
    image7: {
        width: 50,
        height: 50,
        marginLeft: 121
    },
    image6Row: {
        height: 50,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 62,
        marginRight: 63
    },
    nama7: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12
    },
    nama8: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginLeft: 138
    },
    nama7Row: {
        height: 15,
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 71,
        marginRight: 71
    },
    textheader: {
        fontFamily: "inter-600",
        color: "rgba(255,255,255,1)",
        marginTop: -505,
        marginLeft: 15
    }
});

export default Struktur;
