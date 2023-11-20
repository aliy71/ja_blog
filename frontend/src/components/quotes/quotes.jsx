import quotes from './quotes.module.css'
import QuotesData from '../../constants/quotes';
import QuoteItem from './quoteItem/quoteItem';
import TitleName from '../titleName/titleName';
import { LuQuote } from 'react-icons/lu';

const Quotes = () => {
    return (
        <div className={quotes.quotes}>
            <TitleName title={'JA_Quotes'} icon={<LuQuote />} path={'quotes'} />
            <div className="field" style={{ gap: '2rem', justifyContent: 'center' }}>
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