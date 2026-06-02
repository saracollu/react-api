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
    return (
        <>
            <div className="card-container">
                {
                    actressCard.map(actress => (
                        <div key={actress.id} className="card">
                            <h2>{actress.name}</h2>
                            <span>{actress.birth_year}</span>
                            <span>{actress.nationality}</span>
                            <span>{actress.biography}</span>
                            <img src={actress.image} alt="" />
                            <span>{actress.awards}</span>
                        </div>
                    ))
                }
            </div>

        </>
    )
}