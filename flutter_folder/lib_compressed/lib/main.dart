import 'package:flutter/material.dart';
import 'home.dart';
import 'theme.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'News Reader App',
      theme: appTheme, // Custom theme
      home: HomeScreen(),
    );
  }
}
