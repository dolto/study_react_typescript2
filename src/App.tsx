import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import s from './style';
import Header from './common/Header';
import MainList from './common/MainList';
import MainBanner from './common/MainBanner';
import ShopPage from './pages/Shop';
import { Route, Routes } from 'react-router-dom';
import Footer from './common/Footer';
import Blog from './pages/Blog';
import Story from './pages/Story';
import Detail from './pages/Detail';

// interface s {
//   audiAcc: String,
//   audiChange: String,
//   audiCnt: String,
//   audiInten: String,
//   movieCd: String,
//   movieNm: String,
//   openDt:String,
//   rank: String,
//   rankInten: String,
//   rankOldAndNew:String,
//   rnum: String,
//   salesAcc:String,
//   salesAmt:String,
//   salesChange: String,
//   salesInten: String,
//   salesShare: String,
//   scrnCnt: String,
//   showCnt: String,
// }

function App() {
  let [movieList, setMovieList] = useState<[]>([]);
  useEffect(() => {
    fetch(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=4bc765582315616d174fd80c60016295&targetDt=20230907"
      )
    .then(res => {
      return res.json();
    })
    .then(
      res => {
        setMovieList(res["boxOfficeResult"]["weeklyBoxOfficeList"]);
      }
    );
  }, 
  []); //오래걸리는 작업을 여기에 넣음(비동기 처리) 마운트 작업 이후에 수행될 작업

  // useEffect(() => {
  // // URL 설정
  // const apiUrl = "http://api.kcisa.kr/openapi/service/rest/meta2020/getCDGAvideo?serviceKey=d1be3f6e-f48f-4822-ba70-087bfc619496&numOfRows=10&pageNo=1";
  // // Fetch API를 사용하여 XML 데이터 가져오기
  // fetch(apiUrl)
  //   .then(response => response.text())
  //   .then(xmlData => {
  //     let jsonData = xmlToJson(xmlData);
  //     console.log(jsonData);
  //   })
  //   .catch(error => {
  //     console.error("데이터 가져오기 실패:", error);
  //   });
  // });
  return (
    <s.AppElement>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <main>
            <MainBanner />
            <MainList />
          </main>
        }></Route>
        <Route path='/shop' element={
          <ShopPage></ShopPage>
        }></Route>
        <Route path='/shop/:sort' element={
          <ShopPage></ShopPage>
        }></Route>
        <Route path='detail/:id' element={<Detail></Detail>}></Route>
        <Route path='blog' element={<Blog movie={movieList}></Blog>}></Route>
        <Route path='story' element={<Story></Story>}></Route>
        <Route path='*' element={<>이런 페이지는 없소 404err</>}></Route>
      </Routes>
      <Footer></Footer>
    </s.AppElement>

  );
}

export default App;

  function xmlToJson(xml: string): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    const result: any = {};
  
function parseNode(node: Node): any {
  if (node.nodeType === Node.ELEMENT_NODE) {
    const obj: any = {};

    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i];
      const childResult = parseNode(child);

      if (obj[child.nodeName]) {
        if (Array.isArray(obj[child.nodeName])) {
          obj[child.nodeName].push(childResult);
        } else {
          obj[child.nodeName] = [obj[child.nodeName], childResult];
        }
      } else {
        obj[child.nodeName] = childResult;
      }
    }

    return obj;
  } else if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent?.trim();
  }

  return null;
}

if (xmlDoc.firstChild) {
  result[xmlDoc.firstChild.nodeName] = parseNode(xmlDoc.firstChild);
}

return result;
}