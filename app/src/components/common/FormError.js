import React from 'react'

const FormError = ({ element }) => (element.touched && element.invalid) ? (<span className='text-danger pull-left'> {element.error} </span>) : (<span />)

export default FormError
