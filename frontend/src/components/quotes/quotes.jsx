import quotes from './quotes.module.css'

const Quotes = () => {
    return ( 
        <div className={quotes.quotes}>
            <div className="field" style={{gap: '2rem'}}>
                <div className={`field ${quotes.box}`}>
                    <div className={quotes.box__field}>
                        <p className={quotes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit quae similique consectetur quisquam vel ab facere, molestias voluptas voluptates nisi esse magnam harum sint fugiat fuga eligendi commodi dicta?</p>
                        <p className="field">
                            <pre>01.11.2003</pre>
                            <span>M.Aliy</span>
                        </p>
                    </div>
                </div>
                <div className={quotes.box}>
                    <p className={quotes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit quae similique consectetur quisquam vel ab facere, molestias voluptas voluptates nisi esse magnam harum sint fugiat fuga eligendi commodi dicta?</p>
                    <p className="field">
                        <pre>01.11.2003</pre>
                        <span>M.Aliy</span>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Quotes;