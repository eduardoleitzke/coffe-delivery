import { HomeContainer } from './style'
import { HomeIntro } from './components/HomeIntro'
import { CoffeList } from './components/CoffeList'
export function Home() {
  return (
    <HomeContainer>
      <HomeIntro />
      <CoffeList />
    </HomeContainer>
  )
}
