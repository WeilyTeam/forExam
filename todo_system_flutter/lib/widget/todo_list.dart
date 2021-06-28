import 'package:flutter/material.dart';

class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  List<Object> todo = [Row(
    children: [
      Radio(value: true, groupValue: 1, onChanged: (value){
        print("测试");
      }),
      Icon(Icons.ac_unit),
      Text("第${1}个Todo")
    ],
  )];

  addTodo() {
    todo.add(Row(

      children: [
        Radio(value: true, groupValue: 1, onChanged: (value){
          print("测试");
        }),
        Icon(Icons.ac_unit),
        Text("第${todo.length + 1}个Todo")
      ],
    ));
  }

  shiftTodo() {}

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: Column(
          children: [
            ...todo,
            TextButton(
              onPressed: () {
                setState(() {
                  addTodo();
                });
              },
              child: Text("Add"),
            ),
          ],
        ),
      ),
    );
  }
}
