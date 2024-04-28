import { useEffect, useState } from "react";
import Card from "../card/Card";
import Aos from "aos";
import 'aos/dist/aos.css'


const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        // fetch('/card.json')
        fetch('http://localhost:5000/travels')
        .then(res=>res.json())
        .then(data=>setCards(data))
        
    },
    [])


    useEffect(()=>{
        Aos.init({duration:3000});
    })

    return (
        <div>
         {/* <h2 className="text-5xl text-center mb-10 mt-10 text-black">cards:{cards.length}</h2> */}
         <h2 className="text-5xl text-center mb-5 mt-10 text-black font-serif">Our Packages </h2>
         <h2 className="text-xl text-center mb-10 mt-5 text-black font-mono"> we provide any kind of package for your affordable  price  </h2>
        
         <div className="grid md:grid-cols-3  gap-10 " >{
                
                cards.map(card=> <Card  key={card.id} card={card}></Card>)
                  }
            </div>
        </div>
    );
};

export default Cards;