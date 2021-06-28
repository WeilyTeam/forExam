import 'package:flutter/cupertino.dart';
import 'package:todo_system_flutter/pages/Home/index.dart';
import 'package:todo_system_flutter/pages/Login/index.dart';

Map<String, WidgetBuilder> router() {
  return {
    '/home': (context) => Home(),
    '/login': (context) => Login(),
  };
}
