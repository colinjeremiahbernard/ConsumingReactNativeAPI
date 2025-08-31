import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props";


export const loadCarData = async(id:number, setCarData: any) => {
   try{
     const response = await fetchGetCarData(id);
     setCarData(response);
   }catch(error) {
       console.log('Erro ao buscar da api', error);
   }
   
}

export const handlePreviousItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null> >) => {

  let response = null;
   try{
     if(carData && carData?.id > 1) {
        response = await fetchGetCarData(carData.id - 1)
      }
        if(response) {
       setCarData(response);
     }
    
     
   }catch(error) {
    console.log('error ao chamar a api', error);
    setCarData(null);
   }
}

export const handleNextItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null> >) => {

  let response = null;
   try{
     if(carData && carData?.id < 10) {
        response = await fetchGetCarData(carData.id + 1)
      }
        if(response) {
       setCarData(response);
     }
    
     
   }catch(error) {
    console.log('error ao chamar a api', error);
    setCarData(null);
   }
}

