let movie = {
    title: "Fight Club",
    year: 1999,
    genre: ["drama", "thriller"],
    starring: ["Brad Pitt", "Edward Norton"],
  };
  
  console.log(movie.year); //1999
  console.log(movie["title"]); //Fight Club
  console.log(movie.genre); //drama, thriller
  console.log(movie.genre[0]); //drama
  console.log(movie.genre[1]); //thriller
  
  console.log(movie.duration); //undefinined
  console.log(movie["starring"][1]); //Brad Pitt
  console.log(movie.starring.length); //2