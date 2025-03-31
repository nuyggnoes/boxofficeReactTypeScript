export const YOUTUBE = {
  BASE_URL: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=',
  WATCH_URL: 'https://www.youtube.com/watch?v=',
  API_KEY: import.meta.env.VITE_YOUTUBE_API_KEY
}

export const KOBIS = {
  BASE_URL: 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  API_KEY: import.meta.env.VITE_KOBIS_API_KEY
}

export const KMDB = {
  BASE_URL: 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp',
  API_KEY: import.meta.env.VITE_KMDB_API_KEY
} 
