import './Header.scss';

import coffee  from '../assets/coffee-icon.png';

export function Header(){
    return(
        <div className="headerContainer">
            <a href="#">
                <img src={coffee} alt="" />
            </a>
            <nav>
                <a href="">Home</a>
                <a href="">Cafés</a>
                <a href="">Recompensas</a>
                <a href="">Gift Card</a>
                <a href="">Lojas</a>
            </nav>
            <button className="askCoffee">
                Pegar meu café
            </button>
        </div>
    )
}