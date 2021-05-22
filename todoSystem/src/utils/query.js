//
import {del, get, post, put} from "./http";

export default {
  postLogin:params=>post("/user/login", params),
  postRegister:params=>post("/register", params),
  postLoginOut:params=>post("/loginout", params),
  getList :params=>get("/todo/get_share_todo",params),
  getTodoList :params=>get("/todo/current",params),
  postTodo :params=>post("/todo/new_todo",params),
  finishTodxo :params=>put("/todo",params),
  getUserInfo :params=>get("/user/userinfo",params),
  sharedMyTodo:params=>put("/todo/share_todo",params),
  delMyShare:params=>del("/todo/del_share_todo",params),
  start:params=>put("/todo/start",params),
  end:params=>put("/todo/end",params),
}
