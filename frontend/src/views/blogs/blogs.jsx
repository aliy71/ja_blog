import stl from './blog.module.css'
import { Blog } from "../../components";
import { GoSearch } from 'react-icons/go';
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../../context/mainContext';
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router-dom';
import { Button, Input } from '../../ui';


const Blogs = () => {
    const { data } = useContext(BlogDataContext)
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    
    useEffect(() => {
        setSearchData([...data])
    }, [data])

    const submitHandler = (e) => {
        e.preventDefault()
        search.trim().length != 0 ? ( 
            setSearchData(data.filter(blog => blog.title.toLowerCase().indexOf(search.toLowerCase().trim()) != -1 && blog))
        ) : (
            setSearchData([...data])
        )    
        setSearch('')
    }

    return (
        <section className={stl.blog__field}>
            <div className="container">
                <div className={stl.search__panel}>
                    <div className={`field`}>
                        <form className={`field ${stl.form__group}`} onSubmit={submitHandler} >
                            <Input title={'seaching'} changeHandlerFn={setSearch} />
                            <Button icon={ <GoSearch size={'24px'} />} type={'btn icon__btn'}  clickHandlerFn={submitHandler}/>
                            {/* <span className="icon" style={{ width: '50px', height: '45px' }} onClick={submitHandler}>
                                <GoSearch size={'24px'} />
                            </span> */}
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
                <Blog data={searchData} />
            </div>
        </section>
    );
}

export default Blogs;