import trollface from "../images/Troll Face.png"

export default function Header(){
    return(
        <header className="header">
            <div className="header--container">
                <img src={trollface} className="header-logo" alt="trollfaceimg"/>
                <h2 className="header-title">Meme generator</h2>
                <h4 className="header-name">Luis Antonio Viteri</h4>
            </div>
        </header>
    )
}