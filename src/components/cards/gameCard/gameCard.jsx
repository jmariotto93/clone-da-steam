import Image from 'next/image'

import styles from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard() {
    return(
        <div className={styles.gamecard}>
          <Image src='/products/watch-dogs.jpg' width={300} height={155}/>
          <div className={styles.info}>
            <h3 className={styles.title}>Watch Dogs</h3>
            <p className={styles.category}>Ação, estratégia, multijogador.</p>
            <div className={styles.pricing}>
                <h2 className={styles.price}>R$99,90</h2>
                <Button>Adicionar ao carinho</Button>
            </div>
          </div>
        </div>
    )
}