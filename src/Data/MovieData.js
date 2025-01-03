const Movies = [
  {
    id: "inception", // Using a lowercase version of the movie name as the ID
    name: "Inception",
    titleImage: "/images/Inception.jpg",  
    image: "/images/Inception.jpg",
    category: "Science Fiction",
    year: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    rating: 8.8,
    cast: [
      { name: "Leonardo DiCaprio", profilePath: "https://path/to/leonardo.jpg", role: "Dom Cobb" },
      { name: "Joseph Gordon-Levitt", profilePath: "https://path/to/joseph.jpg", role: "Arthur" },
      { name: "Ellen Page", profilePath: "https://path/to/ellen.jpg", role: "Ariadne" },
      { name: "Tom Hardy", profilePath: "https://path/to/tom.jpg", role: "Eames" }
    ],
    director: "Christopher Nolan",
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: "the-dark-knight", 
    name: "The Dark Knight",
    titleImage: "/images/batman.png",
    image: "/images/batman.png",
    category: "Action",
    year: 2008,
    description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to come out of retirement and fight him.",
    rating: 9.0,
    cast: [
      { name: "Christian Bale", profilePath: "https://path/to/christian.jpg", role: "Bruce Wayne / Batman" },
      { name: "Heath Ledger", profilePath: "https://path/to/ledger.jpg", role: "The Joker" },
      { name: "Aaron Eckhart", profilePath: "https://path/to/aaron.jpg", role: "Harvey Dent / Two-Face" },
      { name: "Maggie Gyllenhaal", profilePath: "https://path/to/maggie.jpg", role: "Rachel Dawes" }
    ],
    director: "Christopher Nolan",
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: "the-matrix", 
    name: "The Matrix",
    titleImage: "/images/matrix.png",
    image: "/images/matrix.png",
    category: "Action",
    year: 1999,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: 8.7,
    cast: [
      { name: "Keanu Reeves", profilePath: "https://path/to/keanu.jpg", role: "Neo" },
      { name: "Laurence Fishburne", profilePath: "https://path/to/laurence.jpg", role: "Morpheus" },
      { name: "Carrie-Anne Moss", profilePath: "https://path/to/carrie.jpg", role: "Trinity" },
      { name: "Hugo Weaving", profilePath: "https://path/to/hugo.jpg", role: "Agent Smith" }
    ],
    director: "The Wachowskis",
    trailerLink: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    id: "avatar", 
    name: "Avatar",
    titleImage: "/images/avatar.png",
    image: "/images/avatar.png",
    category: "Science Fiction",
    year: 2009,
    description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    rating: 7.8,
    cast: [
      { name: "Sam Worthington", profilePath: "https://path/to/sam.jpg", role: "Jake Sully" },
      { name: "Zoe Saldana", profilePath: "https://path/to/zoe.jpg", role: "Neytiri" },
      { name: "Sigourney Weaver", profilePath: "https://path/to/sigourney.jpg", role: "Dr. Grace Augustine" },
      { name: "Stephen Lang", profilePath: "https://path/to/stephen.jpg", role: "Colonel Miles Quaritch" }
    ],
    director: "James Cameron",
    trailerLink: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: "the-avengers", 
    name: "The Avengers",
    titleImage: "/images/endgame.png",
    image: "/images/endgame.png",
    category: "Action",
    year: 2012,
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from subjugating the Earth.",
    rating: 8.0,
    cast: [
      { name: "Robert Downey Jr.", profilePath: "https://path/to/robert.jpg", role: "Tony Stark / Iron Man" },
      { name: "Chris Hemsworth", profilePath: "https://path/to/chris.jpg", role: "Thor" },
      { name: "Mark Ruffalo", profilePath: "https://path/to/mark.jpg", role: "Bruce Banner / Hulk" },
      { name: "Scarlett Johansson", profilePath: "https://path/to/scarlett.jpg", role: "Natasha Romanoff / Black Widow" }
    ],
    director: "Joss Whedon",
    trailerLink: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
  }
];

export default Movies;
