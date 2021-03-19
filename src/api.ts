
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

export const fetchUsersById = async (id:string) => {
  const { data } =  await axios.get("http://localhost:5000/users/"+id, {
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
        firstName: param.firstName,
        lastName: param.lastName,
        email: param.email,
        age: param.age,
        birthday: param.birthday,
        companyName: param.companyName,
        companyYear: param.companyYear,
      }
    });
  return data;
  }
}

export const deleteUser = async (id: string) =>{
    return await axios.delete("http://localhost:5000/users/" + id);
}

export const updateUser = async (id: string, newArray: any) => {
  return await axios.patch("http://localhost:5000/users/" + id,
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

export const fetchCategories = async (id : string) => {
  const { data } =  await axios.get("http://localhost:5000/categories/"+id, {
    headers: {
      "Authorization": `${accessToken}`
    }
  })
  return data;
}