import { Link } from 'react-router-dom';
import s from '../style';

interface p {
    _id:number,
    title: string,
    img: string,
    price: string,
   // category: string,
   discount: string
}

const ListCard = (props: p) => {
    return(
        <s.ListCard>
            <div className='p_img'>
                <img src={"/img/"+props.img} alt="상품 이미지" />
            </div>
            <Link className='detail' to={"/detail/"+props._id}>자세히보기</Link>
            {
                props.discount === '0' ? <></> : <span className="discount">{props.discount+"%"}</span>
            }
            <span>{props.title}</span>
            <span>{Number(props.price).toLocaleString('ko-KR')}￦</span>
        </s.ListCard>
    );
}

export default ListCard;