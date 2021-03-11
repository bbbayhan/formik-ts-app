
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

export const fetchUsersById = async (id: any) => {
  const { data } =  await axios.get("http://localhost:5000/users/" + id, {
    headers: {
      "Authorization": `${accessToken}`
    }
  })
  return data;
}

export const fetchUsersByFilter = async (filterValue: any) => {  
  const { data } =  await axios.get("http://localhost:5000/users/" , {
    headers: {
      "Authorization": `${accessToken}`
    },
  });
  return data.filter((item:any)=>item["firstName"].includes(filterValue));
}

export const deleteUser = async (id: any) =>{
    return await axios.delete("http://localhost:5000/users/" + id);
}

export const fetchCategories = async (id : any) => {
  const { data } =  await axios.get("http://localhost:5000/categories/"+id, {
    headers: {
      "Authorization": `${accessToken}`
    }
  })
  return data;
}