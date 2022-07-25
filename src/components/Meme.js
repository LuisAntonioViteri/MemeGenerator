import { useState, useEffect } from "react"

export default function Meme(){

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randImg:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes) 
            
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randImg: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main className="main--generator">
            <input 
                className="meme--inputtext" 
                placeholder="Texto superior"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                className="meme--inputtext" 
                placeholder="Texto inferior"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button className="meme-button" onClick={getMemeImage}>Obtener una nueva imagen 🖼</button>
            <div className="meme">
                <img className="meme--img" src={meme.randImg} alt="meme img"/>
                <h1 className="meme--toptxt">{meme.topText}</h1>
                <h2 className="meme--bottomtxt">{meme.bottomText}</h2>
            </div>
        </main>
    )
}