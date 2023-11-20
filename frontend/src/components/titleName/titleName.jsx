import { FaChevronRight } from "react-icons/fa";
import { Button } from "../../ui";

import style from './titleName.module.css'

const TitleName = ({ title, icon, path }) => {
    return ( 
        <div className={style.title__field}>
            <div className="field">
                <h3 className="field" style={{width: '10%'}}>
                    <span  style={{textTransform: 'capitalize'}}>{title}</span>
                    {icon}
                </h3>
                <div className="btn_group">
                    <Button title={'view all'} icon={<FaChevronRight />} type={'primary'} link={path} />
                </div>
            </div>
        </div>
     );
}
 
export default TitleName;