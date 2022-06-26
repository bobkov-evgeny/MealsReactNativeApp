import React from "react";
import styled from "styled-components/native";
import { Card, Title } from "react-native-paper";

interface IResaurantData {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: string;
}
interface IRestaurantInfoProps {
    restaurant?: IResaurantData;
}

const RestaurantCard = styled(Card)`
    padding: 16px;
`;

export const RestaurantInfoCard: React.FC<IRestaurantInfoProps> = ({
    restaurant = {},
}) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
        ],
        address = "100 some address",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <RestaurantCard>
            <Card.Cover source={{ uri: photos[0] }} />

            <Title>{name}</Title>
        </RestaurantCard>
    );
};
