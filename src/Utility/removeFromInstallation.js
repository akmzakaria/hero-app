const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem('appList')
  if (storedAppSTR) {
    return JSON.parse(storedAppSTR)
  } else {
    return []
  }
}

const removeFromStoredApp = (id) => {
  const storedAppData = getStoredApp()
  const updatedAppList = storedAppData.filter((appId) => appId !== id)
  localStorage.setItem('appList', JSON.stringify(updatedAppList))
}

export { removeFromStoredApp, getStoredApp }
