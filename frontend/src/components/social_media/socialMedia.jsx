import { Link } from "react-router-dom";

const SocialMedia = ({ s_media }) => {
    return ( 
        <div className="social__media">
            <div className="field" style={{gap: '2rem'}}>
                {
                    s_media.map(media => <Link key={media.id}>
                        <span className="icon">{media.title}</span>
                    </Link>)
                }
            </div>
        </div>
     );
}
 
export default SocialMedia;