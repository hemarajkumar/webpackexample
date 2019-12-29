
var navmenu = {"menulist":[
  {"Title":"All Products",  "category":"viewall", "id":"viewall", "href": "viewall"},
  {"Title":"Mens Wear", "category":"menswear", "id":"cat01", "href": "menswear"},
  {"Title":"Womens Wear", "category":"womenswear",  "id":"cat02", "href": "womenswear"},
  {"Title":"Hand Bages", "category":"handbags", "id":"cat03", "href": "handbags"},
  {"Title":"Accessories", "category":"accessories", "id":"cat04", "href": "accessories"},
  {"Title":"Sales", "category":"sales", "id":"cat04", "href": "sales", "highlight": "true"}
]}


var carouselList = {"lists":[
  {
  "Title":"Title 1",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 2",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 3",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 4",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 5",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 6",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 7",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 8",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 9",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]},
  {
  "Title":"Title 10",
  "list":[
  {"imagetype":"desktop", "path":"dist/images/carousel/image1-desktop.png"},
  {"imagetype":"tablet", "path":"dist/images/carousel/image1-tablet.png"},
  {"imagetype":"mobile", "path":"dist/images/carousel/image1-mobile.png"}
  ]}
]}

/*
var catTitle = {"cattitle":[
  {"Title":"Produts Category....",  "Description": "Explore our products ...", "id":"viewall"},
  {"Title":"Mens Wear Category ....", "Description": "Explore our Mens Wear products ...", "id":"cat01"},
  {"Title":"Womens Wear Category ....", "Description": "Explore our Womens Wear products ...", "id":"cat02"},
  {"Title":"Hand Bages Category ....", "Description": "Explore our Hand Bags ...", "id":"cat03"},
  {"Title":"Accessories Category ....", "Description": "Explore our Accessories  ...", "id":"cat04"}
]}

var productAdded=[]
*/

