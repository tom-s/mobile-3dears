import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', require: true, unique: true, index: true },
  username: { type: String, require: false, index: false },
  password: { type: String, require: true, index: false },
  emailConfirmationToken: { type: String, default: '', require: true, unique: true, index: false },
  emailConfirmed: { type: Boolean, default: false, index: false },
  score: { type: Number, default: 0, index: false },
  powerUps:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PowerUp'
    }
  ]
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)
