import {post,get} from "./http"

function register(userName,password,userPhone){
  return  post("/user/register",{
    userName,
    password,
    userPhone
  })
}
function login(userPhone,password){
  return post("/user/login",{
    userPhone,
    password
  })
}

function getMySong(){
  return post("/main/current")
}

function getPublicUser(){
  return post("/main/getPublicU")
}

function PublicUserSong(id){
  return post("/main/PublicUserSong",{
    id
  })
}

function getStatus(id){
  return post("/user/getStatus")
}


function getProfile(id){
  return post("/user/getProfile")
}

function changeStatus(){
  return post("/user/changeStatus")
}

export {
  register,
  login,
  getMySong,
  getPublicUser,
  PublicUserSong,
  getStatus,
  getProfile,
  changeStatus
}

