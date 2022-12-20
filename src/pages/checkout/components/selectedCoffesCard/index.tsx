import { Trash, Plus, Minus } from 'phosphor-react'
import { CoffeListContext } from '../../../../contexts/CoffeListContext'
import { useContext, useState } from 'react'
import { SelectedCoffeCardContainer, SelectedCoffe } from './style'
export function SelectedCoffesCard({ handleSubmit }: any) {
  const {
    listOfSelectedCoffes,
    addOneCoffeFromCart,
    removeOneCoffeFromHomePage,
    deleteTypeOfCoffe,
  } = useContext(CoffeListContext)
  const delivery = 3.5
  const [totalOfItens, setTotalOfItens] = useState<number>(
    (totalOfItens = 0) => {
      if (listOfSelectedCoffes.length === 0) {
        return 0
      }
      listOfSelectedCoffes.map((item) => {
        return (totalOfItens = totalOfItens + item.numberOfTypeCoffe)
      })
      return totalOfItens
    },
  )
  const [totalOfBill, setTotalOfbill] = useState<number>((totalOfBill = 0) => {
    if (listOfSelectedCoffes.length === 0) {
      return 0
    }
    listOfSelectedCoffes.map((item) => {
      return (totalOfBill = totalOfBill + item.value * item.numberOfTypeCoffe)
    })
    return totalOfBill
  })

  function handleAddOneCoffe(
    name: string,
    numberOfCoffe: number,
    coffeValue: number,
  ) {
    addOneCoffeFromCart(name, numberOfCoffe)
    setTotalOfItens(totalOfItens + 1)
    setTotalOfbill(totalOfBill + coffeValue)
  }

  function handleRemoveOneCoffe(
    name: string,
    numberOfCoffe: number,
    coffeValue: number,
  ) {
    removeOneCoffeFromHomePage(name, numberOfCoffe)
    setTotalOfItens(totalOfItens - 1)
    setTotalOfbill(totalOfBill - coffeValue)
  }
  return (
    <SelectedCoffeCardContainer>
      {listOfSelectedCoffes.map((coffe, index) => {
        return (
          <SelectedCoffe key={String(new Date().getMilliseconds) + `${index}`}>
            <img src={coffe.image} alt="" />
            <div>
              <div className="coffeNameAndValue">
                <p>{coffe.name}</p>
                <span>
                  {`R$ ${(coffe.value * coffe.numberOfTypeCoffe).toFixed(
                    2,
                  )}`.replace('.', ',')}
                </span>
              </div>

              <div className="quantityOfAndRemoveContainer">
                <div className="quantityOf">
                  <Minus
                    onClick={() => {
                      handleRemoveOneCoffe(
                        coffe.name,
                        coffe.numberOfTypeCoffe,
                        coffe.value,
                      )
                    }}
                    size={12}
                  />
                  {coffe.numberOfTypeCoffe}
                  <Plus
                    onClick={() =>
                      handleAddOneCoffe(
                        coffe.name,
                        coffe.numberOfTypeCoffe,
                        coffe.value,
                      )
                    }
                    size={12}
                  />
                </div>
                <button
                  onClick={() => deleteTypeOfCoffe(coffe.name)}
                  type="button"
                >
                  <Trash size={15} />
                  REMOVER
                </button>
              </div>
            </div>
          </SelectedCoffe>
        )
      })}
      <footer>
        <div>
          <label>Total de itens</label>
          <p>{totalOfItens}</p>
        </div>
        <div>
          <label>Entrega</label>
          <p>{`R$ ${delivery}0`.replace('.', ',')}</p>
        </div>
        <div className="total">
          <label>Total</label>
          <p>{`R$ ${(totalOfBill + delivery).toFixed(2)}`.replace('.', ',')}</p>
        </div>

        <button onClick={handleSubmit}>CONFIRMAR PEDIDO</button>
      </footer>
    </SelectedCoffeCardContainer>
  )
}
