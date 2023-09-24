import axios from "axios";
axios.defaults.headers.common ["x-api-key"] =
 "live_dwHc5vcyRLaKan03R1TlsEdKWlY4kezQrnwMP8w9ir8OhMydXmu8i1lJbZRzUM8A";

export async function fetchBreeds() {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function fetchCatByBreed(breedId) {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }