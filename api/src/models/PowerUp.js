import mongoose from 'mongoose'

const PowerUpSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true, index: true }
}, {
  timestamps: true
})

export default mongoose.model('PowerUp', PowerUpSchema)
