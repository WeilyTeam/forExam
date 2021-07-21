import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:todo_system_flutter/pages/Home/index.dart';

class TodoContainer extends StatelessWidget {
  const TodoContainer({@required this.todoList}) : super();
  final List<TodoModel> todoList;

  @override
  Widget build(BuildContext context) {
    print(todoList.length);
    return Expanded(
      child: ListView.builder(
        itemBuilder: (context, index) {
          return Center(
              child: TodoItem(
            complete: todoList[index].complete,
            id: todoList[index].id,
            content: todoList[index].content,
          ));
        },
        padding: EdgeInsets.all(0.0),
        physics: BouncingScrollPhysics(),
        scrollDirection: Axis.vertical,
        itemCount: todoList.length,
      ),
    );
  }
}

class TodoItem extends StatefulWidget {
  TodoItem({
    Key key,
    this.complete,
    this.id,
    this.content,
  }) : super(
          key: key,
        );

  RxBool complete;
  int id;
  String content;

  @override
  _TodoItemState createState() => _TodoItemState();
}

class _TodoItemState extends State<TodoItem> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Obx(() => Checkbox(
            value: widget.complete.value,
            onChanged: (bool val) {
              return widget.complete.value = !widget.complete.value;
            })),
        Text(widget.content)
      ],
    );
  }
}
