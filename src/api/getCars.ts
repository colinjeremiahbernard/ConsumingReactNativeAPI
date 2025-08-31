import carData from './data/lamborghini.json';
import { CarModel } from "../components/CardView/props";



// Fetch a single car by ID
export const fetchGetCarData = (id: number): CarModel | null => {
  return carData.find((c: CarModel) => c.id === id) || null;
};

// Fetch all cars
export const fetchAllCars = (): CarModel[] => {
  return carData;
};

