import styles from './input.module.css'

const Input = ({ type = 'text', title, changeHandlerFn, value }) => {
    return ( 
        <div className={styles.input__field}>
            <label htmlFor={title}>{title}</label>
            <input
                type={type}
                name={title}
                id={title}
                value={value}
                onChange={(e) => changeHandlerFn(e.target.value)}
            />
        </div>
     );
}
 
export default Input;