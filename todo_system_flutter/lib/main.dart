import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:todo_system_flutter/pages/Home/index.dart';
import 'package:todo_system_flutter/router/index.dart';

void main() => runApp(App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home: Home(),
      title: "Todo_system",
      routes: router(),
      initialRoute: "/",
    );
  }
}
