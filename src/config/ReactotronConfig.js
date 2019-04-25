import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings aaaaaaaaaaaaaaaaaasdasdasdasdas
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
