import { useResolvedPath } from 'react-router-dom';
import { Button, LinkApp } from '../../ui';
import BlogItem from '../blogItem/blogItem';
import blogStyle from './blog.module.css'
import { GiReloadGunBarrel } from 'react-icons/gi';
import { LuRefreshCw } from 'react-icons/lu';

const Blog = ({ data }) => {
    const routePath = useResolvedPath()

    return (
        <div className={blogStyle.blog__field}>
            <div className={`field ${blogStyle.field}`}>
                {
                    data.length > 0 ? (
                        data?.map(blog => {
                            return (
                                <BlogItem key={blog.id} data={blog} />
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