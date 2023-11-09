import { LinkApp } from "../../ui";
import SocialMedia from "../social_media/socialMedia";
import styles from './footer.module.css'

const Footer = () => {
    return ( 
        <footer>
            <div className={styles.footer__field}>
                <div className="container">
                    <div className="field" style={{justifyContent: 'start', gap: '4rem'}}>
                        <div className="box">
                            <div className="logo">JA Blogs</div>
                            <p className="copy__right">All rights reserved by M.Aliy 2023</p>
                        </div>
                        <div className="box" style={{width: '60%'}}>
                            <div className="field" style={{alignItems: 'start',justifyContent: 'start', gap: '2rem'}}>
                                <ul>
                                    <li><b>JA blogs</b></li>
                                    <li><LinkApp title={'home'} link={''} /></li>
                                    <li><LinkApp title={'blogs'} link={'blogs'} /></li>
                                    <li><LinkApp title={'contact'} link={'contact'} /></li>
                                </ul>
                                <ul>
                                    <li><b>JA blogs</b></li>
                                    <li><LinkApp title={'ja'} link={'blogs'} /></li>
                                    <li><LinkApp title={'world'} link={'blogs'} /></li>
                                </ul>
                            </div>
                        </div>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;