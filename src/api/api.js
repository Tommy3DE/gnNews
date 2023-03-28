const KEY = import.meta.env.VITE_APP_API_KEY

export const API_URL = (country) =>
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${KEY}`;

//Tutaj moznaby było zrobić agregator fetcha który obrabiałby nam dane z tego API ale zabrakło czasu
