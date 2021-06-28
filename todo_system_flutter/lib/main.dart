import 'package:flutter/material.dart';
import 'package:todo_system_flutter/pages/Home/index.dart';
import 'package:todo_system_flutter/router/index.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Todo_System",
      home: Home(),
      theme: ThemeData(brightness: Brightness.light),
      routes: router(),
      initialRoute: '/',
    );
  }
}

