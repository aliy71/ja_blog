import quotes from '../quotes.module.css'

import { useEffect, useState } from "react";

const QuoteItem = ({ data, idx }) => {
    return (
        <div className={quotes.box__field}>
            <p className={quotes.text}>{data.text}</p>
            <p className="field">
                <pre>{`${data.published.day < 10 ? '0' + data.published.day : data.published.day}.${data.published.month < 10 ? '0' + data.published.month : data.published.month}.${data.published.year}`}</pre>
                <span>{data.author}</span>
            </p>
        </div>
    );
}

export default QuoteItem;