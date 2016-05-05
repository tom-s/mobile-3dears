import exercise from '../fixtures/exercise' // fake exercise
import assets from '../fixtures/assets'
import { pipe, map, prop, flatten, uniq, propEq, find } from 'ramda'

const findAsset = (assetId) => find(propEq('id', assetId))(assets)

const extractAssetsFromQuestions = pipe(
  map(prop('sources')),
  flatten,
  map(prop('assetId')),
  uniq,
  map(findAsset)
)

export const getExercise = () => {
  // Extract exercise assets
  const assets = extractAssetsFromQuestions(exercise)
  return {
    assets,
    exercise
  }
}