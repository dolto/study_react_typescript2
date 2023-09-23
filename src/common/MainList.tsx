import s from '../style';
import ListCard from './ListCard';
import list from '../productData';
import { useParams } from 'react-router-dom';

const MainList = () => {
    let sort_list = [...list];
    let mode = useParams()["sort"];
    
    if(mode as String){
        if(mode == ":index"){
            sort_list = sort_list.sort(
                (a, b) => a._id - b._id
            );
            console.log("인덱스 정렬");
        }else if(mode == ":cost-height"){
            sort_list = sort_list.sort(
                (a, b) => Number(a.price) - Number(b.price)
            );
            console.log("가격오름 정렬");
        }else if(mode == ":cost-low"){
            sort_list = sort_list.sort(
                (a, b) => Number(b.price) - Number(a.price)
            );
            console.log("가격내림 정렬");
        }else if(mode == ":discount"){
            sort_list = sort_list.sort(
                (a, b) => Number(b.discount) - Number(a.discount)
            );
            console.log("할인율 정렬");
        }
        console.log(sort_list);
    }


    let sort_list_ele = sort_list.map((l, i) => {
        return (
            <ListCard _id={l._id} key={i} img={l.img} title={l.title} discount={l.discount} price={l.price}/>
        )
    });



    return(
        <s.MainList className='mw'>
            <h2>MainList</h2>
            <a href="#">View all</a>
            <ul className="__list">
                {sort_list_ele}
            </ul>
        </s.MainList>
    );
}
export default MainList;