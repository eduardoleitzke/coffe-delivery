import { HomeIntroContainer } from './style'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import CoffeImageIntro from '../../../../assets/Home/HomeIntro/CoffeIntro.svg'

export function HomeIntro() {
  return (
    <HomeIntroContainer>
      <div className="textContainer">
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div></div>
        <ul>
          <li>
            <div className="listHomeIntroOne">
              <ShoppingCart color="#fff" size={24} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <div className="listHomeIntroTwo">
              <Package color="#fff" size={24} weight="fill" />
            </div>

            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <div className="listHomeIntroThree">
              <Timer color="#fff" size={24} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <div className="listHomeIntroFour">
              <Coffee color="#fff" size={24} weight="fill" />
            </div>

            <span>O café chega fresquinho até você</span>
          </li>
        </ul>
      </div>
      <img className="CoffeImage" src={CoffeImageIntro} alt="" />
    </HomeIntroContainer>
  )
}
