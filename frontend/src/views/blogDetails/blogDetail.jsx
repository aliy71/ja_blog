import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BlogDataContext } from "../../context/mainContext";

import styles from './blogDetail.module.css'

const BlogDetail = () => {
    const {data} = useContext(BlogDataContext)
    const [catchData, setCatchData] = useState([])
    const routeParam = useParams()
    const routeLocation = useLocation()
    const routeRef = useRef('')
    routeRef.current = routeLocation.pathname.slice(routeLocation.pathname.lastIndexOf('/') + 1)

    useEffect(() => {
        setCatchData(data.filter(blog => blog.id === routeRef.current ? blog : []))
    }, [routeParam])    

    return ( 
        <section className={styles.video__details__field}>
            <div className="container">
                <h2>{catchData[0]?.title}</h2>
                <p className="text">{catchData[0]?.description}</p>
            </div>
        </section>
     );
}
 
export default BlogDetail;