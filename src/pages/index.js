import { useState } from 'react'
import Head from 'next/head'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import styles from '@/styles/index.module.css'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])
  
  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }
  
  const handleRemoveproduct = (pos) => {
    setCart(cart.filter((obj, posObj)=> posObj !== pos))
  }



  return (
    <>
      <Head>
        <title>Steam: A sua loja online de games</title>
        <meta name="description" content="Steam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveproduct} />

        <Container> 
          <div className={styles.session}>
            <Subtitle> Promoções </Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard 
                image={'battlefield 1.jpg'}
                discount='-40%'
                fullPrice='80,00'
                discountPrice='48,00'
                onAdd={() => 
                handleAddProduct({name: 'Battlefield 1', price:48.00 , image:'battlefield 1.jpg'})
                }
              />
              
              <SaleCard 
                image='the witcher.png'
                discount='-50%'
                fullPrice='100,00'
                discountPrice='50,00'
                onAdd={() => 
                handleAddProduct({name: 'The Witcher', price:50.00, image:'the witcher.png'})
                }
              />
              <SaleCard 
                image='warzone.jpg'
                discount='0%'
                fullPrice='00,00'
                discountPrice=' Jogue agora!'
                onAdd={() => 
                handleAddProduct({name: 'Warzone', price: 0.0, image:'warzone.jpg'})
                }
              />
              
            </div>
          </div>

          <div className={styles.session}>
            <Subtitle> Outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                image={'elden-ring.jpg'}
                title='Elden Ring'
                category='Ação, aventura e estratégia'              
                fullPrice='180,00'
                onAdd={() => 
                handleAddProduct({name: 'Elden Ring', price: 180.00, image:'elden-ring.jpg'})
                }
                />
              <GameCard
                image={'Diablo4.jpg'}
                title='Diablo IV'
                category='Ação, aventura, estratégia e RPG'              
                fullPrice='230,00'
                onAdd={() => 
                handleAddProduct({name: 'Diablo IV', price: 230.00, image:'Diablo4.jpg'})
                }
              />
              <GameCard
                image={'Sombras-de-Mordor.jpg'}
                title='Sombras de Mordor'
                category='Ação, aventura e RPG'              
                fullPrice='60,00'
                onAdd={() => 
                handleAddProduct({name: 'Sombras de Mordor', price: 60.00, image:'Sombras-de-Mordor.jpg'})
                }
              />
            </div>
          </div>       
        </Container>
      </div>
    </>
  )
}
