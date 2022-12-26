import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Cardnama from "../assets/components/cardNama";
import Icon from "react-native-vector-icons/FontAwesome5";

function Prestasi(props) {
    return (
        <View style={styles.container}>
            <Cardnama style={styles.cardnama}></Cardnama>
            <View style={styles.rect1}>
                <View style={styles.icon1Row}>
                    <Icon name="award" style={styles.icon1} />
                    <View style={styles.juara1Column}>
                        <Text style={styles.juara1}>Juara 1</Text>
                        <View style={styles.juara12Stack}>
                            <Text style={styles.juara12}>Turnament Panda Cup II</Text>
                            <Text style={styles.tahun2019}>Tahun 2019</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rect2}></View>
                <View style={styles.icon2Row}>
                    <Icon name="award" style={styles.icon2} />
                    <View style={styles.juara2Column}>
                        <Text style={styles.juara2}>Juara 2</Text>
                        <View style={styles.textStack}>
                            <Text style={styles.text}>Turnament Bupati Cup VI</Text>
                            <Text style={styles.tahun2020}>Tahun 2020</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Text style={styles.daftarPrestasi}>Daftar Prestasi</Text>
            <TouchableOpacity style={styles.button1}>
                <View style={styles.icon4Filler}>
                    <Icon name="sign-out-alt" style={styles.icon4} />
                    <Text style={styles.logout}>Logout</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.loremIpsum1}>Pagar Nusa Satria Agung 1.0.0</Text>
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
        marginTop: 39,
        alignSelf: "center"
    },
    rect1: {
        width: 346,
        height: 218,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 57,
        alignSelf: "center"
    },
    icon1: {
        color: "#293462",
        fontSize: 30,
        height: 33,
        width: 24,
        marginTop: 6
    },
    juara1: {
        fontFamily: "inter-600",
        color: "#293462",
        fontSize: 14
    },
    juara12: {
        top: 0,
        position: "absolute",
        fontFamily: "inter-500",
        color: "#293462",
        left: 0,
        fontSize: 12
    },
    tahun2019: {
        top: 12,
        position: "absolute",
        fontFamily: "inter-500",
        color: "#293462",
        left: 1,
        fontSize: 10
    },
    juara12Stack: {
        width: 137,
        height: 24
    },
    juara1Column: {
        width: 137,
        marginLeft: 5
    },
    icon1Row: {
        height: 41,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 21,
        marginRight: 159
    },
    rect2: {
        width: 295,
        height: 2,
        borderWidth: 1,
        borderColor: "#293462",
        borderStyle: "dashed",
        marginTop: 8,
        marginLeft: 20
    },
    icon2: {
        color: "#293462",
        fontSize: 30,
        height: 33,
        width: 24,
        marginTop: 6
    },
    juara2: {
        fontFamily: "inter-600",
        color: "#293462",
        fontSize: 14
    },
    text: {
        top: 0,
        position: "absolute",
        fontFamily: "inter-500",
        color: "#293462",
        left: 0,
        fontSize: 12
    },
    tahun2020: {
        top: 12,
        position: "absolute",
        fontFamily: "inter-500",
        color: "#293462",
        left: 1,
        fontSize: 10
    },
    textStack: {
        width: 143,
        height: 24
    },
    juara2Column: {
        width: 143,
        marginLeft: 5
    },
    icon2Row: {
        height: 41,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 21,
        marginRight: 153
    },
    daftarPrestasi: {
        fontFamily: "inter-600",
        color: "rgba(255,255,255,1)",
        marginTop: -244,
        marginLeft: 15
    },
    button1: {
        width: 194,
        height: 47,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 433,
        alignSelf: "center"
    },
    icon4: {
        color: "#293462",
        fontSize: 25,
        height: 25,
        width: 25,
        marginTop: 9
    },
    logout: {
        fontFamily: "inter-600",
        color: "#293462",
        marginTop: 13,
        marginLeft: 9
    },
    icon4Filler: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    loremIpsum1: {
        fontFamily: "inter-100",
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        marginTop: 11,
        alignSelf: "center"
    }
});

export default Prestasi;
