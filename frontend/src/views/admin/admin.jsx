import styles from './admin.module.css'
import { Button, Input } from "../../ui";
import { LuAlignHorizontalJustifyStart } from 'react-icons/lu'
import { MdAddLink, MdOutlineAddChart } from 'react-icons/md';
import { useReducer } from 'react';

import axios from 'axios'

const blogHeaderInit = {
    title: '',
    description: '',
    tags: [],
    mainImage: '',
}

const BlogHeaderReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'BLOG_H_TITLE':
            return {
                ...state,
                title: payload
            }
        case 'BLOG_H_DESCR':
            return {
                ...state,
                description: payload
            }
        case 'BLOG_H_TAGS':
            return {
                ...state,
                tags: [].push(payload)
            }
        case 'BLOG_H_IMAGE':
            return {
                ...state,
                mainImage: payload
            }
        default:
            return ''
    }
}

const Admin = () => {
    const [ blogHeader, dispatch ] = useReducer(BlogHeaderReducer, blogHeaderInit)

    const headTitleChangeHandler = (e) => {
        dispatch({ type: 'BLOG_H_TITLE', payload: e })
    }
    const headDescriptionChangeHandler = (e) => {
        dispatch({ type: 'BLOG_H_DESCR', payload: e })
    }
    const headTagsChangeHandler = (e) => {
        dispatch({ type: 'BLOG_H_TAGS', payload: e })
    }
    const headMainImageChangeHandler = (e) => {
        dispatch({ type: 'BLOG_H_IMAGE', payload: e })
    }

    const startedBlog = (e) => {
        e.preventDefault()
        console.log(blogHeader);
        axios.post('/admin', blogHeader)
            .then(console.log('saved'))
            .catch(console.log('has been err'))
    }

    return (
        <section className={styles.admin} id="admin">
            <div className={`container ${styles.admin__field}`}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>App blogs</h1>
                <div className={`field ${styles.field}`}>
                    <div className={styles.admin__blog__title}>
                        <form onSubmit={startedBlog} >
                            <Input title={'title'}  changeHandlerFn={headTitleChangeHandler} />
                            <Input title={'description'} changeHandlerFn={headDescriptionChangeHandler} />
                            <div className='field'>
                                <Input title={'tags'} changeHandlerFn={headTagsChangeHandler} />
                            </div>
                            <Input title={'image'} type='file' changeHandlerFn={headMainImageChangeHandler} />
                            <Button
                                title={'start blog'}
                                type={'btn primary'}
                                icon={<LuAlignHorizontalJustifyStart size={'20px'} />}
                                clickHandlerFn={startedBlog}
                            />
                        </form>
                    </div>
                    {/* <div className={styles.admin__blog__main}>
                        <form >
                            <Input title={'title'} changeHandlerFn={''} />
                            <Input title={'text'} changeHandlerFn={''} />
                            <Input title={'notes'} changeHandlerFn={''} />
                            <Input title={'file'} type="file" changeHandlerFn={''} />
                        </form>
                        <Button title={'add blog'} type={'primary'} icon={<MdOutlineAddChart size={'20px'} />} />
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Admin;