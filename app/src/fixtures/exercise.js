import { pipe, map, prop, flatten, uniq, propEq, find } from 'ramda'
import { ASSET_TYPES } from '../services/assets'

const allAssets = [
  {
    id: 'guitarLoop1',
    url: 'guitarLoop1.wav',
    type: ASSET_TYPES.AUDIO
  },
  { 
    id: 'guitarLoop2',
    url: 'guitarLoop2.wav',
    type: ASSET_TYPES.AUDIO
  },
  {
    id: 'pianoLoop1',
    url: 'pianoLoop1.wav',
    type: ASSET_TYPES.AUDIO
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

const findAsset = (assetId) => find(propEq('id', assetId))(allAssets) 

const extractAssetsFromQuestions = pipe(
  map(prop('sources')),
  flatten,
  map(prop('assetId')),
  uniq,
  map(findAsset)
)

// Extract exercise assets
const assets = extractAssetsFromQuestions(questions)

const exercise = {
  assets,
  questions
}

export default exercise