export const INPUTS = {
    FIRST_NAME: {
        id:"firstName",
        name:"firstName",
        type:"text",
        label:"First Name"
    },
    LAST_NAME: {
        id:"lastName",
        name:"lastName",
        type:"text",
        label:"Last Name"
    },
    EMAIL: {
        id:"email",
        name:"email",
        type:"email",
        label:"Email"
    },
    AGE: { 
        id:"age",
        name:"age",
        type:"text",
        label:"Age"
    },
    BIRTHDAY: {
        id:"birthday",
        name:"birthday",
        type:"text",
        label:"Birthday"
    },
    COMPANY_NAME: {
        id:"companyName",
        name:"companyName",
        type:"text",
        label:"Company Name"
    },
    COMPANY_YEAR:{ 
        id:"companyYear",
        name:"companyYear",
        type:"text",
        label:"Year"
    }
}

export interface Data {
    "firstName": string,
    "lastName": string,
    "email": string,
    "age": string,
    "birthday": string,
    "companyName": string,
    "companyYear": string,
    "id": string
  }