import s from '../style';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <s.Header>
            <div className='mw'>
                <h1>
                    <Link to="/"><img src="/img/logo.svg" alt='쇼핑몰 로고'/></Link>
                </h1>
                <nav>
                    <Link to="shop">shop</Link>
                    <Link to="blog">blog</Link>
                    <Link to="story">our story</Link>
                </nav>
                <div>
                    <Link to="#">
                        <i className='fa-solid fa-magnifying-glass'></i>
                        </Link>
                    <Link to="#">
                        <i className='fa-solid facart-arrow-down'></i>
                        </Link>
                    <Link to="#">
                        <i className='fa-solid fa-person'></i>
                        </Link>
                </div>
                
            </div>
        </s.Header>
    );
}

export default Header;