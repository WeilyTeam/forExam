import 'package:flutter/material.dart';
import 'package:todo_system_flutter/widget/todo_list.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [Icon(Icons.ac_unit), Text("Todo System")],
        ),
      ),
      body: Padding(
        padding: EdgeInsets.all(10.0),
        child: Column(
          children: [
            TodoList(),
          ],
        ),
      ),
    );
  }
}
