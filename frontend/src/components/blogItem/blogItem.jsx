import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaHeart, FaRegHeart, FaResearchgate, FaSearchengin, FaShare, FaShareAlt } from 'react-icons/fa';

import blogStyle from './blogItem.module.css'
import { Button } from '../../ui';
import { BlogDataContext, OverlayActive } from '../../context/mainContext';

const BlogItem = ({ blog }) => {
    const [isLikeBlog, setIsLikeBlog] = useState(false)
    const [blogData, setBlogData] = useState(blog)
    const { overlayChangeHandler } = useContext(OverlayActive)
    const { data, setData } = useContext(BlogDataContext)
    const idRef = useRef(null);

    const isLikeHandler = (id) => {
        setIsLikeBlog(prev => !prev)
        idRef.current = id
    }

    useEffect(() => {
        setData(prev => {
            return (
                prev.map(item => {
                    return (
                        item.id === idRef.current ? (
                            {
                                ...item,
                                isLike: isLikeBlog,
                            }
                        ) : (
                            {
                                ...item
                            }
                        )
                    )
                })
            )
        })
    }, [isLikeBlog])

    console.log(blogData);
    return (
        blogData.map(item => {
            const { id, title, description, image, isLike } = item
            return (
                <div className={blogStyle.box}>
                    <div className={blogStyle.image}>
                        <img src={image.src} alt={image.alt} />
                        <div className={blogStyle.image__option}>
                            <Button
                                type={'icon__btn'}
                                icon={<FaEye size={'2.4rem'} color='#eff9fc' />}
                                clickHandlerFn={overlayChangeHandler}
                            />
                        </div>
                    </div>
                    <div className={blogStyle.information}>
                        <h3 className="title">
                            <Link to={`/blog-detail/${id}`} >{title}</Link>
                        </h3>
                        <p className="text">{description}</p>
                        <p className='field'>
                            <pre>05:35 PM</pre>
                            <div className="option" style={{ padding: '0 5px' }}>
                                <span className="icon" onClick={() => isLikeHandler(id)}>
                                    {isLike ? <FaHeart color='crimson' /> : <FaRegHeart />}
                                </span>
                                <span className="icon">
                                    <FaShareAlt style={{ marginRight: '5px' }} />
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            )
        })
    );
}

export default BlogItem;