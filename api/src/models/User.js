import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', require: true, unique: true, index: true },
  username: { type: String, require: false, index: false },
  password: { type: String, require: true, index: false },
  emailConfirmationToken: { type: String, default: '', require: true, unique: true, index: false },
  emailConfirmed: { type: Boolean, default: false, index: false },
  score: { type: Number, default: 0, index: false },
  longestCorrectAnswersStreak: { type: Number, default: 0, index: false },
  currentCorrectAnswersStreak: { type: Number, default: 0, index: false },
  powerUps:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PowerUp'
    }
  ],
  achievements:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Achievement'
    }
  ],
  trainingResults:[{
    score: { type: Number, default: 0, index: false },
    training: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Training'
    }
  }],
  examsResults:[{
    score: { type: Number, default: 0, index: false },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    }
  }],
  progress:[{
    percentage: { type: Number, default: 0, index: false },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
    },
    courseType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CourseType'
    }
  }]
}, {
  timestamps: true
})

export default mongoose.model('User', UserSchema)
