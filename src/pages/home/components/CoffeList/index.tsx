import { CoffeListContainer } from './style'
import { CoffeCard } from './components/coffeCard'
import { coffeList } from './components/coffeCard/coffeListArray'
export function CoffeList() {
  return (
    <CoffeListContainer>
      <h3>Nossos cafés</h3>
      <ul>
        {coffeList.map((coffe, index) => {
          return (
            <CoffeCard
              name={coffe.name}
              value={coffe.value}
              tag={coffe.tag}
              description={coffe.description}
              image={coffe.image}
              key={String(new Date().getTime() + index)}
            />
          )
        })}
      </ul>
    </CoffeListContainer>
  )
}
