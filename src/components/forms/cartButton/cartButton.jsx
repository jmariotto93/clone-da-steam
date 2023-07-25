import { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'

import styles from './cartButton.module.css'
import CartMenu from '@/components/cartMenu/cartmenu'

export default function CartButton ({cart, onRemove}) {
    const [open, setOpen] = useState(false)

    return (
        <div>
           <BsCart4 
           className={styles.icon} 
           size={40} 

           onClick={() => {setOpen(!open)}}
           />
           {open && <CartMenu cart={cart} onRemove={onRemove} />}
        </div>
    )
}