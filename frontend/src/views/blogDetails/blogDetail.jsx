import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BlogDataContext } from "../../context/mainContext";

import styles from './blogDetail.module.css'
import { Notes, Tags } from "../../components";
import { FaHeart } from "react-icons/fa";
import OtherBlogs from "../../components/otherBlogs/otherBlogs";

const BlogDetail = () => {
    const { data } = useContext(BlogDataContext)
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
                <div className="field" style={{ gap: '10px', alignItems: 'start' }}>
                    <article style={{ width: '80%', padding: '0 1rem' }}>
                        <h2 className="field" style={{ fontSize: '2.4rem' }}>
                            <span>
                                {catchData[0]?.title}
                            </span>
                            {/* <span style={{ color: catchData[0]?.isLike ? 'crimson' : '#1f2032' }}>
                                {
                                    catchData[0]?.isLike ? 'Like' : 'DisLike'
                                }
                            </span> */}
                        </h2>
                        <p className={styles.text}>{catchData[0]?.description}</p>
                        <div className={styles.tags}>
                            <Tags tags={catchData[0]?.tag} />
                        </div>
                        {
                            catchData[0]?.thumbnails?.main?.map(data => {
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
                    </article>
                    <aside style={{ width: '20%' }}>
                        <h3>Other Blogs</h3>
                        <OtherBlogs blog={data} />
                    </aside>
                </div>
            </div>
        </section>
     );
}
 
export default BlogDetail;