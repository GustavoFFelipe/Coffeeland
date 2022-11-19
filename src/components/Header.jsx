import './Header.scss';

import coffee  from '../assets/coffee-icon.png';
import { List, XCircle } from 'phosphor-react';

export function Header(){

    function handleToggleOpen(){
        openMenu.style.display = 'flex';
        document.documentElement.style.overflow = 'hidden';
    }
    function handleToggleClose(){
        openMenu.style.display = 'flex' ? 'none' : 'flex';
        document.documentElement.style.overflow = 'auto';
    }


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

            <List onClick={handleToggleOpen} className="menuMobileIcon" size={26} color="#fff"/>

            <div id="openMenu" className='mobileNav'>
            <XCircle  onClick={handleToggleClose} className="close" size={32} color="#fff" />
                
                <a href="">Home</a>
                <a href="">Cafés</a>
                <a href="">Recompensas</a>
                <a href="">Gift Card</a>
                <a href="">Lojas</a>
            
            </div>
        </div>
    )
}