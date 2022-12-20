import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { andressFormData } from '../checkout'
import { SucessContainer } from './style'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import sucessimage from '../../assets/SucessPurchase/sucessImage.png'
export function Sucess() {
  const [purchaseDetails, setPurchaseDetails] = useState<andressFormData>(
    {} as andressFormData,
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('@Coffe-Delivery:payment-1.0.0')) {
      const dataPaymentStorage: any = localStorage.getItem(
        '@Coffe-Delivery:payment-1.0.0',
      )
      localStorage.removeItem('@Coffe-Delivery:coffe-list-1.0.0')
      setPurchaseDetails(JSON.parse(dataPaymentStorage))
      console.log(purchaseDetails)
    } else {
      navigate('/')
    }
  }, [setPurchaseDetails, navigate, purchaseDetails])
  return (
    <SucessContainer>
      <div>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="border">
          <ul>
            <li>
              <MapPin
                className="firstIcon"
                size={32}
                color="#fff"
                weight="fill"
              />
              <div>
                <p>
                  Entrega{' '}
                  <strong>
                    {purchaseDetails.street}, {purchaseDetails.number}
                  </strong>{' '}
                </p>
                <p>
                  {purchaseDetails.district} - {purchaseDetails.city},{' '}
                  {purchaseDetails.UF}
                </p>
              </div>
            </li>
            <li>
              <Timer
                className="secondIcon"
                size={32}
                color="#fff"
                weight="fill"
              />
              <div>
                <p> Previsão de entrega</p>{' '}
                <p>
                  {' '}
                  <strong> 20 min - 30 min</strong>{' '}
                </p>
              </div>
            </li>
            <li>
              <CurrencyDollar
                className="thirdIcon"
                size={32}
                color="#fff"
                weight="fill"
              />
              <div>
                <p> Pagamento na entrega</p>{' '}
                <p>
                  <strong> {purchaseDetails.paymentMethod} </strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img src={sucessimage} alt="" />
    </SucessContainer>
  )
}
