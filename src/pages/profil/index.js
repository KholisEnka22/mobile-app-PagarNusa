import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Cardnama from "../assets/components/cardNama";
import Icon from "react-native-vector-icons/FontAwesome5";


function Profil(props) {
    return (
        <View style={styles.container}>
            <Cardnama style={styles.cardnama}></Cardnama>
            <View style={styles.rect}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Informasiakun")}>
                    <View style={styles.iconRow}>
                        <Icon name="user-circle" style={styles.icon} />
                        <Text style={styles.informasiAkun}>Informasi Akun</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Datapribadi")}>
                    <View style={styles.icon2Row}>
                        <Icon name="address-card" style={styles.icon2} />
                        <Text style={styles.dataPribadi}>Data Pribadi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Prestasi")}>
                    <View style={styles.icon3Row}>
                        <Icon name="award" style={styles.icon3} />
                        <Text style={styles.prestasi}>Prestasi</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Profil</Text>
            <TouchableOpacity style={styles.button1}>
                <View style={styles.icon4Filler}>
                    <Icon name="sign-out-alt" style={styles.icon4} />
                    <Text style={styles.logout}>Logout</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.loremIpsum}>Pagar Nusa Satria Agung 1.0.0</Text>
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
        height: 164,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 58,
        alignSelf: "center"
    },
    icon: {
        color: "#293462",
        fontSize: 30,
        height: 33,
        width: 29
    },
    informasiAkun: {
        fontFamily: "inter-600",
        color: "#293462",
        fontSize: 12,
        marginLeft: 9,
        marginTop: 9
    },
    iconRow: {
        height: 33,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 26,
        marginRight: 200
    },
    icon2: {
        color: "#293462",
        fontSize: 26,
        height: 33,
        width: 29
    },
    dataPribadi: {
        fontFamily: "inter-600",
        color: "#293462",
        fontSize: 12,
        marginLeft: 9,
        marginTop: 7
    },
    icon2Row: {
        height: 25,
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 26,
        marginRight: 215
    },
    icon3: {
        color: "#293462",
        fontSize: 26,
        height: 33,
        width: 29
    },
    prestasi: {
        fontFamily: "inter-600",
        color: "#293462",
        fontSize: 12,
        marginLeft: 5,
        marginTop: 9
    },
    icon3Row: {
        height: 28,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 31,
        marginRight: 240
    },
    text: {
        fontFamily: "inter-600",
        color: "rgba(255,255,255,1)",
        marginTop: -190,
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
    loremIpsum: {
        fontFamily: "inter-100",
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        marginTop: 11,
        alignSelf: "center"
    }
});

export default Profil;
