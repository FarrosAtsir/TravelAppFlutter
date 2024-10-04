import 'package:flutter/material.dart';
import 'package:tugas_ui_flutter/screen/spash_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Travel App",
      home: SplashScreen(),
    );
  }
}
