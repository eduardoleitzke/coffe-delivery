import { HeaderContainer, LocationAndCartContainer } from './style'
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoMark from '../../assets/Header/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeListContext } from '../../contexts/CoffeListContext'
export function Header() {
  const [itensOnCartIcon, setItensOnCartIcon] = useState(0)
  const { listOfSelectedCoffes } = useContext(CoffeListContext)
  useEffect(() => {
    if (listOfSelectedCoffes.length > 0) {
      setItensOnCartIcon(0)
      setItensOnCartIcon((value) => {
        listOfSelectedCoffes.map((item) => {
          return (value = value + item.numberOfTypeCoffe)
        })
        return value
      })
    } else {
      setItensOnCartIcon(0)
    }
  }, [listOfSelectedCoffes])
  return (
    <HeaderContainer>
      <img src={LogoMark} alt="" />
      <LocationAndCartContainer>
        <div>
          <MapPin weight="fill" size={24} /> <p>Porto Alegre, RS</p>
        </div>

        <NavLink to="/checkout" title="carrinho">
          <ShoppingCart weight="fill" size={24} />
          {itensOnCartIcon > 0 ? <div>{itensOnCartIcon}</div> : <></>}
        </NavLink>
      </LocationAndCartContainer>
    </HeaderContainer>
  )
}
