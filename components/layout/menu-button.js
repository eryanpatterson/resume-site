import styles from './menu.module.css'
import { useState } from 'react';

const MenuButton = () => {
    const [button, setStyle] = useState(styles.button)
    const [open, setOpen] = useState(false)

    const openStyles = [styles.button, styles.open];

    function handleClick() {
        if (!open) {
            setStyle(openStyles.join(' '));
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
