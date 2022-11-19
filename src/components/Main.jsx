import coffeeLogo from '../assets/rocket-coffee.png';
import './Main.scss';

export function Main(){
    return(
        <div className="mainContainer">
            <div className="textContainer">
                <h2>Best Coffee</h2>
                <h2 className='borderText'>Best Coffee</h2>
            </div>

            <button className="askCoffee">
                Pegar meu café
            </button>
            <img src={coffeeLogo} alt="" />
        </div>
    )
}