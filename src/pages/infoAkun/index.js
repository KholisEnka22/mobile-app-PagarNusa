import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import Cardnama from "../assets/components/cardNama";
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome5";

function Informasiakun(props) {
    return (
        <View style={styles.container}>
            <Cardnama style={styles.cardnama}></Cardnama>
            <View style={styles.rect1}>
                <Text style={styles.username}>Username</Text>
                <TextInput
                    placeholder="    123456789"
                    style={styles.textInput}
                ></TextInput>
                <Text style={styles.password2}>Password</Text>
                <TextInput
                    placeholder="    Password"
                    secureTextEntry={true}
                    style={styles.password}
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.simpan}>Simpan</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.settingAkun}>Setting Akun</Text>
            <TouchableOpacity style={styles.button1}>
                <View style={styles.icon1Row}>
                    <Icon name="sign-out-alt" style={styles.icon1} />
                    <Text style={styles.logout1}>Logout</Text>
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
        marginTop: 37,
        alignSelf: "center"
    },
    rect1: {
        width: 346,
        height: 218,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginTop: 59,
        marginLeft: 15
    },
    username: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 22,
        marginLeft: 23
    },
    textInput: {
        fontFamily: "inter-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        fontSize: 12,
        letterSpacing: 0,
        borderStyle: "solid",
        marginLeft: 17
    },
    password2: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 14,
        marginLeft: 23
    },
    password: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        marginLeft: 17
    },
    button: {
        width: 110,
        height: 40,
        backgroundColor: "#293462",
        borderRadius: 10,
        marginTop: 20,
        alignSelf: "center"
    },
    simpan: {
        fontFamily: "inter-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12,
        marginTop: 12,
        alignSelf: "center"
    },
    settingAkun: {
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
    icon1: {
        color: "#293462",
        fontSize: 25,
        height: 25,
        width: 25,
        marginTop: 9
    },
    logout1: {
        fontFamily: "inter-600",
        color: "#293462",
        marginTop: 13,
        marginLeft: 9
    },
    icon1Row: {
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

export default Informasiakun;
