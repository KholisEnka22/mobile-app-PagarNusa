import React, { Component } from "react";
import { ScrollView } from "react-native";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import Cardnama from "../assets/components/cardNama";

function Datapribadi(props) {
    return (
        <View style={styles.container}>
            <Cardnama style={styles.cardnama}></Cardnama>
            <Text style={styles.settingAkun1}>Setting Akun</Text>

            <View style={styles.rect1Stack}>
                <View style={styles.rect1}>
                    <ScrollView style={{ marginBottom: 10 }}>
                        <Text style={styles.username1}>Username</Text>
                        <TextInput
                            placeholder="    123456789"
                            style={styles.textInput1}
                        ></TextInput>
                        <Text style={styles.email}>Email</Text>
                        <TextInput
                            placeholder="    user@mail.com"
                            secureTextEntry={false}
                            keyboardType="email-address"
                            style={styles.password1}
                        ></TextInput>
                        <Text style={styles.nama2}>Nama</Text>
                        <TextInput
                            placeholder="    Nama"
                            secureTextEntry={false}
                            keyboardType="default"
                            style={styles.textInput2}
                        ></TextInput>
                        <Text style={styles.kotaKelahiran}>Kota Kelahiran</Text>
                        <TextInput
                            placeholder="    Kota Kelahiran"
                            secureTextEntry={false}
                            keyboardType="default"
                            style={styles.textInput3}
                        ></TextInput>
                        <Text style={styles.tanggalLahir}>Tanggal Lahir</Text>
                        <TextInput
                            placeholder="    20 November 2000"
                            secureTextEntry={false}
                            keyboardType="default"
                            dataDetector="none"
                            style={styles.textInput4}
                        ></TextInput>
                        <Text style={styles.alamat}>Alamat</Text>
                        <TextInput
                            placeholder="    Alamat"
                            secureTextEntry={false}
                            keyboardType="default"
                            dataDetector="none"
                            style={styles.textInput5}
                        ></TextInput>
                        <Text style={styles.regional}>Regional</Text>
                        <TextInput
                            placeholder="    Kab.Pasuruan"
                            secureTextEntry={false}
                            keyboardType="default"
                            dataDetector="none"
                            style={styles.textInput6}
                        ></TextInput>
                        <Text style={styles.rayonRanting}>Rayon/Ranting</Text>
                        <TextInput
                            placeholder="    PAC.Sukorejo"
                            secureTextEntry={false}
                            keyboardType="default"
                            dataDetector="none"
                            style={styles.textInput7}
                        ></TextInput>
                        <Text style={styles.tingkatSabuk}>Tingkat Sabuk</Text>
                        <TextInput
                            placeholder="    Putih"
                            secureTextEntry={false}
                            keyboardType="default"
                            dataDetector="none"
                            style={styles.textInput8}
                        ></TextInput>
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.simpan1}>Simpan</Text>
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
    settingAkun1: {
        fontFamily: "inter-600",
        color: "rgba(255,255,255,1)",
        marginTop: 33,
        marginLeft: 15
    },
    rect1: {
        top: 0,
        width: 346,
        height: 450,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        left: 0
    },
    username1: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 19,
        marginLeft: 23
    },
    textInput1: {
        fontFamily: "inter-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "#293462",
        borderRadius: 10,
        fontSize: 12,
        letterSpacing: 0,
        borderStyle: "solid",
        marginLeft: 17
    },
    email: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 4,
        marginLeft: 23
    },
    password1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "#293462",
        borderRadius: 10,
        marginLeft: 17
    },
    nama2: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 6,
        marginLeft: 23
    },
    textInput2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    kotaKelahiran: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 8,
        marginLeft: 23
    },
    textInput3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    tanggalLahir: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 8,
        marginLeft: 23
    },
    textInput4: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    alamat: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 7,
        marginLeft: 23
    },
    textInput5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 62,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    regional: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 10,
        marginLeft: 23
    },
    textInput6: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    rayonRanting: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 10,
        marginLeft: 23
    },
    textInput7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    tingkatSabuk: {
        fontFamily: "inter-500",
        color: "#293462",
        fontSize: 12,
        marginTop: 10,
        marginLeft: 23
    },
    textInput8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 45,
        width: 312,
        borderWidth: 1,
        borderColor: "rgba(41,52,98,1)",
        borderRadius: 10,
        marginLeft: 17
    },
    button1: {
        top: 688,
        width: 110,
        height: 32,
        position: "absolute",
        backgroundColor: "#ffff",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            height: 3,
            width: 2
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 0,
        alignSelf: "center"
    },
    simpan1: {
        fontFamily: "inter-regular",
        color: "#293462",
        fontSize: 12,
        marginTop: 7,
        alignSelf: "center"
    },
    rect1Stack: {
        width: 346,
        height: 410,
        marginTop: 12,
        // marginLeft: 15
        alignSelf: "center"
    },
    loremIpsum1: {
        fontFamily: "inter-100",
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        marginTop: 90,
        alignSelf: "center"
    }
});

export default Datapribadi;
