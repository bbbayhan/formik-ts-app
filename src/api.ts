
import axios from 'axios';
const accessToken = "access-token";

export const fetchUsers = async () => {
    const { data } =  await axios.get("http://localhost:5000/users/", {
      headers: {
        "Authorization": `${accessToken}`
      }
    })
    return data;
}

export const deleteUser = async (id: any) =>{
    return await axios.delete("http://localhost:5000/users/" + id);
}