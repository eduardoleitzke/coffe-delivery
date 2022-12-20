import { MapPinLine } from 'phosphor-react'

import { AndressCardContainer, CardHeader } from './style'
export function AndressCard({ register, watch }: any) {
  return (
    <AndressCardContainer>
      <CardHeader iconsColor="yellow">
        <span>
          <MapPinLine size={24} />
          Endereço de Entrega
        </span>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </CardHeader>
      <section>
        <input
          maxLength={9}
          {...register('cep')}
          placeholder="CEP"
          type="text"
          min={0}
        />
        <input
          {...register('street')}
          className="street"
          placeholder="Rua"
          type="text"
        />
        <div className="numberAndComplement">
          <input {...register('number')} placeholder="Número" type="text" />
          <input
            {...register('complement')}
            className="complement"
            placeholder="Complemento"
            type="text"
          />
        </div>
        <div className="districtCityUf">
          <input {...register('district')} placeholder="Bairro" type="text" />
          <input
            {...register('city')}
            className="city"
            placeholder="Cidade"
            type="text"
          />
          <select id="estado" {...register('UF')}>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES </option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
      </section>
    </AndressCardContainer>
  )
}
