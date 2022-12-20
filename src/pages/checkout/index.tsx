import emptyCart from '../../assets/Checkout/emptyCart/emptyCart.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeListContext } from '../../contexts/CoffeListContext'
import { CheckoutEmptyContainer, CheckoutContainer } from './style'
import { AndressCard } from './components/andressCard'
import { PaymentCard } from './components/paymentCard'
import { SelectedCoffesCard } from './components/selectedCoffesCard'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const andressFormValidationSchema = zod.object({
  cep: zod.string().min(9, 'CEP Inválido').max(9, 'CEP Inválido'),
  street: zod.string().min(5).max(40),
  number: zod.string().max(5),
  complement: zod.string().optional(),
  district: zod.string().min(3),
  city: zod.string().min(3),
  UF: zod.enum([
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]),
  paymentMethod: zod.enum(['debitCard', 'creditCard', 'money']),
})
export type andressFormData = zod.infer<typeof andressFormValidationSchema>
export function Checkout() {
  const navigate = useNavigate()
  const { listOfSelectedCoffes } = useContext(CoffeListContext)

  const andressForm = useForm<andressFormData>({
    resolver: zodResolver(andressFormValidationSchema),
  })
  const { register, handleSubmit, setValue, watch } = andressForm
  function paymentRequest(data: andressFormData) {
    if (data) {
      const dataItens = JSON.stringify(data)
      localStorage.setItem('@Coffe-Delivery:payment-1.0.0', dataItens)
      navigate('/sucess')
    }
  }
  //   console.log(formState.errors)
  return (
    <div>
      {listOfSelectedCoffes.length === 0 ? (
        <CheckoutEmptyContainer>
          <p>Ops! Parece que seu carrinho está vazio :(</p>
          <img src={emptyCart} alt="" />
          <button>
            <a href="/">VOLTAR</a>
          </button>
        </CheckoutEmptyContainer>
      ) : (
        <CheckoutContainer onSubmit={handleSubmit(paymentRequest)}>
          <div>
            <h4>Complete seu pedido</h4>
            <AndressCard watch={watch} register={register}></AndressCard>
            <PaymentCard setValue={setValue} register={register}></PaymentCard>
          </div>
          <div>
            <h4>Cafés selecionados</h4>
            <SelectedCoffesCard
              handleSubmit={handleSubmit}
            ></SelectedCoffesCard>
          </div>
        </CheckoutContainer>
      )}
    </div>
  )
}
