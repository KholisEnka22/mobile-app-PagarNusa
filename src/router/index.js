import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native";
import { Splash } from "../pages";
import { OpsiLogin } from "../pages";
import { FormLoginPesilat } from "../pages";
import { Home } from "../pages"
import { EventPages } from "../pages";
import { Tagihan } from "../pages"
import { Struktur } from "../pages";
import { Galeri } from "../pages";
import { Profil } from "../pages"
import { Informasiakun } from "../pages";
import { Datapribadi } from "../pages";
import { Prestasi } from "../pages";
import MaterialHeader from "../pages/assets/components/header";

const Stack = createNativeStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        resDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    }
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="OpsiLogin" component={OpsiLogin} options={{ headerShown: false }} />
            <Stack.Screen name="FormLoginPesilat" component={FormLoginPesilat} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="EventPages" component={EventPages} />
            <Stack.Screen name="Tagihan" component={Tagihan} options={{
                title: 'Tagihan',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Struktur" component={Struktur} options={{
                title: 'Struktur',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Galeri" component={Galeri} options={{
                title: 'Galeri',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Profil" component={Profil} options={{
                title: 'Profil',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Informasiakun" component={Informasiakun} options={{
                title: 'Informasi Akun',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Datapribadi" component={Datapribadi} options={{
                title: 'Data Pribadi',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
            <Stack.Screen name="Prestasi" component={Prestasi} options={{
                title: 'Prestasi',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#293462',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Stack.Navigator>
    )
}

export default Router;