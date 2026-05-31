import { useState } from 'react'

export default function ActressCard() {

    const [actressCard, setActressCard] = useState([]);

    function getActress() {
        fetch("https://lanciweb.github.io/demo/api/actresses/")
            .then(res => res.json()
                .then(data => {
                    setActressCard(data)
                }))
    }
    return
    <>
        <div className="container">
            {
                actressCard.map(actress => (
                    <div className="card"></div>
                ))
            }
        </div>

    </>
}