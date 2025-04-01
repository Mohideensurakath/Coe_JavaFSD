// import 'package:flutter/material.dart';

// class NewsDetailPage extends StatelessWidget {
//   final Map article;

//   NewsDetailPage({required this.article});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text(article['title'])),
//       body: Padding(
//         padding: EdgeInsets.all(16.0),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.start,
//           children: [
//             Text(article['title'], style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold)),
//             SizedBox(height: 10),
//             Text(article['description'], style: TextStyle(fontSize: 16)),
//           ],
//         ),
//       ),
//     );
//   }
// }

import 'package:flutter/material.dart';

class NewsDetailPage extends StatelessWidget {
  final Map article;

  NewsDetailPage({required this.article});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          article['title'],
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        ),
        backgroundColor: Colors.blue.shade900,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                article['title'],
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.black87,
                ),
              ),
              SizedBox(height: 8),
              if (article.containsKey('publishedAt'))
                Text(
                  "Published on: ${article['publishedAt']}",
                  style: TextStyle(color: Colors.grey.shade600, fontSize: 14),
                ),
              SizedBox(height: 16),
              Text(
                article['description'] ?? "No description available.",
                style: TextStyle(fontSize: 16, color: Colors.black87),
              ),
              SizedBox(height: 16),
              if (article.containsKey('content'))
                Text(
                  article['content'],
                  style: TextStyle(fontSize: 16, color: Colors.black54),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
