import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BlogDataContext } from "../../context/mainContext";

import styles from './blogDetail.module.css'
import { Notes, Tags } from "../../components";
import { FaHeart } from "react-icons/fa";

const BlogDetail = () => {
    const {data} = useContext(BlogDataContext)
    const [catchData, setCatchData] = useState([])
    const routeParam = useParams()
    const routeLocation = useLocation()
    const routeRef = useRef('')
    routeRef.current = routeLocation.pathname.slice(routeLocation.pathname.lastIndexOf('/') + 1)

    useEffect(() => {
        setCatchData(data.filter(blog => blog.id === routeRef.current))
    }, [routeParam])    

    return ( 
        <section className={styles.blog__details__field}>
            <div className="container">
                <h2 className="field" style={{ fontSize: '2.8rem' }}>
                    {catchData[0]?.title}
                    {
                        catchData[0]?.isLike ? <FaHeart color="crimson" /> : ''
                    }
                </h2>
                <p className={styles.text}>{catchData[0]?.description}</p>
                <div className={styles.tags}>
                    <Tags tags={catchData[0]?.tag} />
                </div>
                {
                    catchData[0]?.thumbnails?.main?.map(data => {
                        console.log(data);
                        return (
                            <div className={styles.blog}>
                                <h5>{data?.title}</h5>
                                <p className={styles.text}>{data?.text}</p>
                                <div className={styles.image}>
                                    <img src={data.image.src} alt="image" loading="lazy" />
                                </div>
                                <Notes data={data.notes} />
                                <p className={styles.text}>{data.end_text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
     );
}
 
export default BlogDetail;