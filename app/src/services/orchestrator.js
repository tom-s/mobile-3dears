
window.AudioContext = window.AudioContext||window.webkitAudioContext

// TODO
// find a way to play original sound (dupplicate sources ?)
// faire un mechanisme pour preloader et mettre en cache les sons
// faire un loading

let context
let assets
let sources = {}
let compressors = {}

const clearContext = () => {
 context = new AudioContext()
 sources = {}
}

const playSound = (id) => {
  const { buffer } = sources[id]
  const source = context.createBufferSource() // creates a sound source
  source.buffer = buffer // tell the source which sound to play
  source.start(0)
  sources[id].source = source
}

const stopSound = (id) => {
  const { source } = sources
  source.stop()
  delete sources[id]
}

const addCompressor = (sourceId, compressionValue) => {
  const { source } = sources[sourceId]
  const compressorNode = context.createDynamicsCompressor()
  compressorNode.threshold.value = compressionValue
  source.disconnect(context.destination)
  source.connect(compressorNode)
  compressorNode.connect(context.destination)
}

const addGain = (compressorId, gainValue) => {
  const { source } = compressors[compressorId]
  const gainNode = context.createGain()
  gainNode.gain.value 
  source.disconnect(context.destination)
  source.connect(gainNode)
  gainNode.connect(context.destination)
}

const orchestrator = () => ({
  clearContext,
  playSound,
  stopSound,
  addCompressor,
  addGain
})

export default orchestrator