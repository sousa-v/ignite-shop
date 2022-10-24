import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 80,00</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ratione quibusdam a cumque eveniet veniam accusamus nostrum placeat
          porro in aut impedit quasi ipsam, ea ullam atque accusantium possimus
          iste.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
