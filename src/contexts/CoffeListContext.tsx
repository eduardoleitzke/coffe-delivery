import { ReactNode, createContext, useState, useEffect } from 'react'
export interface CurrentCoffeType {
  id: string
  name: string
  image: string
  value: number
  numberOfTypeCoffe: number
}
interface CoffeListContextType {
  listOfSelectedCoffes: CurrentCoffeType[]
  addOneCoffeFromHomePage: (
    name: string,
    value: number,
    image: string,
    numberOfTypeCoffe: number,
  ) => void
  removeOneCoffeFromHomePage: (name: string, numberOfTypeCoffe: number) => void
  addOneCoffeFromCart: (name: string, numberOfTypeCoffe: number) => void
  deleteTypeOfCoffe: (name: string) => void
}

export const CoffeListContext = createContext({} as CoffeListContextType)
interface CoffeListContextProviderType {
  children: ReactNode
}
export function CoffeListProvider({ children }: CoffeListContextProviderType) {
  const [listOfSelectedCoffes, setListOfSelectedCoffe] = useState<
    CurrentCoffeType[]
  >(() => {
    const currentCoffeStorage = localStorage.getItem(
      '@Coffe-Delivery:coffe-list-1.0.0',
    )
    if (currentCoffeStorage === null) {
      return []
    } else {
      return JSON.parse(currentCoffeStorage)
    }
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(listOfSelectedCoffes)
    localStorage.setItem('@Coffe-Delivery:coffe-list-1.0.0', stateJSON)
  }, [listOfSelectedCoffes])

  function removeOneCoffeFromHomePage(name: string, numberOfTypeCoffe: number) {
    if (numberOfTypeCoffe === 1) {
      deleteTypeOfCoffe(name)
    } else if (numberOfTypeCoffe > 1) {
      console.log('teste')
      setListOfSelectedCoffe(
        listOfSelectedCoffes.map((coffe) => {
          if (coffe.name === name) {
            return { ...coffe, numberOfTypeCoffe: numberOfTypeCoffe - 1 }
          }
          return coffe
        }),
      )
    }

    console.log(listOfSelectedCoffes)
  }

  function deleteTypeOfCoffe(name: string) {
    setListOfSelectedCoffe(
      listOfSelectedCoffes.filter((coffe) => {
        return coffe.name !== name
      }),
    )
  }

  function addOneCoffeFromHomePage(
    name: string,
    value: number,
    image: string,
    numberOfTypeCoffe: number,
  ) {
    const id = String(new Date().getTime())
    if (numberOfTypeCoffe === 0) {
      setListOfSelectedCoffe([
        ...listOfSelectedCoffes,
        { id, name, image, value, numberOfTypeCoffe: numberOfTypeCoffe + 1 },
      ])
    } else if (listOfSelectedCoffes.length >= 1) {
      console.log(listOfSelectedCoffes.length)
      setListOfSelectedCoffe(
        listOfSelectedCoffes.map((coffe) => {
          if (coffe.name === name) {
            return { ...coffe, numberOfTypeCoffe: numberOfTypeCoffe + 1 }
          }
          return coffe
        }),
      )
    }
  }

  function addOneCoffeFromCart(name: string, numberOfTypeCoffe: number) {
    setListOfSelectedCoffe(
      listOfSelectedCoffes.map((coffe) => {
        if (coffe.name === name) {
          return { ...coffe, numberOfTypeCoffe: numberOfTypeCoffe + 1 }
        }
        return coffe
      }),
    )
  }

  return (
    <CoffeListContext.Provider
      value={{
        addOneCoffeFromHomePage,
        removeOneCoffeFromHomePage,
        listOfSelectedCoffes,
        addOneCoffeFromCart,
        deleteTypeOfCoffe,
      }}
    >
      {children}
    </CoffeListContext.Provider>
  )
}
