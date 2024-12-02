# 🎥 영화 박스오피스 Top 10

영화 박스오피스 정보를 보여주는 간단한 웹 페이지입니다. 실시간으로 최신 영화 순위를 확인할 수 있습니다.

## 📋 주요 기능

- 박스오피스 상위 10위 영화 목록 제공
- 영화 제목, 순위, 배우명 등 상세 정보 표시
- 사용자 친화적인 인터페이스

## 🛠 기술 스택

- **Frontend**: React
- **API**: [KOBIS 영화진흥위원회 API](https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json)
- **Styling**: CSS / styled-components

## 📂 프로젝트 구조

```plaintext
├── public/
├── src/
│   ├── components/
│   │   ├── form/
|   |   |   ├──Detail.tsx
│   │   ├── ui/
|   |   |   ├──card/
|   |   |   |   ├──Card.styles.ts
|   |   |   |   ├──Card.tsx
|   |   |   |   ├──Card.types.ts
|   |   |   |   ├──CardList.tsx
|   |   |   ├──header/
|   |   |   |   ├──Header.styles.ts
|   |   |   |   ├──Header.tsx
│   ├── hooks/
│   │   ├── api.js             # API 호출 로직
│   ├── pages/
│   │   ├── detail/
|   |   |   ├──Detail.tsx
│   │   ├── home/
|   |   |   Home.tsx
│   ├── styles/
│   │   ├── global.css         # 전역 스타일
│   ├── utils/
│   │   ├── date.ts
│   │   ├── stringFormat.ts
│   ├── App.js                 # 메인 애플리케이션
│   ├── index.js               # 진입 파일
├── README.md
