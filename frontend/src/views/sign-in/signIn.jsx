import { MdPassword } from "react-icons/md";
import { Button, Input, LinkApp } from "../../ui";
import styles from './signIn.module.css'

const SignIn = () => {
    return ( 
        <section className={styles.sign__in}>
            <div className={styles.sign__in__field}>
                <div className={styles.register__box}>
                    <h1 style={{textAlign: 'center'}} st>Sign in to JA_Blogs</h1>
                    <form >
                        <Input title={'username'} type={'text'} changeHandlerFn={''} />
                        <Input title={'password'} type={'password'} changeHandlerFn={''} />
                        <div className="field" style={{width: '100%', marginTop: '20px', alignItems: 'end'}}>
                            <LinkApp title={'has not account yet!'} link={'sign-up'} />
                            <Button title={'sign up'} type={'primary'} icon={<MdPassword size={'20px'} />} clickHandlerFn={''}/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default SignIn;