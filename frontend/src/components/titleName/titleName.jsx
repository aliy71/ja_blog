import { FaBlog, FaChevronRight } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "../../ui";

import style from './titleName.module.css'

const TitleName = ({ title }) => {
    return ( 
        <div className={style.title__field}>
            <div className="field">
                <h3 className="field" style={{width: '10%'}}>
                    <span  style={{textTransform: 'capitalize'}}>{title}</span>
                    <GiNotebook size={'24px'} color="#1f2032" />
                </h3>
                <div className="btn_group">
                    <Button title={'view all'} icon={<FaChevronRight />} type={'primary'} />
                </div>
            </div>
        </div>
     );
}
 
export default TitleName;