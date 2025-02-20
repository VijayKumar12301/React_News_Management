import axios from "axios";

const url = "http://localhost:4000/user";

// export default class UserService {

export const addUser = (newUser) => {
    return axios.post(url, newUser);
}

export const validuser=(userName, password)=>{
    return axios.get(`${url}/${userName}/${password}`);
}



// Function to fetch user details based on the username
export const getUser = async (userName) => {
  try {
    const response = await axios.get(`${url}/${userName}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data: " + error.message);
  }
};
