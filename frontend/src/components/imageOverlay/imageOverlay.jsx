import stl from './imageOverlay.module.css'

const ImageOverlay = ({ data }) => {
    return (
        <div className={stl.image__overlay}>
            <img src={data?.image} alt="image" />
        </div>
    );
}

export default ImageOverlay;