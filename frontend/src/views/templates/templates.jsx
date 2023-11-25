import { MdSmartButton } from 'react-icons/md';
import { TitleName } from '../../components';
import stl from './templates.module.css';
import { Button } from '../../ui';
import { FaIcons } from 'react-icons/fa';

const Templates = () => {
    return (
        <section className={stl.template__field}>
            <div className="container">
                <TitleName title={'buttons'} icon={<MdSmartButton size={'2.4rem'} />} path={'template-detail/'} />
                <div className="field" style={{ padding: '2rem', justifyContent: 'start', gap: '2rem' }}>
                    <Button title={'primary'} type={'btn primary'} />
                    <Button title={'secondary'} type={'btn secondary'} />
                    <Button title={'primary&icon'} type={'btn primary'} icon={<FaIcons size={'1rem'} />} />
                    <Button title={'secondary&icon'} type={'btn secondary'} icon={<FaIcons size={'1rem'} />} />
                    {/* <Button title={'secondary'} type={'btn secondary'} /> */}
                </div>
            </div>
        </section>
    );
}

export default Templates;