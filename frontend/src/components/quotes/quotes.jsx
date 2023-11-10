// import { Swiper, SwiperSlide } from 'swiper'

// import 'swiper/css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import QuotesData from '../../constants/quotes';
// import quotes from './quotes.module.css'
// import QuoteItem from './quoteItem/quoteItem';

// const Quotes = () => {
//     return (
//         <div className={quotes.quotes}>
//             <div className="field" style={{ gap: '2rem' }}>
//                 <Swiper
//                     modules={[Navigation, Pagination, Scrollbar, A11y]}
//                     spaceBetween={50}
//                     slidesPerView={3}
//                     navigation
//                     pagination={{ clickable: true }}
//                     scrollbar={{ draggable: true }}
//                     onSwiper={(swiper) => console.log(swiper)}
//                     onSlideChange={() => console.log('slide change')}
//                 >
//                     {
//                         QuotesData.owner.map(quote => {
//                             return (
//                                 <SwiperSlide key={quote.id}>
//                                     <QuoteItem data={quote} idx={quote.id} />
//                                 </SwiperSlide>
//                             )
//                         })
//                     }

//                     ...
//                 </Swiper>
//                 <div className={quotes.box}>
//                     {
//                         QuotesData.other.map((quote, idx) => {
//                             return <QuoteItem data={quote} key={quote.id} idx={idx} />
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Quotes;