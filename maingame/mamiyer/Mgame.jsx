import React, { useEffect, useState } from 'react';
import img1 from "./img/cover.png";
import img2 from "./img/helmet-1.png";
import img3 from "./img/potion-1.png";
import img4 from "./img/ring-1.png";
import img5 from "./img/scroll-1.png";
import img6 from "./img/shield-1.png";
import img7 from "./img/sword-1.png";
import "./magic.css"
import SimpleCard from './SimpleCard';

const cardImages = [
    { "src": img2, matched: false },
    { "src": img3, matched: false },
    { "src": img4, matched: false },
    { "src": img5, matched: false },
    { "src": img6, matched: false },
    { "src": img7, matched: false }
];

const Mgame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [ disabled, setDisabled] =useState()

    // Shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
            setChoiceOne(null)
            setChoiceTwo(null)
        setCards(shuffledCards);
        setTurns(0);
    };
    const handleChoice = (card) =>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    }
    useEffect(()=>{
       

        if(choiceOne && choiceTwo){
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards =>{
                    return prevCards.map(card =>{
                        if(card.src === choiceOne.src){
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                restTurn()
            }else{
                
                setTimeout(() =>restTurn(), 1000)
            }
        }

    },[choiceOne, choiceTwo])
    console.log(cards)
    const restTurn =() =>{
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }


    console.log(cards, turns);
    useEffect (() =>{
        shuffleCards()
    },[])

    return (
        <>
            <div>
                <h1>Magic Match</h1>
                <button onClick={shuffleCards}>New Game</button>
                <div className='card-grid'>
                    {cards.map(card => (
                       <SimpleCard  key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne  || card === choiceTwo || card.matched} disable={disabled}/>
                    ))}
                </div>
                <p>Turn: {turns} </p>
            </div>
        </>
    );
};

export default Mgame;
