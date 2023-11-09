import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import QuotesData from '../../constants/quotes';
import { Button } from '../../ui';
import quotes from './quotes.module.css'
import { useEffect, useState } from 'react';
import QuoteItem from './quoteItem/quoteItem';

const Quotes = () => {
    return (
        <div className={quotes.quotes}>
            <div className="field" style={{ gap: '2rem' }}>
                <div className={`${quotes.box}`}>
                    {
                        QuotesData.owner.map((quote, idx) => {
                            return <QuoteItem data={quote} key={quote.id} idx={idx} />
                        })
                    }
                </div>
                <div className={quotes.box}>
                    {
                        QuotesData.other.map((quote, idx) => {
                            return <QuoteItem data={quote} key={quote.id} idx={idx} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Quotes;