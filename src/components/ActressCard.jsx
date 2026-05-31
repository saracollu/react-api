import { useEffect, useState } from 'react'

export default function ActressCard() {

    const [actressCard, setActressCard] = useState([]);

    function getActress() {
        fetch("https://lanciweb.github.io/demo/api/actresses/")
            .then(res => res.json()
                .then(data => {
                    setActressCard(data)
                }))
    }
    useEffect(getActress, []);
    return
    <>
        <div className="container">
            {
                actressCard.map(actress => (
                    <div key={actress.id} className="card">
                        <h2>{name}</h2>
                        <span>{birth_year}</span>
                        <span>{nationality}</span>
                        <span>{biography}</span>
                        <img src={image} alt="" />
                        <span>{awards}</span>
                    </div>
                ))
            }
        </div>

    </>
}