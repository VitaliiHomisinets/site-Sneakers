function Header(props) {
    return(
        <header>
            <div className="headerLogo">
            <img width={196} height={41} src="/img/logo.svg" />
            </div>
            <div className="headerAbout">
                <ul className="list">
                    <li onClick={props.onClickBasket} className="listBasket">
                        <img width={18} height={18} src="/img/basket.svg" />
                        <span>1205.00 $</span>
                    </li>
                    <li>
                    <img width={18} height={18} src="/img/user.svg" />
                    </li>
                </ul>
             </div>
        </header>

    );
}
export default Header;