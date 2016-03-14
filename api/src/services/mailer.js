import nodemailer from 'nodemailer'
import { ROOT_URL, MAILGUN_CONF } from '../../../config/conf'

const SENDER = 'info@mixingears.com'

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const CONF_MAIL = {
  service: 'Mailgun',
  auth: MAILGUN_CONF
}

const sendEmail = ({ email, subject, text, html }) => {
  const mailer = nodemailer.createTransport(CONF_MAIL)
  let mailOpts = {
    from: SENDER,
    to: email,
    subject: subject,
    text: text
  }
  if (html) {
    mailOpts.html = html
  }
  console.log('send mail to ', email)
  return mailer.sendMail(mailOpts)
}

export const sendEmailValidation = ({ email, emailConfirmationToken }) => {
  const subject = 'MixingEars: email validation'
  const text = `Please confirm your email : ${ROOT_URL}/validation?email=${email}&token=${emailConfirmationToken}`
  return sendEmail({
    email,
    subject,
    text
  })
}
