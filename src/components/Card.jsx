import { useState } from "react"

export default function Card({title,children}) {
    const [hidden, setHidden] = useState(true)
    return (
        <div className="card">
            <div className="cardHeader">
                <h3>{title}</h3>
                <button onClick={() => setHidden(!hidden)}> {hidden ? "Show" : "Hide"} </button>
            </div>
            <div className={`card-content${hidden ? '' : ' active'}`}>
                {hidden ? null : children}
            </div>
            
        </div>
    )
}