import { Check, Circle } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import styles from './CheckButton.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    checked: boolean
}

export function CheckButton({ checked, ...props }: Props) {
    return (
        <>
            {checked ?
                <button className={styles.checked} {...props}>
                    <span className={styles.checkedSpan}><Check size={12} /></span>
                </button>
                :
                <button className={styles.unchecked} {...props}>
                    <Circle size={24}/>
                </button>
            }
        </>
    )
}