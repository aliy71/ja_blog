import { Link } from "react-router-dom";
import socialMediaLinks from "../../constants/socialMedia";
import { Button } from "../../ui";

const SocialMedia = () => {
    return ( 
        <div className="social__media" >
            <div className="field" style={{gap: '2rem'}}>
                {
                    socialMediaLinks.map(media => {
                        return (
                            <Button key={media.id} type={'btn icon__btn btn__icon__primary'} link={media.link} icon={media.title} />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default SocialMedia;