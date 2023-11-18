import { useContext } from "react";
import { Blog, Quotes, TitleName } from "../../components";

import style from './home.module.css'
import { BlogDataContext } from "../../context/mainContext";

const Home = () => {
    const { data } = useContext(BlogDataContext)
    return ( 
        <section className={style.home}>
            <div className="container">
                {/* <Quotes /> */}
                <div className="blog_field">
                    <TitleName title={'JA_blogs'} />
                    <Blog blog={data} />
                </div>
            </div>
        </section>
     );
}
 
export default Home;