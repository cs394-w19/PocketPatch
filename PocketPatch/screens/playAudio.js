import { Audio } from "expo";

const playAudio = async function(file) {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require("string.wav"));
    await soundObject.playAsync();
  } catch (error) {
    console.log(error);
  }
};

export default playAudio;
