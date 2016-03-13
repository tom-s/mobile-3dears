export const validate = (values) => {
  const errors = {}

  // Retrieve values
  let { email = '', password = '', passwordConfirmation = '' } = values

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

  return errors
}