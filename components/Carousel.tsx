import * as React from "react";
import { useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Dots from "react-native-dots-pagination";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";

export const CarouselWithDots = () => {
    const images = [
        {
            id: "1",
            src: require("@/assets/slides/img1.jpg"),
            text: "Page 1",
        },
        {
            id: "2",
            src: require("@/assets/slides/img2.jpg"),
            text: "Page 2",
        },
        {
            id: "3",
            src: require("@/assets/slides/img3.jpg"),
            text: "Page 3",
        },
        {
            id: "4",
            src: require("@/assets/slides/img4.jpg"),
            text: "Page 4",
        },
        {
            id: "5",
            src: require("@/assets/slides/img5.jpg"),
            text: "Page 5",
        },
        {
            id: "6",
            src: require("@/assets/slides/img6.jpg"),
            text: "Page 6",
        },
        {
            id: "7",
            src: require("@/assets/slides/img7.jpg"),
            text: "Page 7",
        },
    ];

    const carouselRef = useRef(null);
    const [index, setIndex] = useState(0);
    const { width } = Dimensions.get("window");

    const numberOfPages = images.length;

    const handleIndexChange = (newIndex: number) => {
        setIndex(newIndex);
    };

    const renderItem = ({ item }: { item: any }) => {
        return (
            <View key={item.id} style={styles.itemContainer}>
                <Image
                    source={item.src}
                    contentFit="contain"
                    style={{
                        width: "100%",
                        height: "90%",
                    }}
                />
                <ThemedText>{item.text}</ThemedText>
            </View>
        );
    };

    return (
        <View id="carousel-component">
            <Carousel
                ref={carouselRef}
                autoPlay={true}
                autoPlayInterval={3000}
                loop={true}
                maxScrollDistancePerSwipe={width}
                minScrollDistancePerSwipe={1}
                width={width}
                height={300}
                snapEnabled={true}
                pagingEnabled={true}
                data={images}
                style={{ width: "100%" }}
                renderItem={renderItem}
                scrollAnimationDuration={1000}
                onSnapToItem={handleIndexChange}
                onProgressChange={(_, absoluteProgress) => {
                    setIndex(Math.round(absoluteProgress));
                }}
            />
            <Dots
                length={numberOfPages}
                active={index}
                passiveColor="#E8E8E8"
                activeColor="#025999"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        backgroundColor: "#e0e0e0",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});
