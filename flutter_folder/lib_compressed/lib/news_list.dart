// import 'package:flutter/material.dart';
// import 'news_detail.dart';
// import 'api_service.dart';
// import 'widgets/news_card.dart';

// class NewsListPage extends StatefulWidget {
//   @override
//   _NewsListPageState createState() => _NewsListPageState();
// }

// class _NewsListPageState extends State<NewsListPage> {
//   List articles = [];

//   @override
//   void initState() {
//     super.initState();
//     fetchNews(); // Fetch API Data on startup
//   }

//   void fetchNews() async {
//     List fetchedNews = await ApiService.getNews();
//     setState(() {
//       articles = fetchedNews;
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(title: Text('Latest News')),
//       body: articles.isEmpty
//           ? Center(child: CircularProgressIndicator()) // Loading Indicator
//           : ListView.builder(
//               itemCount: articles.length,
//               itemBuilder: (context, index) {
//                 return NewsCard(
//                   title: articles[index]['title'],
//                   description: articles[index]['description'],
//                   onTap: () {
//                     Navigator.push(
//                       context,
//                       MaterialPageRoute(
//                         builder: (context) => NewsDetailPage(article: articles[index]),
//                       ),
//                     );
//                   },
//                 );
//               },
//             ),
//     );
//   }
// }

import 'package:flutter/material.dart';
import 'news_detail.dart';
import 'api_service.dart';
import 'widgets/news_card.dart';

class NewsListPage extends StatefulWidget {
  @override
  _NewsListPageState createState() => _NewsListPageState();
}

class _NewsListPageState extends State<NewsListPage> {
  List articles = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchNews();
  }

  Future<void> fetchNews() async {
    try {
      List fetchedNews = await ApiService.getNews();
      setState(() {
        articles = fetchedNews;
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Latest News',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        backgroundColor: Colors.blue.shade900,
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator(color: Colors.blue))
          : articles.isEmpty
              ? Center(
                  child: Text(
                    "No news available",
                    style: TextStyle(fontSize: 18, color: Colors.black54),
                  ),
                )
              : RefreshIndicator(
                  onRefresh: fetchNews,
                  child: ListView.builder(
                    itemCount: articles.length,
                    padding: EdgeInsets.symmetric(vertical: 10),
                    itemBuilder: (context, index) {
                      return NewsCard(
                        title: articles[index]['title'] ?? "No Title",
                        description: articles[index]['description'] ?? "No Description",
                        onTap: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) => NewsDetailPage(article: articles[index]),
                            ),
                          );
                        },
                      );
                    },
                  ),
                ),
    );
  }
}
