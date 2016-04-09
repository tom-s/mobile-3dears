import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  position: { type: Boolean, require: true, unique: true, index: true },
  name: { type: String, require: true, unique: true, index: true },
  _trainings:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Training'
    }
  ],
  _exams:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    }
  ]
}, {
  timestamps: true
})

export default mongoose.model('Course', CourseSchema)
