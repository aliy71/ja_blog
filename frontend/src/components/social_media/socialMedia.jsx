import { Link } from "react-router-dom";
import socialMediaLinks from "../../constants/socialMedia";

const SocialMedia = () => {
    return ( 
        <div className="social__media" >
            <div className="field" style={{gap: '2rem'}}>
                {
                    socialMediaLinks.map(media => <Link key={media.id}>
                        <span className="icon">{media.title}</span>
                    </Link>)
                }
            </div>
        </div>
     );
}
 
export default SocialMedia;