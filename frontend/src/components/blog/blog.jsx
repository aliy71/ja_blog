import { useResolvedPath } from 'react-router-dom';
import { Button, LinkApp } from '../../ui';
import BlogItem from '../blogItem/blogItem';
import blogStyle from './blog.module.css'
import { GiReloadGunBarrel } from 'react-icons/gi';
import { LuRefreshCw } from 'react-icons/lu';
import { useContext, useEffect, useRef, useState } from 'react';
import { BlogDataContext } from '../../context/mainContext';

const Blog = ({ blog }) => {
    const routePath = useResolvedPath()
    const [isLike, setIsLike] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const { data, setData } = useContext(BlogDataContext)
    const idRef = useRef(null);

    const isLikeHandler = (id) => {
        setIsLike(prev => !prev);
        idRef.current = id
        console.log(idRef.current);
    }

    useEffect(() => {
        setBlogData([...blog])
    }, [blog])

    useEffect(() => {
        setData(
            data.map(item => item.id === idRef.current ? (
                { ...item, isLike }
            ) : (
                { ...item }
            ))
        )
        setBlogData([...data])
    }, [isLike])

    return (
        <div className={blogStyle.blog__field}>
            <div className={`field ${blogStyle.field}`}>
                {
                    blogData.length > 0 ? (
                        blogData.map(item => {
                            return (
                                <BlogItem
                                    blog={item}
                                    key={item.id}
                                    isLikeHandler={isLikeHandler}
                                    setIsLike={setIsLike}
                                />
                            )
                        })
                    ) : (
                        <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            {/* <span style={{fontSize: '1.6rem'}}>Ma'lumot topilmadi.</span> */}
                            <Button 
                                title={'Iltimos qaytadan urinib ko\'ring'} 
                                icon={<LuRefreshCw />} 
                                type={'primary'} 
                                link={routePath.pathname.slice(1)} 
                            />
                        </p>
                    )
                }
            </div>
        </div>
    );
}

export default Blog;