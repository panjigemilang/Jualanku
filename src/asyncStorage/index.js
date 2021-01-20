import AsyncStorage from "@react-native-community/async-storage"

export const keys = {
  uuid: "uuid",
}

const setAsyncStorage = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, item)
  } catch (error) {
    console.log("Something happened when set async storage", error)
  }
}

const getAsyncStorage = async (key, item) => {
  try {
    const value = await AsyncStorage.getItem(key, item)

    return value ? value : null
  } catch (error) {
    console.log("Something happened when get async storage", error)
    return null
  }
}

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.log("something happened when clearing async storage", error)
  }
}

export { setAsyncStorage, getAsyncStorage, clearAsyncStorage }
