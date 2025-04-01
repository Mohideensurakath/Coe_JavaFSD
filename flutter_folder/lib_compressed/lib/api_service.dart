// import 'dart:convert';
// import 'package:http/http.dart' as http;

// class ApiService {
//   static Future<List> getNews() async {
//     final String apiKey = '';
//     final String url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=$apiKey';

//     try {
//       final response = await http.get(Uri.parse(url));

//       if (response.statusCode == 200) {
//         final data = json.decode(response.body);
//         return data['articles']; // Returns a list of articles
//       } else {
//         print('Error: ${response.statusCode} - ${response.body}');
//         throw Exception('Failed to load news');
//       }
//     } catch (e) {
//       print('Exception: $e');
//       throw Exception('Failed to load news');
//     }
//   }
// }
import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static Future<List> getNews() async {
    final response = await http.get(Uri.parse('https://newsapi.org/v2/top-headlines?country=us&apiKey=b61280ee51fb4c408821464dd5ca6844'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['articles']; // Return list of articles
    } else {
      throw Exception('Failed to load news');
    }
  }
}
