import styles from './menu.module.css'
import { useState } from 'react';

const MenuButton = () => {
    const [button, setButton] = useState(styles.button)
    const [open, setOpen] = useState(false)

    const btnStyles = [styles.button, styles.open];

    function handleClick() {
        if (!open) {
            setButton(openStyles.join(' '));
            setOpen(true)
        } else {
            setStyle(styles.button);
            setOpen(false)
        }
    }


    return (
        <div className={button} onClick={handleClick}>
            <div className={styles.burger}></div>
        </div>
    )
}


export default MenuButton;
