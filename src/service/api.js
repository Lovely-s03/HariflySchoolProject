import axios from "axios";
import { API } from "./endpoin";

const BASE_URL = "https://finalpw.harifly.in/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// 🔒 Attach token automatically to every request
api.interceptors.request.use((config) => {
  // Check both localStorage and sessionStorage for token
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    // Check if token already has Bearer prefix
    if (token.startsWith("Bearer ")) {
      config.headers.Authorization = token;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// ✅ Generalized GET helper
const fetchData = async (endpoint, errorMsg) => {
  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    console.error(errorMsg, error);
    throw error;
  }
};

// ✅ API Functions
export const getHomeSliders = () =>
  fetchData(API.homesliders, "Error fetching home sliders");

export const getCourses = () =>
  fetchData(API.courses, "Error fetching courses");

export const getCategories = () =>
  fetchData(API.categories, "Error fetching categories");

export const getSubCategories = () =>
  fetchData(API.sub_categories, "Error fetching sub categories");

export const gettrusted_sections = () =>
  fetchData(API.trusted_sections, "Error fetching trusted sections");

export const gethome_vidyapeeth_centers = () =>
  fetchData(API.home_vidyapeeth_centers, "Error fetching vidyapeeth centers");

export const getresults_n_app_store = () =>
  fetchData(API.results_n_app_store, "Error fetching results & app store");

export const getstudy_materials = () =>
  fetchData(API.study_materials, "Error fetching study materials");

export const gettestimonials = () =>
  fetchData(API.testimonials, "Error fetching testimonials");

export const getheader_footer = () =>
  fetchData(API.header_footer, "Error fetching header/footer");

export const getabout = () =>
  fetchData(API.about_us, "Error fetching about us");

export const getprivacy_policy = () =>
  fetchData(API.privacy_policy, "Error fetching privacy policy");

// 🚪 Logout (POST request)
export const logoutStudent = async () => {
  try {
    const response = await api.post(API.logout_student);
    // Clear stored tokens and user data
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    return response;
  } catch (error) {
    console.error("Error logging out student:", error);
    // Clear tokens even if API call fails
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    throw error;
  }
};

// Legacy function for backward compatibility
export const getlogout_student = async () => {
  try {
    const response = await api.post(API.logout_student);
    return response;
  } catch (error) {
    console.error("Error logging out student:", error);
    throw error;
  }
};

// 🔐 Authentication API Functions
export const sendOtp = async (mobile) => {
  try {
    const response = await api.post(API.send_otp, { mobile });
    return response;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const loginStudent = async (mobile, otp) => {
  try {
    const response = await api.post(API.login_student, { mobile, otp });
    return response;
  } catch (error) {
    console.error("Error logging in student:", error);
    throw error;
  }
};

// ✅ Profile API Functions - Updated to use proper endpoints
export const getStudentProfile = async () => {
  try {
    const response = await api.get(API.student_profile);
    return response;
  } catch (error) {
    console.error("Error fetching student profile:", error);
    throw error;
  }
};

export const updateStudentProfile = async (profileData) => {
  try {
    // 🔍 Debugging: log payload before sending
    if (profileData instanceof FormData) {
      // Convert FormData to plain object for logging
      const debugPayload = {};
      for (let [key, value] of profileData.entries()) {
        debugPayload[key] =
          value instanceof File ? `File: ${value.name}` : value;
      }
      console.log("Payload being sent to API:", debugPayload);
    } else {
      console.log("Payload being sent to API:", profileData);
    }

    const response = await api.put(API.student_profile, profileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.error("Error updating student profile:", error);
    throw error;
  }
};

// Alternative profile endpoint (for image uploads using /profile endpoint)
export const updateProfile = async (profileData) => {
  try {
    const response = await api.post(API.profile, profileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

// Legacy functions for backward compatibility
export const student_profile = async (token) => {
  try {
    const response = await api.get(API.student_profile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching student profile:", error);
    throw error;
  }
};

export const form_profile = async (token, profileData) => {
  try {
    const response = await api.put(API.student_profile, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error updating student profile:", error);
    throw error;
  }
};

export default api;