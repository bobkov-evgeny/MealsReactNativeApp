import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}`}px;
`;
const SearchBarContainer = styled.View`
    padding: 16px;
`;
const RestaurantsListContainer = styled.View`
    flex: 1;
    padding: 16px;
`;

export const RestaurantsScreen = () => {
    const [searhedValue, setSearchedValue] = useState("");

    return (
        <SafeArea>
            <SearchBarContainer>
                <Searchbar
                    placeholder="Search"
                    value={searhedValue}
                    onChangeText={setSearchedValue}
                />
            </SearchBarContainer>

            <RestaurantsListContainer>
                <RestaurantInfoCard />
            </RestaurantsListContainer>
        </SafeArea>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },

    restaurantsList: {
        flex: 1,
        padding: 16,
    },
});
