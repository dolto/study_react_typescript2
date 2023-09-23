import s from '../style';

interface ss {
  audiAcc: String,
  audiChange: String,
  audiCnt: String,
  audiInten: String,
  movieCd: String,
  movieNm: String,
  openDt:String,
  rank: String,
  rankInten: String,
  rankOldAndNew:String,
  rnum: String,
  salesAcc:String,
  salesAmt:String,
  salesChange: String,
  salesInten: String,
  salesShare: String,
  scrnCnt: String,
  showCnt: String,
}

interface p {
    movie: ss[]
}

const Blog = (props:p) => {
    console.log(props);
    return (
        <s.Blog className='mw'>
            <h2>주말 박스오피스</h2>
            <ul>
                {props.movie.map((item, i)=>{
                    return (
                        <li key={i}>
                            {item.movieNm}
                            <hr />
                        </li>
                    );
                })}
            </ul>
        </s.Blog>
    );
}

export default Blog;