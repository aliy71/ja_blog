import quotes from '../quotes.module.css'

import { useEffect, useState } from "react";

const QuoteItem = ({ data, idx }) => {
    const [idxCount, setIdxCount] = useState(0)
    const [timer, setTimer] = useState(0)

    const changeIdx = () => {
        
        console.log(idxCount);
    }

    useEffect(() => {
        setTimeout(() => {
            idxCount >= idx ? setIdxCount(0) : setIdxCount(prev => prev += 1)
            setTimer(prev => prev += 1)
        }, 1000)
    }, [timer])

    return (
        <div className={quotes.box__field} style={{ transform: `translateX(${idxCount * '-100%'})` }}>
            <p className={quotes.text}>{data.text}</p>
            <p className="field">
                <pre>{`${data.published.day < 10 ? '0' + data.published.day : data.published.day}.${data.published.month < 10 ? '0' + data.published.month : data.published.month}.${data.published.year}`}</pre>
                <span>{data.author}</span>
            </p>
        </div>
    );
}

export default QuoteItem;