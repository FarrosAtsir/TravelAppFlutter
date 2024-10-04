import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:tugas_ui_flutter/widget/popular_item.dart';
import 'package:tugas_ui_flutter/widget/recommended_card.dart';

class ExploreScreen extends StatefulWidget {
  const ExploreScreen({super.key});

  @override
  State<ExploreScreen> createState() => _ExploreScreenState();
}

class _ExploreScreenState extends State<ExploreScreen> with SingleTickerProviderStateMixin{
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: [
            const SizedBox(height: 10),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Explore',
                        style: GoogleFonts.montserrat(
                          fontWeight: FontWeight.w400,
                          fontSize: 16
                        )
                      ),
                      Text(
                        'Aspen',
                        style: GoogleFonts.montserrat(
                          fontWeight: FontWeight.w500,
                          fontSize: 32
                        )
                      )
                    ],
                  ),
                  Row(
                    children: [
                      const Icon(
                        CupertinoIcons.location_solid,
                        color: Color(0xff176ff2),
                        size: 20
                      ),
                      const SizedBox(width: 6),
                      Text(
                        'Aspen, Japan',
                        style: GoogleFonts.robotoCondensed(
                          fontWeight: FontWeight.w500,
                          fontSize: 16,
                          color: const Color(0xff606060)
                        )
                      )
                    ],
                  )
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 15, horizontal: 20),
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 10),
                decoration: BoxDecoration(
                  color: const Color(0xfff3f8fe),
                  borderRadius: BorderRadius.circular(15)
                ),
                child: const TextField(
                  decoration: InputDecoration(
                    hintText: "Search places to visit",
                    border: InputBorder.none,
                    prefixIcon: Icon(Icons.search),
                  ),
                ),
              ),
            ),
            TabBar(
              controller: _tabController,
              indicatorColor: const Color(0xff176ff2),
              labelColor: const Color(0xff176ff2),
              unselectedLabelColor: const Color(0xffb8b8b8),
              labelStyle: GoogleFonts.robotoCondensed(
                fontWeight: FontWeight.w700,
                fontSize: 16,
              ),
              unselectedLabelStyle: GoogleFonts.robotoCondensed(
                fontWeight: FontWeight.w400,
                fontSize: 16,
              ),
              tabs: const [
                Tab(text: "Location"),
                Tab(text: "Hotel"),
                Tab(text: "Food"),
                Tab(text: "Adventure")
              ],
            ),
            const SizedBox(height: 20),
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  buildTabContent("Location"),
                  buildTabContent("Hotel"),
                  buildTabContent("Food"),
                  buildTabContent("Adventure"),
                ]
              )
            )
          ],
        ),
        bottomNavigationBar: BottomNavigationBar(
          fixedColor: const Color(0xff176ff2),
          currentIndex: 0,
          unselectedItemColor: Colors.black38,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home_filled),
              label: ''
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: ''
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.favorite),
              label: ''
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: ''
            )
          ]
        ),
      ),
    );
  }

  Widget buildTabContent(String tab){
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Popular",
                  style: GoogleFonts.montserrat(
                    fontWeight: FontWeight.w600,
                    fontSize: 18,
                    color: const Color(0xff232323)
                  ),
                ),
                Text(
                  "See All",
                  style: GoogleFonts.robotoCondensed(
                    fontWeight: FontWeight.w500,
                    fontSize: 12,
                    color: const Color(0xff176ff2)
                  ),
                )
              ],
            ),
            const SizedBox(height: 12),
            const SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  PopularItem(
                    title: "Alley Palace",
                    ratting: "4.5",
                    image: "assets/images/Alley Palace.png"
                  ),
                  SizedBox(width: 16),
                  PopularItem(
                    title: "Coeurdes Alpes",
                    ratting: "4.9",
                    image: "assets/images/Coeurdes Alpes.png"
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  "Recommended",
                  style: GoogleFonts.montserrat(
                    fontWeight: FontWeight.w600,
                    fontSize: 18,
                    color: const Color(0xff232323)
                  ),
                ),
                Text(
                  "See All",
                  style: GoogleFonts.robotoCondensed(
                    fontWeight: FontWeight.w500,
                    fontSize: 12,
                    color: const Color(0xff176ff2)
                  ),
                )
              ],
            ),
            const SizedBox(height: 16),
            const SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  RecommendedCard(
                    title: "Explore Aspen",
                    duration: "4N/5D",
                    deal: "Hot Deal",
                    image: "assets/images/rectangle_9921.jpeg"
                  ),
                  SizedBox(width: 16),
                  RecommendedCard(
                    title: "Luxurious Aspen",
                    duration: "2N/3D",
                    deal: "New Deal",
                    image: "assets/images/rectangle_9922.png"
                  ),
                  SizedBox(width: 16),
                  RecommendedCard(
                    title: "Explore Aspen",
                    duration: "4N/5D",
                    deal: "Hot Deal",
                    image: "assets/images/rectangle_9921.jpeg"
                  ),
                ],
              ),
            ),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }
}