import ls from 'store'

export const ASSET_TYPES = {
  'AUDIO': 'ASSET.AUDIO'
}

/*************** */
/* Local storage */
/*************** */
const getAssetPath = (type, id) => `asset.${type}.${id}`

const loadLSasset = (type, id) => (ls.enabled) ? ls.get(getAssetPath(type, id)) : null
  
const saveLSasset = (type, id, val) => {
  if (ls.enabled) ls.set(getAssetPath(type, id), val)  
}

/********* */
/* Generic */
/********* */
const loadAsset = (asset) => {
  const { id, type } = asset
  // Get it from localStorage if possible
  const loadedAsset = loadLSasset(type, id)
  if (loadedAsset) return new Promise((resolve, reject) => resolve(loadedAsset))    
  
  // Otherwise do specific loading
  switch (type) {
    case ASSET_TYPES.AUDIO:
      return loadAudio(asset).then(saveLSasset)
  }
}

export const loadAssets = (assets) => {
  return Promise.all(assets.map(loadAsset))
}

/*******************************/
/* Asset type specific : AUDIO */
/*******************************/
// TODO: replace with fetch
const loadAudio = ({ id, url}) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'

    // Decode asynchronously
    request.onload = () => {
      context.decodeAudioData(request.response, (buffer) => {
        resolve(buffer)
      })
    }
    request.send()
  })
}