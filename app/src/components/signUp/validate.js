const validate = (values) => {
  const errors = {}

  // Retrieve values
  let { email, password, passwordConfirmation } = values
  email = email || ''
  password = password || ''
  passwordConfirmation = passwordConfirmation || ''

  // Check validity
  if (!email.trim()) {
    errors.email = 'Please type an email'
  }
  if (!password.trim()) {
    errors.password = 'Please type a password'
  }
  if (password && passwordConfirmation.trim() !== password.trim()) {
    errors.passwordConfirmation = 'Password confirmation must match password'
  }

  console.log('validate errors', errors)
  return errors
}

export default validate
