import ls from 'store'

export const ASSET_TYPES = {
  'AUDIO': 'ASSET.AUDIO'
}

/*************** */
/* Local storage */
/*************** */
const getAssetPath = (type, id) => `asset.${type}.${id}`

const loadLSasset = (type, id) => ls.get(getAssetPath(type, id))

const saveLSasset = (type, id, val) => {
  ls.set(getAssetPath(type, id), val)  
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
      return loadAudio(asset)
  }
}

export const loadAssets = (assets) => {
  return Promise.all(assets.map(loadAsset))
}

/*******************************/
/* Asset type specific : AUDIO */
/*******************************/
const loadAudio = ({ id, url}) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'

    // Decode asynchronously
    request.onload = () => {
      context.decodeAudioData(request.response, (buffer) => {
        saveLSasset(buffer) // store in local storage
        resolve(buffer)
      })
    }
    request.send()
  })
}