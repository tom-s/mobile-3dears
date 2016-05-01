import R from 'ramda'

const allAssets = [
  {
    id: 'guitarLoop1',
    url: 'guitarLoop1.wav'
  },
  { 
    id: 'guitarLoop2',
    url: 'guitarLoop2.wav'
  },
  {
    id: 'pianoLoop1',
    url: 'pianoLoop1.wav'
  }
]

const question1 = {
  id: 1,
  question: 'Which sound is being compressed ? ',
  sources: [
     {
      id: 'guitar',
      assetId: 'guitarLoop1',
      compression: {
        threshold: 0
      },
      gain: {
        value: 0
      }
    },
    {
      id: 'piano',
      assetId: 'guitarLoop2',
      compression: {
        threshold: -50
      },
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
      assetId: 'guitarLoop1',
      compression: {
        threshold: -20
      },
      gain: {
        value: 10
      }
    },
    {
      id: 'piano',
      assetId: 'pianoLoop1',
      compression: {
        threshold: 0
      },
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

// 1 - recupère toutes les sources + uniq them + get Asset
const sources = R.uniq(
  questions.map(
    question => question.sources.map(source => source.assetId)
   )
  ).map(assetId => allAssets.find(asset => asset.id === assetId)
)

const exercise = {
  sources,
  questions
}

export default exercise