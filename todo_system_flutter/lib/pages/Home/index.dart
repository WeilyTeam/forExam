import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:todo_system_flutter/widget/todoContainer.dart';

class TodoModel {
  TodoModel(this.id, this.content, this.complete);

  int id;
  String content;
  RxBool complete = false.obs;
}

class HomeControl extends GetxController {
  RxList<TodoModel> todoList = [TodoModel(1, "content", false.obs)].obs;

  addOne() {
    print("Test");
    todoList.add(TodoModel(todoList.length, "content", false.obs));
    print(todoList);
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final HomeControl _todoList = Get.put(HomeControl());
    return Scaffold(
      body: Padding(
          padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top),
          child: Container(
            alignment: Alignment.topCenter,
            width: MediaQuery.of(context).size.width,
            child: Obx(
              () => Column(
                children: [
                  TodoContainer(todoList: _todoList.todoList.value),
                  TextButton(
                      onPressed: () {
                        _todoList.addOne();
                      },
                      child: Text("Add"))
                ],
              ),
            ),
          )),
    );
  }
}
