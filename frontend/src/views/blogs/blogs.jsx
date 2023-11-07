import stl from './blog.module.css'
import { Blog } from "../../components";
import { GoSearch } from 'react-icons/go';
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../../context/mainContext';


const Blogs = () => {
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const { data } = useContext(BlogDataContext)
    
    const submitHandler = (e) => {
        e.preventDefault()
        setSearchData(data.filter(blog => blog.title.toLowerCase().indexOf(search.toLowerCase().trim()) != -1 && blog ))
        setSearch('')
    }

    return (
        <section className={stl.blog__field}>
            <div className="container">
                <div className={stl.search__panel}>
                    <div className={`field`}>
                        <form className={`field ${stl.form__group}`} onSubmit={submitHandler}>
                            <input 
                                type="text" 
                                placeholder='searching...' 
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }} 
                            />
                            <span className="icon" style={{width: '50px', height: '45px'}}>
                                <GoSearch size={'24px'} />
                            </span>
                        </form>
                        <div className="select-style">
                            <select >
                                <option value="all_blogs">All_blogs</option>
                                <option value="ja_blogs">JA_blogs</option>
                                <option value="world_blogs">World_blogs</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Blog />
            </div>
        </section>
    );
}

export default Blogs;