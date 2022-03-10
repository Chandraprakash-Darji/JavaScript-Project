export const createAudioElement = function (bank: any, audioVolume: number) {
  const track = document.createElement("audio");
  track.src = bank.url;
  track.volume = audioVolume / 100;
  track.play();
};
