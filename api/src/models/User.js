import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', require: true, unique: true, index: true },
  username: { type: String, require: false, index: false },
  password: { type: String, require: true, index: false },
  emailConfirmationToken: { type: String, default: '', require: true, unique: true, index: false },
  emailConfirmed: { type: Boolean, default: false, index: false }
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)
