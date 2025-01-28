// topics list
const programming_1 = [
    { id: "AI", name: "AI quiz" },
    { id: "PHP", name: "PHP quiz" },
    { id: "JS", name: "JavaScript quiz" },
    { id: "Python", name: "Python quiz" },
  ];
  
  const programming_2 = [
    { id: "CSS", name: "CSS quiz" },
    { id: "HTML", name: "HTML quiz" },
    { id: "UI", name: "UI Design quiz" },
  ];
  
  const music_1 = [
    { id: "US UK", name: "US UK music quiz" },
    { id: "KPOP", name: "Kpop music quiz" },
    { id: "Vietnamese POP Music", name: "Vpop music quiz" },
    { id: "Classical", name: "Classical music quiz" },
  ]
  
  const science_1 = [
    { id: "Physics", name: "Physics quiz" },
    { id: "Chemistry", name: "Chemistry quiz" },
    { id: "Biology", name: "Biology quiz" },
  ];
  
  const history_1 = [
    { id: "World History", name: "World History quiz" },
    { id: "US History", name: "U.S. History quiz" },
    { id: "Ancient History", name: "Ancient History quiz" },
  ];
  
  const geography_1 = [
    { id: "World Geography", name: "World Geography quiz" },
    { id: "US Geography", name: "U.S. Geography quiz" },
    { id: "Europe Geography", name: "Europe Geography quiz" },
    { id: "Capitals", name: "Capital Cities quiz" },
  ];
  
  const entertainment_1 = [
    { id: "Movies", name: "Movies quiz" },
    { id: "TV Shows", name: "TV Shows quiz" },
    { id: "Celebrities", name: "Celebrities quiz" },
  ];
  
  const literature_1 = [
    { id: "Classics", name: "Classics Literature quiz" },
    { id: "Modern", name: "Modern Literature quiz" },
    { id: "Poetry", name: "Poetry quiz" },
  ];
  
  // export all catergories
  export const quizCaterories = [programming_1, programming_2, music_1, science_1, history_1, geography_1, entertainment_1, literature_1];
  
  // function to capitalize first character
  export const capitalize = (str: string) => {
    str = str?.replace(/%20/g, " ");
  
    // nullish here to avoid error with empty string
    return str[0].toUpperCase() + str.slice(1) + " Questions" ?? str;
  }