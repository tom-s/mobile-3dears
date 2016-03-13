import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

export const validate = (values) => {
  const errors = {}
  const minPasswordLength = 5

  // Retrieve values
  const { email = '', password = '' } = values

  // Check validity
  if (!email.trim()) {
    errors.email = 'Please type an email'
  }
  if (!isEmail(email)) {
    errors.email = 'Please type a valid email'
  }
  if (!password.trim()) {
    errors.password = 'Please type a password'
  }
  if (!isLength(password, { min : minPasswordLength })) {
    errors.password = `Password should be at least ${minPasswordLength} characters long`
  }

  return errors
}
