import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:todo_system_flutter/widget/todoContainer.dart';

class TodoModel {
  TodoModel(this.id, this.content, this.complete);

  int id;
  String content;
  bool complete = false;
}

class HomeControl extends GetxController {
  List<TodoModel> todoList = [TodoModel(1, "content", false).obs()].obs();

  addOne() {
    print("Test");
    todoList.add(TodoModel(todoList.length, "content", false).obs());
    print(todoList);
  }
}

// class Home extends StatefulWidget {
//   @override
//   _HomeState createState() => _HomeState();
// }
//
// class _HomeState extends State<Home> {
//   @override
//   Widget build(BuildContext context) {
//     final HomeControl _todoList = Get.put(HomeControl());
//     return Scaffold(
//       appBar: AppBar(
//         title: Text("TodoList"),
//       ),
//       body: Padding(
//         padding: EdgeInsets.all(1.0),
//         child: Column(
//           children: [
//             TodoContainer(todoList: _todoList.todoList),
//             TextButton(
//               onPressed: () e(),
//               child: Text("Add"),=> _todoList.addOn
//             )
//           ],
//         ),
//       ),
//     );
//   }
// }

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final HomeControl _todoList = Get.put(HomeControl());
    return Scaffold(
      appBar: AppBar(
        title:Text("${_todoList.todoList[0].complete}"),
      ),
      body: Padding(
        padding: EdgeInsets.all(10.0),
        child: Center(
            child: Column(
          children: [
            TodoContainer(todoList: _todoList.todoList),

            TextButton(
                onPressed: () {
                  _todoList.addOne();
                },
                child: Text("Add"))
          ],
        )),
      ),
    );
  }
}
