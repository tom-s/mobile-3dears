import R from 'ramda'

const question1 = {
  id: 1,
  question: 'Which sound is being compressed ? ',
  sources: [
     {
      id: 'guitar',
      compression: {
        threshold: 0
      },
      url: 'guitar.wav',
      gain: {
        value: 0
      }
    },
   {
     id: 'piano',
      compression: {
        threshold: -50
      },
      url: 'pinao.wav',
      gain: {
        value: 20
      }
    }
  ],
  correctAnswers: ['piano']
}

const question2 = {
  id: 1,
  question: 'Which sound is being compressed ? ',
  sources: [
     {
      id: 'guitar',
      compression: {
        threshold: -20
      },
      url: 'guitar.wav',
      gain: {
        value: 10
      }
    },
   {
     id: 'piano',
      compression: {
        threshold: 0
      },
      url: 'pinao.wav',
      gain: {
        value: 0
      }
    }
  ],
  correctAnswers: ['piano']
}

const questions = [
  question1,
  question2
]

const sources = R.uniq(exercise.map(exercise => exercise.sources.map(source => source)))

const exercise = {
  sources,
  questions
}

export default exercise