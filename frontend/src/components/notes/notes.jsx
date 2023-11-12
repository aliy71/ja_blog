import stl from './notes.module.css'

const Notes = ({ data }) => {
    return (
        data.map(note => {
            return (
                <div className={stl.notes}>
                    <h5>{note?.title}</h5>
                    <p className="text">{note?.text}</p>
                </div>
            )
        })
    );
}

export default Notes;