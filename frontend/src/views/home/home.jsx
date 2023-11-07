import { Blog, Quotes, TitleName } from "../../components";

import style from './home.module.css'

const Home = () => {
    return ( 
        <section className={style.home}>
            <div className="container">
                <Quotes />
                <div className="blog_field">
                    <TitleName title={'JA_blogs'} />
                    <Blog />
                </div>
            </div>
        </section>
     );
}
 
export default Home;