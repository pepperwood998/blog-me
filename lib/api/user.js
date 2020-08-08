import { SERVICE_BASE_URL } from "../utils/constant";
import axios from "axios";

const userUri = `${SERVICE_BASE_URL}/users`;
const profileUri = `${SERVICE_BASE_URL}/profile`;

const register = async (username, email, password) => {
  try {
    const response = await axios.post(
      userUri,
      JSON.stringify({ user: { username, email, password } }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response;
  } catch (error) {
    let { message } = error.response.data;
    if (Array.isArray(message)) {
      // do something with the error message array
      message = message[0];
    }
    return { error: { message } };
  }
};

export default {
  register
};
