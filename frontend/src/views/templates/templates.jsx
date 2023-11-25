import { MdSmartButton } from 'react-icons/md';
import { TitleName } from '../../components';
import stl from './templates.module.css';

const Templates = () => {
    return (
        <section className={stl.template__field}>
            <div className="container">
                <TitleName title={'buttons'} icon={<MdSmartButton size={'2.4rem'} />} path={'template-detail/'} />
            </div>
        </section>
    );
}

export default Templates;