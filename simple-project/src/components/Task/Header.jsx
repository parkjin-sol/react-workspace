import { useNavigate } from "react-router-dom";


const Header = () => {
    const navi = useNavigate();

    return (
        <>
            <header>
                {/* <a href="/" className="logo">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" />
                </a> */}
                    <ul className="navbar-nav" >
                        <li onClick={()=> navi("/")} className="nav-item">Home</li>
                        <li onClick={()=> navi("/chap01")} className="nav-item">Chapter01</li>
                        <li onClick={()=> navi("/chap02")} className="nav-item">Chapter02</li>
                        <li onClick={()=> navi("/chap03")} className="nav-item">Chapter03</li>
                        <li onClick={()=> navi("/memo")} className="nav-item">Memo</li>
                        <li onClick={() => navi("/foods")} className="nav-item">부산맛집</li>
                    </ul>
            </header>
        </>
    );
};
export default Header;