import axios from 'axios'
import { MdEditNote } from 'react-icons/md';
import { Button, Input, LinkApp } from '../../ui';
import styles from './signUp.module.css'
import { useReducer, useState } from 'react';

const userInit = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const userReducer = (state, action) => {
    const { type, payload } = action
    console.log(state);
    switch (type) {
        case "USER_NAME":
            return {
                ...state,
                name: payload
            }
        case "USER_EMAIL":
            return {
                ...state,
                email: payload
            }
        case "USER_PASSWORD":
            return {
                ...state,
                password: payload
            }
        case "USER_CONFIRM_PASSWORD":
            return {
                ...state,
                confirmPassword: payload
            }
    
        default:
            break;
    }
}

const SignUp = () => {
    const [disabledBtn, setDisabledBtn] = useState(false) 
    const [userInformation, dispatch] = useReducer(userReducer, userInit) 

    const changeNameHandler = (value) => {
        dispatch({ type: 'USER_NAME', payload: value.trim().toLowerCase() })
    }
    const changeEmailHandler = (value) => {
        dispatch({ type: 'USER_EMAIL', payload: value.trim().toLowerCase() })
    }
    const changePasswordHandler = (value) => {
        dispatch({ type: 'USER_PASSWORD', payload: value.trim().toLowerCase() })
    }
    const changeConfirmPasswordHandler = (value) => {
        dispatch({ type: 'USER_CONFIRM_PASSWORD', payload: value.trim().toLowerCase() })
    }
    const checkPassword = ( password, confirmPassword ) => password === confirmPassword

    const sentData = (e) => {
        e.preventDefault()
        const {password, confirmPassword} = userInformation
        const isTrue = checkPassword( password, confirmPassword )
        if(isTrue) {
            console.log(userInformation);
            axios.post(`http://localhost:5000/sign-up`, userInformation)
        } else {
            console.log('error');
        }
    }

    return ( 
        <section className={styles.sign__up}>
            <div className={styles.sign__up__field}>
                <div className={styles.register__box}>
                    <h1 style={{textAlign: 'center'}}>Sign Up to JA_Blogs</h1>
                    <form onSubmit={sentData}>
                        <Input title={'name'} type={'text'} changeHandlerFn={changeNameHandler} />
                        <Input title={'email'} type={'email'} changeHandlerFn={changeEmailHandler} />
                        <Input title={'password'} type={'password'} changeHandlerFn={changePasswordHandler} />
                        <Input title={'confirm_password'} type={'password'} changeHandlerFn={changeConfirmPasswordHandler} />
                        <div className="field" style={{width: '100%', marginTop: '20px', alignItems: 'end'}}>
                            <LinkApp title={'Already has a account'} link={'sign-in'} />
                            <Button disabled={disabledBtn} title={'sign up'} type={'primary'} icon={<MdEditNote size={'20px'} />} clickHandlerFn={sentData}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default SignUp;