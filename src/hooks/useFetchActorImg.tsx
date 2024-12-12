import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyCVBUMa7Z4CoO9JAMj3qw4weCtNooULmUA';
const CX = 'e3d84db0c0d004039';

export default function ActorSearch({ actorName }: { actorName: string }) {
  //   const [actorName, setActorName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const searchActorImage = async () => {
    try {
      console.log(actorName);
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${actorName}&searchType=image`,
      );
      const data = await response.json();
      console.log(data);
      if (data.items && data.items.length > 0) {
        setImageUrl(data.items[2].link); // 첫 번째 이미지를 사용
      } else {
        console.log('이미지를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };
  useEffect(() => {
    searchActorImage();
  }, []);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="배우 이름을 입력하세요"
        value={actorName}
        onChange={(e) => {
          setActorName(e.target.value);
        }}
      /> */}
      {/* <button onClick={searchActorImage}>검색</button> */}
      {imageUrl && <img src={imageUrl} alt={actorName} style={{ width: '300px' }} />}
    </div>
  );
}
