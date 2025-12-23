import { use } from "react";

export const getUserData = ()=>{
    return JSON.parse(localStorage.getItem("users"))||[];
};

export const saveUserData =(newUser)=>{
  const users = getUserData();
  users.push(newUser);
  localStorage.setItem("users",JSON.stringify(users));
};


export const authenticateUser = (email, password)=>{
    const users = getUserData();
    const user = users.find((user)=> user.email === email && user.password === password);
    if(user){
        localStorage.setItem("LoggedInUser",JSON.stringify(user));
    }
    return user;
  
}
export const getLoggedInUser = ()=>{
    let loginUser =  JSON.parse(localStorage.getItem("LoggedInUser"));
    return loginUser;
}
export const logoutUser = ()=>{
    localStorage.removeItem("LoggedInUser");
}