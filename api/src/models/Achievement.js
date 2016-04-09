import mongoose from 'mongoose'

const AchievementSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true, index: true }
}, {
  timestamps: true
})

export default mongoose.model('Achievement', AchievementSchema)
