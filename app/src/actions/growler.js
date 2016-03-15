/*
 * action types
 */
export const GROWLER__SHOW = 'GROWLER__SHOW'
export const GROWLER__HIDE = 'GROWLER__HIDE'
export const GROWLER__HIDED = 'GROWLER__HIDED'

let hideTimeOut
let hiddenTimeOut

/*
 * action creators
 */
export const hideGrowler = () => {
  return (dispatch) => {
    dispatch({ type: GROWLER__HIDE })
    clearTimeout(hiddenTimeOut)
    clearTimeout(hideTimeOut)
    hiddenTimeOut = window.setTimeout(() => {
      dispatch({
        type: GROWLER__HIDED
      })
    }, 500)
  }
}

export const hideTimeOutGrowler = (growler, time) => {
  const timeoutTime = time || 3000
  return (dispatch) => {
    if (growler && growler.status === 'show') {
      clearTimeout(hideTimeOut)
      hideTimeOut = window.setTimeout(() => {
        dispatch({
          type: GROWLER__HIDE
        })
      }, timeoutTime)
    }
  }
}

export const showGrowler = (text, type) => {
  return {
    type: GROWLER__SHOW,
    growler: {
      text,
      type
    }
  }
}

export const showGrowlerSuccess = (text) => {
  return {
    type: GROWLER__SHOW,
    growler: {
      text,
      type: 'growler--success'
    }
  }
}

export const showGrowlerError = (text) => {
  return {
    type: GROWLER__SHOW,
    growler: {
      text,
      type: 'growler--error'
    }
  }
}
