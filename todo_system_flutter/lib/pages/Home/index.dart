import 'package:flutter/material.dart';
import 'package:todo_system_flutter/widget/todoContainer.dart';

class TodoModel {
  TodoModel(this.id, this.content, this.complete);

  int id;
  String content;
  bool complete = false;
}

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<TodoModel> todoList = [];

  addTodo(String context) {
    print(context);
    return setState(() {
      if (todoList.length >= 1) {
        print(todoList[0]?.complete);
      }
      todoList.add(TodoModel(todoList.length, context, false));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("TodoSystem"),
      ),
      body: Padding(
        padding: EdgeInsets.all(10.0),
        child: Center(
          child: Column(
            children: [
              TodoContainer(todoList: todoList),
              TextButton(
                onPressed: () {
                  addTodo("测试一下");
                },
                child: Text("Add"),
              )
            ],
          ),
        ),
      ),
    );
  }
}


// }
