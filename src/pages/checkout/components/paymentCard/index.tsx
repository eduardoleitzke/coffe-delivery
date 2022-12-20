import { CardHeader } from '../andressCard/style'
import { PaymentCardContainer } from './style'
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import React, { useState } from 'react'
export function PaymentCard({ setValue, register }: any) {
  const [verifyOneActiveButton, setVerifyOneActiveButton] = useState('')
  function choicePaymentValue(event: any) {
    const newPaymentValue = event.target.value
    console.log(newPaymentValue)
    setVerifyOneActiveButton(newPaymentValue)
    setValue('paymentMethod', newPaymentValue)
  }
  return (
    <PaymentCardContainer>
      <CardHeader iconsColor="purple">
        <span>
          <CurrencyDollar size={24} />
          Pagamento
        </span>
        <p>
          Pagamento O pagamento é feito na entrega. Escolha a forma que deseja
          pagar
        </p>
      </CardHeader>
      <div>
        <button
          type="button"
          className={verifyOneActiveButton === 'creditCard' ? 'active' : ''}
          value="creditCard"
          onClick={choicePaymentValue}
        >
          <CreditCard size={20} />
          CARTÃO DE CRÉDITO
        </button>
        <button
          type="button"
          onClick={choicePaymentValue}
          className={verifyOneActiveButton === 'debitCard' ? 'active' : ''}
          value="debitCard"
        >
          <Bank size={20} />
          CARTÃO DE DÉBITO
        </button>
        <button
          type="button"
          className={verifyOneActiveButton === 'money' ? 'active' : ''}
          value="money"
          onClick={choicePaymentValue}
        >
          <Money size={20} />
          DINHEIRO
        </button>
        <input type="hidden" {...register('paymentMethod')} />
      </div>
    </PaymentCardContainer>
  )
}
