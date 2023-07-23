import Image from 'next/image'

import styles from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard( {image, title, category, fullPrice} ) {
    return(
        <div className={styles.gamecard}>
          <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={155}/>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category}</p>
            <div className={styles.pricing}>
                <h2 className={styles.price}>R${fullPrice}</h2>
                <Button>Adicionar ao carinho</Button>
            </div>
          </div>
        </div>
    )
}

GameCard.defaultProps = {
  image: 'watch-dogs.jpg',
  title: 'Watch Dogs',
  category: 'Ação, estratégia, multijogador',
  fullPrice: '99,90'
}