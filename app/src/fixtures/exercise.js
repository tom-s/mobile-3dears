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


const exercise = [
  question1,
  question2
]

export default exercise