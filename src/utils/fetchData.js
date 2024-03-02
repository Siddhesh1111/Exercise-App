export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '30b0b33028msh2937a31360f3520p1b43b5jsnd3c6c94754c0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '30b0b33028msh2937a31360f3520p1b43b5jsnd3c6c94754c0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json(); 
    return data;
}