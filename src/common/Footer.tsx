import s from '../style';

const Footer = () => {
    return (
    <s.Footer className='mw'>
        <hr />
        <div className="info">
            <div className="heigth">
                <div className="left">
                    <span>CONTACT</span> <span>TERMS OF SERVICES</span> <span>SHIPPING AND RETURNS</span>
                </div>
                <div className="right">
                    <span>Give an email get the newsletter. </span><span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
            <div className="low">
                <div className="left">
                    <span className='black'>㈜ 2021 Shelly.</span>
                    <span>Terms of use </span><span className='black'>and</span>
                    <span>privacy policy.</span>
                </div>
                <div className="right">
                    <span><i className="fa-brands fa-linkedin-in"></i></span> 
                    <span><i className="fa-brands fa-facebook"></i></span> 
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                </div>
            </div>
        </div>
    </s.Footer>
    );
}

export default Footer;