import axios from "axios";
import { API } from "./endpoin";

export const getHomeSliders = async () => {
  try {
    const response = await axios.get(API.homesliders);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const getCourses = async () => {
  try {
    const response = await axios.get(API.courses);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}