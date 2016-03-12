import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', require: true, unique: true },
  username: { type: String, require: false },
  password: { type: String, require: true },
  emailConfirmationToken: { type: String, default: '', require: true, unique: true },
  emailConfirmed: { type: Boolean, default: false }
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)
