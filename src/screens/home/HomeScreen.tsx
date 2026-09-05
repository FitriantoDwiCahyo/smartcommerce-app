import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/fonts";
import ProductCard from "../../components/cards/ProductCard";
import AppSafeView from "../../components/views/AppSafeView";
import AppText from "../../components/texts/AppText";
import { products } from "../../data/products";


const HomeScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <AppText style={styles.titleText}> 
        Products
      </AppText>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            title={`Product ${item.title}`}
            price={item.price}
            imageURL={item.imageURL}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(10),
          columnGap: s(10),
        }}
        contentContainerStyle={{
          paddingVertical: vs(10),
        }}
        showsVerticalScrollIndicator={false}
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    paddingHorizontal: s(5)
  },
  titleText: {
    fontFamily: AppFonts.bold,
    fontSize: s(24),
  }
});
