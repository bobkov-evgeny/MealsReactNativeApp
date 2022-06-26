import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { RestaurantInfo } from "../components/RestaurantInfo";

export const RestaurantsScreen = () => {
    const [searhedValue, setSearchedValue] = useState("");

    return (
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.searchBarContainer}>
                <Searchbar
                    placeholder="Search"
                    value={searhedValue}
                    onChangeText={setSearchedValue}
                />
            </View>

            <View style={styles.restaurantsList}>
                <RestaurantInfo />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    searchBarContainer: {
        padding: 16,
    },
    restaurantsList: {
        flex: 1,
        padding: 16,
    },
});
