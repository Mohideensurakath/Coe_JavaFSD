import 'package:flutter/material.dart';

final ThemeData appTheme = ThemeData(
  // Define the primary color theme
  primarySwatch: Colors.blue,

  // Define text styles
  textTheme: TextTheme(
    bodyLarge: TextStyle(fontSize: 16, color: Colors.black),  
    bodyMedium: TextStyle(fontSize: 14, color: Colors.grey),  
    headlineSmall: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.blue),
    titleMedium: TextStyle(fontSize: 18, fontWeight: FontWeight.w500, color: Colors.black),
  ),

  // Define button styling
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: Colors.blue,
      foregroundColor: Colors.white,
      textStyle: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
    ),
  ),
);
