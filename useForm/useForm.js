import { useState } from 'react'

export const useForm = (inicialForm = {}) => {
  const [formState, setFormState] = useState(inicialForm)

  // este target es una desestructuracion del evento
  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(inicialForm)
  }

  return {
    // con esto se devuelven todos los valores del formState que manda cada formulario
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
