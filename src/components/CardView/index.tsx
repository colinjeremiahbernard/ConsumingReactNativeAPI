import { useEffect, useState } from "react";
import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./style";
import Divider from "../Divider";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { fetchGetCarData } from "../../api/getCars"; 
import { handleNextItem, handlePreviousItem } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = fetchGetCarData(1); 
      setCarData(data);
    };
    loadData();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image
        style={styles.imageLogo}
        source={require("../../../assets/logoLamborghini.png")}
      />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.model}</Text>
      <Text style={styles.priceLabel}>Year: {carData?.year}</Text>
      <Text style={styles.priceLabel}>Price: ${carData?.price}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{ uri: carData?.image }} 
      resizeMode="cover"
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button 
         title="<" 
         color="blue" 
         onPress={() => handlePreviousItem(carData, setCarData)} />
      <Text style={styles.priceLabel}>{carData?.price}</Text>
      <Button 
         title=">" 
         color="blue" 
         onPress={() => handleNextItem(carData, setCarData)} />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
