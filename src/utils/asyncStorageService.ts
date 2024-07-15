import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveItem(data: any, key: string) {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function getItem(key: string) {
  const storage = await AsyncStorage.getItem(key);

  if (storage) {
    return JSON.parse(storage);
  }

  return null;
}

export async function removeItem(key: string) {
  await AsyncStorage.removeItem(key);
}
