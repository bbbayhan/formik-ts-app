
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

export const fetchUsersById = async (url:any) => {
  const { data } =  await axios.get("http://localhost:5000"+url, {
    headers: {
      "Authorization": `${accessToken}`
    }
  })
  return data;
}

export const fetchUsersByFilter = async (param: any) => {
  if(param){  
    const { data } =  await axios.get("http://localhost:5000/users/" , {
      headers: {
        "Authorization": `${accessToken}`
      },
      params: {
        "firstName": param
      }
    });
  return data;
  }
}

export const deleteUser = async (id: any) =>{
    return await axios.delete("http://localhost:5000/users/" + id);
}

export const updateUser = async (url: any, newArray: any) => {
  return await axios.patch("http://localhost:5000" + url,
        newArray, {
          headers: {
            "Test-Header": "test"
          }
        }
    ); 
}

export const postUserData = async (values: any) => {
  return await axios.post('http://localhost:5000/users/', values, {
    headers: {
      "Authorization": `${accessToken}`
    }
  });
}

export const fetchCategories = async (id : any) => {
  const { data } =  await axios.get("http://localhost:5000/categories/"+id, {
    headers: {
      "Authorization": `${accessToken}`
    }
  })
  return data;
}