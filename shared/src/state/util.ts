import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtomEffect, DefaultValue } from "recoil";

export function getLocalStorageEffect<T>(key: string): AtomEffect<T> {
  return ({ setSelf, onSet }) => {
    const storageKey = `Navtrack:${key}`;

    setSelf(
      AsyncStorage.getItem(storageKey).then((savedValue) => {
        try {
          return savedValue != null && savedValue !== undefined
            ? JSON.parse(savedValue)
            : new DefaultValue();
        } catch (SyntaxError) {
          return new DefaultValue();
        }
      })
    );

    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(storageKey)
        : AsyncStorage.setItem(storageKey, JSON.stringify(newValue));
    });
  };
}
