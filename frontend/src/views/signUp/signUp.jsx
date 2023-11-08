import { MdEditNote } from 'react-icons/md';
import { Button, Input, LinkApp } from '../../ui';
import styles from './signUp.module.css'

const SignUp = () => {

    const changeNameHandler = (value) => {
        console.log(value);
    }

    const sentData = () => {
        console.log(sentData)
    }

    return ( 
        <section className={styles.sign__up}>
            <div className={styles.sign__up__field}>
                <div className={styles.register__box}>
                    <h1 style={{textAlign: 'center'}}>Sign Up to JA_Blogs</h1>
                    <form>
                        <Input title={'name'} type={'text'} changeHandlerFn={changeNameHandler} />
                        <Input title={'email'} type={'email'} changeHandlerFn={changeNameHandler} />
                        <Input title={'password'} type={'password'} changeHandlerFn={changeNameHandler} />
                        <Input title={'confirm_password'} type={'password'} changeHandlerFn={changeNameHandler} />
                        <div className="field" style={{width: '100%', marginTop: '20px', alignItems: 'end'}}>
                            <LinkApp title={'Already has a account'} link={'sign-in'} />
                            <Button title={'sign up'} type={'primary'} icon={<MdEditNote size={'20px'} />} clickHandlerFn={sentData}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default SignUp;