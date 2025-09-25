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
export const getCategories = async () => {
  try {
    const response = await axios.get(API.categories);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const getSubCategories = async () => {
  try {
    const response = await axios.get(API.sub_categories);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const gettrusted_sections = async () => {
  try {
    const response = await axios.get(API.trusted_sections);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const gethome_vidyapeeth_centers = async () => {
  try {
    const response = await axios.get(API.home_vidyapeeth_centers);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const getresults_n_app_store = async () => {
  try {
    const response = await axios.get(API.results_n_app_store);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const getstudy_materials = async () => {
  try {
    const response = await axios.get(API.study_materials);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}

export const gettestimonials = async () => {
  try {
    const response = await axios.get(API.testimonials);
    return response;
  } catch (error) {
    console.error("Error fetching home sliders:", error);
    throw error;
  }
}
export const getheader_footer = async () => {
  try {
    const response = await axios.get(API["header_footer"]); 
    return response;
  } catch (error) {
    console.error("Error fetching footer:", error);
    throw error;
  }
};
export const getabout = async () => {
  try {
    const response = await axios.get(API.about_us); 
    return response;
  } catch (error) {
    console.error("Error fetching footer:", error);
    throw error;
  }
};
export const getprivacy_policy = async () => {
  try {
    const response = await axios.get(API.privacy_policy); 
    return response;
  } catch (error) {
    console.error("Error fetching footer:", error);
    throw error;
  }
};
export const getlogout_student = async () => {
  try {
    const response = await axios.post(API.logout_student); 
    return response;
  } catch (error) {
    console.error("Error fetching footer:", error);
    throw error;
  }
};