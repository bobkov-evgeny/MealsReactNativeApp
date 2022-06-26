import React from "react";
import { Text } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

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

export const RestaurantInfo: React.FC<IRestaurantInfoProps> = ({
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
        <Card style={{ padding: 16 }}>
            <Card.Cover source={{ uri: photos[0] }} />

            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{address}</Paragraph>
            </Card.Content>
        </Card>
    );
};