var productlList = {"lists":[
{
  "Title":"Mens Wear",
  "id":"cat01",
  "list":[
    {"id":"cat01_01", "name":"Teal Regular Fit Check Shirt", "price":"15.00", "wasprice":"18.00", "image":"dist/images/shirt1.jpg",
    "roundelImg":"dist/images/roundelbg.png", "color":"white", "quantity":"10"},
    {"id":"cat01_02", "name":"Teal Regular", "price":"18.00", "image":"dist/images/shirt2.jpg", "color":"blue", "quantity":"0" },
    {"id":"cat01_03", "name":"Teal Medium Shirt", "price":"12.00", "image":"dist/images/shirt3.jpg", "color":"blue", "quantity":"5"},
    {"id":"cat01_04", "name":"Khaki Cord Long Sleeve Shirt", "price":"34.00", "wasprice":"42.00", "image":"dist/images/shirt5.jpg",
      "color":"blue", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
    {"id":"cat01_05", "name":"Cord Long Sleeve Shirt", "price":"30.00", "image":"dist/images/shirt6.jpg", "color":"pink", "quantity":"0"},
    {"id":"cat01_06", "name":"Neutral Slim Fit Check Shirt", "price":"40.00", "image":"dist/images/shirt7.jpg", "color":"green", "quantity":"10"},
    {"id":"cat01_07", "name":"Neutral Regular Fit Check Shirt", "price":"30.00", "wasprice":"40.00", "image":"dist/images/shirt8.jpg",
      "color":"black", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
    {"id":"cat01_08", "name":"Neutral Slim Fit Plain Shirt", "price":"42.00", "image":"dist/images/shirt9.jpg", "color":"black", "quantity":"1"},
    {"id":"cat01_09", "name":"Neutral Regular Fit Plain Shirt", "price":"10.00", "wasprice":"15.00", "image":"dist/images/shirt11.jpg", "color":"black", "quantity":"10"},
    {"id":"cat01_10", "name":"Barbour Oxford Shirt", "price":"20.00", "image":"dist/images/shirt10.jpg", "color":"red", "quantity":"10"},
    {"id":"cat01_11", "name":"Oxford Slim Shirt", "price":"14.00", "image":"dist/images/shirt12.jpg", "color":"red", "quantity":"10"},
    {"id":"cat01_12", "name":"Oxford Regular Shirt", "price":"24.00", "image":"dist/images/shirt13.jpg", "color":"red", "quantity":"10"},
    {"id":"cat01_13", "name":"Ginger Cord Long Sleeve Shirt", "price":"35.00", "wasprice":"44.00", "image":"dist/images/shirt14.jpg",
      "color":"red", "roundelImg":"dist/images/roundelbg.png", "quantity":"10"},
    {"id":"cat01_14", "name":"Ginger Cord Regular Shirt", "price":"22.00", "wasprice":"30.00", "image":"dist/images/shirt19.jpg",
      "color":"yellow", "quantity":"10"},
    {"id":"cat01_15", "name":"Ginger Cord Slim Shirt", "price":"28.00", "image":"dist/images/shirt20.jpg", "color":"yellow",
      "roundelImg":"dist/images/roundelbg.png", "quantity":"0"},
    {"id":"cat01_16", "name":"BOSS Mypop Twill Check Shirt", "price":"26.00", "wasprice":"32.00", "image":"dist/images/shirt21.jpg",
      "color":"yellow", "quantity":"10"},
    {"id":"cat01_17", "name":"Twill Check Shirt", "price":"21.00", "image":"dist/images/shirt17.jpg", "color":"blue", "quantity":"10"},
    {"id":"cat01_18", "name":"Check Shirt", "price":"30.00", "image":"dist/images/shirt22.jpg", "color":"black", "quantity":"10"}
  ]},
  {
  "Title":"Womens Wear",
  "id":"cat02",
  "list":[
  {"id":"cat02_02", "name":"Womens wear 1", "price":"29.00", "image":"dist/images/clothing2.jpg", "color":"blue", "quantity":"10"},
  {"id":"cat02_03", "name":"Womens wear 2", "price":"19.00", "wasprice":"38.00", "image":"dist/images/clothing3.jpg",
  "color":"red", "quantity":"0"}
  ]},
  {
  "Title":"Hand Bages",
  "id":"cat03",
  "list":[
  {"id":"cat03_01", "name":"Khaki Waxed Messenger Bag", "price":"20.00", "wasprice":"32.00", "image":"dist/images/handbags1.jpg",
  "color":"grey", "quantity":"10"},
  {"id":"cat03_02", "name":"Waxed Messenger Bag", "price":"30.00", "wasprice":"45.00", "image":"dist/images/handbags2.jpg",
  "roundelImg":"dist/images/roundelbg.png", "color":"blue", "quantity":"0"},
  {"id":"cat03_03", "name":"Messenger Bag", "price":"30.00", "image":"dist/images/handbags3.jpg", "color":"black", "quantity":"10"}
  ]},
  {
  "Title":"Accessories",
  "id":"cat04",
  "list":[
  {"id":"cat04_01", "name":"Brown Bag", "price":"49.99", "wasprice":"60.00", "image":"dist/images/accessories1.jpg",
  "color":"brown", "quantity":"10"},
  {"id":"cat04_02", "name":"Ladies Orange Bag", "price":"39.99", "image":"dist/images/accessories2.jpg", "color":"orange", "quantity":"0"},
  {"id":"cat04_03", "name":"Ladies Bag", "price":"20.00", "wasprice":"30.00", "image":"dist/images/accessories3.jpg",
  "roundelImg":"dist/images/roundelbg.png", "color":"brown", "quantity":"10"},
  {"id":"cat04_04", "name":"Blue Leather Belt", "price":"22.00", "image":"dist/images/accessories4.jpg", "color":"blue", "quantity":"0"}
  ]}
]} 

var sortOptions = {"lists":[
  {
    "id": "lowtohigh",
    "title": "Low to High"
  },
  {
    "id": "hightolow",
    "title": "High to Low"
  },
  {
    "id": "atoz",
    "title": "A to Z"
  },
  {
    "id": "ztoa",
    "title": "Z to A"
  }
]}

var categories = {"lists":[
  {
    "title": "Explore our produts",
    "id":"viewall",
    "name": "viewall"

  },
  {
    "title": "Explore our Mens's wear dresses",
    "id":"cat01",
    "name": "menswear"

  },
  {
    "title": "Explore our Women's wear dresses",
    "id":"cat02",
    "name": "womenswear"

  },
  {
    "title": "Explore our Hand Bags",
    "id":"cat03",
    "name": "handbags"

  },
  {
    "title": "Accessories Bags Luggage Purse Belts",
    "id":"cat04",
    "name": "accessories"

  },
  {
    "title": "Explore our Clearance Products",
    "id":"sales",
    "name": "sales"
  }
]}

module.exports = {
  menu: navmenu,
  carousel: carouselList,
  productList: productlList,
  sortList: sortOptions,
  category: categories
}