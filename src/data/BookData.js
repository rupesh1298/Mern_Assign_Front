
const BookData = [
  {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publication_year": 1960,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
    
          "Classic"
      ,
      "description": "A classic novel depicting racial injustice in the American South.",
      "cover_image": "https://cdn2.penguin.com.au/covers/original/9781784752637.jpg"
  },
  {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "publication_year": 1949,
      "price": 200,
      "rating": 4.3,
      "qty":1,
      "category": 
          "Science Fiction",
     
      "description": "A dystopian novel portraying a totalitarian society.",
      "cover_image": "https://www.bookgeeks.in/wp-content/uploads/2021/07/1984-by-George-Orwell-1.jpg"
  },
  {
      "id": 3,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "publication_year": 1813,
      "price": 350,
      "rating": 4.7,
      "qty":1,
      "category": 
          "Classic",
     
      "description": "A classic novel exploring themes of love, marriage, and social norms.",
      "cover_image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_hr.jpg"
  },
  {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publication_year": 1925,
      "price": 600,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Fiction",
    
      "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      "cover_image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_hr.jpg"
  },
  {
      "id": 5,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "publication_year": 1851,
      "price": 280,
      "rating": 4.1,
      "qty":1,
      "category": 
          "Fiction",
       
      "description": "The epic tale of Captain Ahab's obsession with the white whale.",
      "cover_image": "http://cdn.teachersdiscovery.com/images/legacy/4-b-4b1115_1.jpg"
  },
  {
      "id": 6,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "publication_year": 1954,
      "price": 560,
      "rating": 4.8,
      "qty":1,
      "category": 
          "Fantasy",
      
      "description": "An epic fantasy saga about the quest to destroy the One Ring.",
      "cover_image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608873821/the-lord-of-the-rings-9781608873821_hr.jpg"
  },
  {
      "id": 7,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "publication_year": 1951,
      "price": 270,
      "rating": 4.2,
      "qty":1,
      "category": 
          "Fiction",
   
      "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
      "cover_image": "https://i.pinimg.com/originals/5a/bc/0b/5abc0bdbe4ee89c6f8d91d09b9afd88f.jpg"
  },
  {
      "id": 8,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publication_year": 1937,
      "price": 130,
      "rating": 4.6,
      "qty":1,
      "category": 
          "Fantasy",
    
      "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
      "cover_image": "https://vignette.wikia.nocookie.net/bookclub/images/5/57/Movie_tie-in_The_hobbit.jpg/revision/latest?cb=20130703024231"
  },
  {
      "id": 9,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel Garcia Marquez",
      "publication_year": 1967,
      "price": 630,
      "rating": 4.4,
      "qty":1,
      "category": 
          "Magical Realism",
    
      "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
      "cover_image": "http://1.bp.blogspot.com/-hM-iSBej13E/T9GuLsnNjRI/AAAAAAAADHw/zb_HPkmqkzA/s1600/onehundredyearsofsolitude.jpg"
  },
  {
      "id": 10,
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "publication_year": 1869,
      "price": 240,
      "rating": 4.1,
      "qty":1,
      "category": 
          "Historical Fiction",
  
      "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
      "cover_image": "https://imgv2-1-f.scribdassets.com/img/word_document/234815569/original/75b83eb092/1578613595?v=1"
  },
  {
      "id": 11,
      "title": "The Odyssey",
      "author": "Homer",
      "publication_year": "8th century BCE",
      "price": 210,
      "rating": 4.3,
      "qty":1,
      "category": 
          "Epic",
     
      "description": "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
      "cover_image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451674187/the-odyssey-9781451674187_hr.jpg"
  },
  {
      "id": 12,
      "title": "The Divine Comedy",
      "author": "Dante Alighieri",
      "publication_year": "1320",
      "price": 480,
      "rating": 4.2,
      "qty":1,
      "category": 
          "Epic",
    
      "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
      "cover_image": "https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg"
  },
  {
      "id": 13,
      "title": "The Brothers Karamazov",
      "author": "Fyodor Dostoevsky",
      "publication_year": 1880,
      "price": 310,
      "rating": 4.7,
      "qty":1,
      "category": 
          "Classic",
      
      "description": "A complex novel exploring themes of spirituality, morality, and human nature.",
      "cover_image": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625583826/brothers-karamazov-9781625583826_hr.jpg"
  },
  {
      "id": 14,
      "title": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "publication_year": 1866,
      "price": 720,
      "rating": 4.8,
      "qty":1,
      "category": 
          "Classic",
        
      "description": "A psychological thriller revolving around guilt, conscience, and redemption.",
      "cover_image": "https://www.currency.com.au/wp-content/uploads/9781848423657-2.jpg"
  },
  {
      "id": 15,
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "publication_year": 1890,
      "price": 120,
      "rating": 4.0,
      "qty":1,
      "category": 
          "Gothic",
          
      "description": "A novel about a man whose portrait ages while he retains his youth and beauty.",
      "cover_image": "https://www.simbasible.com/wp-content/uploads/2019/05/22-2.jpg"
  },
  {
      "id": 16,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "publication_year": 1932,
      "price": 370,
      "rating": 4.2,
      "qty":1,
      "category": 
          "Dystopian",
         
      "description": "A dystopian vision of a future society obsessed with pleasure and conformity.",
      "cover_image": "https://imgv2-2-f.scribdassets.com/img/word_document/220644271/original/1e1f209b60/1595334838?v=1"
  },
  {
      "id": 17,
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "publication_year": 1844,
      "price": 320,
      "rating": 4.3,
      "qty":1,
      "category": 
          "Adventure",
          
      "description": "An adventure novel of revenge, love, and redemption set in the early 19th century.",
      "cover_image": "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780812565683.jpg"
  },
  {
      "id": 18,
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "publication_year": 1877,
      "price": 650,
      "rating": 4.6,
      "qty":1,
      "category": 
          "Classic",
      "description": "A tragic love story set against the backdrop of Russian high society.",
      "cover_image": "https://images.thenile.io/r1000/9780553213461.jpg"
  },
  {
      "id": 19,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "publication_year": 1988,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Fiction",
      "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
      "cover_image": "https://thebookcoverdesigner.com/wp-content/uploads/2019/04/the-alchemist.jpg"
  },
  {
      "id": 20,
      "title": "The Adventures of Huckleberry Finn",
      "author": "Mark Twain",
      "publication_year": 1884,
      "price": 310,
      "rating": 4.6,
      "qty":1,
      "category": 
          "Adventure",
      "description": "A satirical novel following Huck Finn's journey down the Mississippi River.",
      "cover_image": "https://freshcomics.s3.amazonaws.com/issue_covers/DEC151191.jpg"
  },
  {
      "id": 21,
      "title": "The Iliad",
      "author": "Homer",
      "publication_year": "8th century BCE",
      "price": 420,
      "rating": 4.1,
      "qty":1,
      "category": 
          "Epic",
      "description": "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
      "cover_image": "https://onlinereadfreenovel.com/i2/homer/the_iliad.jpg"
  },
  
  {
      "id": 23,
      "title": "Don Quixote",
      "author": "Miguel de Cervantes",
      "publication_year": 1605,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Classic",
      "description": "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
      "cover_image": "https://rupapublications.co.in/wp-content/uploads/2022/12/Don-Quixote-COVER.jpg"
  },
  {
      "id": 24,
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "publication_year": 1818,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Gothic",
      "description": "A novel about the creation of a monster and the consequences of playing god.",
      "cover_image": "https://image.tmdb.org/t/p/original/tpeaVvr780KaOlt6TE0s7jWZzhL.jpg"
  },
  {
      "id": 25,
      "title": "Alice's Adventures in Wonderland",
      "author": "Lewis Carroll",
      "publication_year": 1865,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Fantasy",
      "description": "A whimsical tale about a girl named Alice who falls into a magical world.",
      "cover_image": "https://fsconline.info/ebooks/wp-content/uploads/2016/02/alicesadventuresinwonderland.jpeg"
  },
  {
      "id": 26,
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "publication_year": 1943,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Fable",
      "description": "A philosophical novella about a young prince's journey through the universe.",
      "cover_image": "https://3.bp.blogspot.com/-4s5S6xM2_N0/V84R_2dX85I/AAAAAAAAW0w/1vPM65277fcP8uRtaUNL_mfJiJTDP5XyACLcB/s1600/prince.jpg"
  },
  {
      "id": 27,
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "publication_year": 2005,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Historical Fiction",
      "description": "A story of a girl living in Nazi Germany, narrated by Death.",
      "cover_image": "https://picfiles.alphacoders.com/131/131440.jpg"
  },
  {
      "id": 28,
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "publication_year": 1969,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Satire",
      "description": "An anti-war novel that mixes science fiction and dark humor.",
      "cover_image": "https://674135317375909979.weebly.com/uploads/1/3/1/0/131021531/s326069641988125586_p337_i1_w1013.jpeg"
  },
  {
      "id": 29,
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "publication_year": 1939,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Historical Fiction",
      "description": "A novel about the plight of migrant workers during the Great Depression.",
      "cover_image": "https://images.squarespace-cdn.com/content/50b67298e4b05c3cd8b81744/1444913376623-E42PJ5HLF208LJ1V27B4/image-asset.jpeg?format=1000w&content-type=image%2Fjpeg"
  },
  {
      "id": 30,
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "publication_year": 1953,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Dystopian",
      "description": "A dystopian novel depicting a future society where books are banned.",
      "cover_image": "https://loresumo.com/wp-content/uploads/2019/07/fahrenheit-451-1.jpg"
  },
  {
      "id": 31,
      "title": "The Lord of the Flies",
      "author": "William Golding",
      "publication_year": 1954,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Dystopian",
      "description": "A novel about a group of British boys stranded on an uninhabited island.",
      "cover_image": "https://www.betterreading.com.au/wp-content/uploads/2014/08/9780571191475-650x1024.jpg"
  },
  {
      "id": 32,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "publication_year": 1979,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Science Fiction",
      "description": "A comedic science fiction series about the misadventures of Arthur Dent.",
      "cover_image": "https://vignette.wikia.nocookie.net/bookclub/images/2/26/Hitchhiker.jpg/revision/latest?cb=20151223054821"
  },
  {
      "id": 33,
      "title": "A Tale of Two Cities",
      "author": "Charles Dickens",
      "publication_year": 1859,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Historical Fiction",
      "description": "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
      "cover_image": "https://www.makaobora.co.ke/bora/wp-content/uploads/2020/04/a-tale-of-two-cities-210.jpg"
  },
  {
      "id": 34,
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "publication_year": 1950,
      "price": 150,
      "rating": 4.5,
      "qty":1,
      "category": 
          "Fantasy"
         ,
      "description": "A series of fantasy novels set in the magical land of Narnia.",
      "cover_image": "https://interactive.wttw.com/sites/default/files/the-chronicles-of-narnia@2x.jpg"
  },
//   {
//       "id": 35,
//       "title": "The Handmaid's Tale",
//       "author": "Margaret Atwood",
//       "publication_year": 1985,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Dystopian",
//       "description": "A dystopian novel set in a totalitarian society where women are subjugated.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 36,
//       "title": "The Name of the Rose",
//       "author": "Umberto Eco",
//       "publication_year": 1980,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Historical Fiction",
//       "description": "A medieval mystery novel set in an Italian monastery.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 37,
//       "title": "The Trial",
//       "author": "Franz Kafka",
//       "publication_year": 1925,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Absurdist Fiction",
//       "description": "A surreal novel exploring themes of guilt, law, and justice.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 38,
//       "title": "The Kite Runner",
//       "author": "Khaled Hosseini",
//       "publication_year": 2003,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Historical Fiction",
//       "description": "A novel about friendship, redemption, and the impact of war in Afghanistan.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 39,
//       "title": "The Pillars of the Earth",
//       "author": "Ken Follett",
//       "publication_year": 1989,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Historical Fiction",
//       "description": "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 40,
//       "title": "The Shadow of the Wind",
//       "author": "Carlos Ruiz Zafón",
//       "publication_year": 2001,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Mystery"
//           ,
//       "description": "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 41,
//       "title": "The Secret Garden",
//       "author": "Frances Hodgson Burnett",
//       "publication_year": 1911,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Children's Literature"
//          ,
//       "description": "A classic children's novel about a young girl who discovers a hidden garden.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 42,
//       "title": "The Giver",
//       "author": "Lois Lowry",
//       "publication_year": 1993,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Dystopian",
//       "description": "A dystopian novel about a society with strict control over emotions and memories.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 43,
//       "title": "The Metamorphosis",
//       "author": "Franz Kafka",
//       "publication_year": 1915,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Absurdist Fiction"
//        ,
//       "description": "A novella about a man who wakes up one morning transformed into a giant insect.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 44,
//       "title": "Gone with the Wind",
//       "author": "Margaret Mitchell",
//       "publication_year": 1936,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Historical Fiction",
//       "description": "A historical novel set during the American Civil War, centered around Scarlett O'Hara.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 45,
//       "title": "The Wind in the Willows",
//       "author": "Kenneth Grahame",
//       "publication_year": 1908,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Children's Literature",
//       "description": "A children's novel about the adventures of anthropomorphic animals.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 46,
//       "title": "Dracula",
//       "author": "Bram Stoker",
//       "publication_year": 1897,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Gothic",
//       "description": "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 47,
//       "title": "The Call of the Wild",
//       "author": "Jack London",
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "publication_year": 1903,
//       "category": 
//           "Adventure"
//         ,
//       "description": "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 48,
//       "title": "The Stand",
//       "author": "Stephen King",
//       "publication_year": 1978,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Horror"
//         ,
//       "description": "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 49,
//       "title": "The Color Purple",
//       "author": "Alice Walker",
//       "publication_year": 1982,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category": 
//           "Fiction",
//       "description": "A novel about the life of African-American women in the Southern United States.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   },
//   {
//       "id": 50,
//       "title": "The Silmarillion",
//       "author": "J.R.R. Tolkien",
//       "publication_year": 1977,
//       "price": 150,
//       "rating": 4.5,
//       "qty":1,
//       "category":
//           "Fantasy",
//       "description": "A collection of mythopoeic stories about the history of Middle-earth.",
//       "cover_image": "https://fakeimg.pl/667x1000/cc6600"
//   }
]
  export default BookData;