import { ShoppingCartSimple } from 'phosphor-react'
import { BuyCardDetails, CoffeCardContainer } from './style'
import { useContext, useState } from 'react'
import {
  CoffeListContext,
  CurrentCoffeType,
} from '../../../../../../contexts/CoffeListContext'
interface CoffeCardProps {
  tag: string[]
  name: string
  description: string
  image: string
  value: number
}

export function CoffeCard(props: CoffeCardProps) {
  const [coffeCountCard, setCoffeCountCard] = useState<number>(() => {
    const currentCoffeStorage = localStorage.getItem(
      '@Coffe-Delivery:coffe-list-1.0.0',
    )
    if (currentCoffeStorage === null) {
      return 0
    } else {
      let numberOfCoffesInStorage = 0
      const parseCurrentCoffeStorage: CurrentCoffeType[] =
        JSON.parse(currentCoffeStorage)
      parseCurrentCoffeStorage.forEach((item) => {
        if (item.name === props.name) {
          numberOfCoffesInStorage = item.numberOfTypeCoffe
        }
      })
      return numberOfCoffesInStorage
    }
  })

  const { addOneCoffeFromHomePage, removeOneCoffeFromHomePage } =
    useContext(CoffeListContext)

  function handleRemoveOneCoffe() {
    if (coffeCountCard > 0) {
      setCoffeCountCard(coffeCountCard - 1)
    }
    removeOneCoffeFromHomePage(props.name, coffeCountCard)
  }

  function handleAddOneCoffe() {
    if (coffeCountCard >= 0) {
      setCoffeCountCard(coffeCountCard + 1)
    }
    addOneCoffeFromHomePage(
      props.name,
      props.value,
      props.image,
      coffeCountCard,
    )
  }
  return (
    <CoffeCardContainer>
      <img src={props.image} alt="" />
      <div className="tagContainer">
        {props.tag.map((tag, index) => {
          return (
            <p
              className="tag"
              key={String(new Date().getUTCMilliseconds()) + String(index)}
            >
              {tag}
            </p>
          )
        })}
      </div>
      <p className="name">{props.name}</p>
      <span className="description">{props.description}</span>
      <BuyCardDetails>
        <p>
          <label>R$ </label>
          {`${props.value}0`.replace('.', ',')}
        </p>
        <span>
          <div>
            <button
              onClick={coffeCountCard === 0 ? () => {} : handleRemoveOneCoffe}
            >
              -
            </button>
            {coffeCountCard}
            <button onClick={handleAddOneCoffe}>+</button>
          </div>
          <button className="shoppingIcon">
            <ShoppingCartSimple weight="fill" color="#fff" size={20} />
          </button>
        </span>
      </BuyCardDetails>
    </CoffeCardContainer>
  )
}
