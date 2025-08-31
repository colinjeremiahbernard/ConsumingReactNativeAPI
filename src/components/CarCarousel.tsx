import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import lamborghiniData from '../api/data/lamborghini.json'; 

const CarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cars = lamborghiniData;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const currentCar = cars[currentIndex];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentCar.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.model}>{currentCar.model}</Text>
      <Text style={styles.price}>${currentCar.price.toLocaleString()}</Text>

      <View style={styles.nav}>
        <TouchableOpacity onPress={handlePrev}>
          <Text style={styles.arrow}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    padding: 20 
},
  image: { 
    width: 300, 
    height: 200, 
    borderRadius: 10 
},
  model: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 10 
},
  price: { 
    fontSize: 16, 
    color: '#555' 
},
  nav: { 
    flexDirection: 'row', 
    marginTop: 20 
},
  arrow: { 
    fontSize: 30, 
    marginHorizontal: 20 
},
});

export default CarCarousel;

