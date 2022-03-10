import { BANK, POWER } from "./config";
import { createAudioElement } from "./model";
import App from "./view";

const audioData = {
  volume: 50,
  bankNote: true,
};
const controlPower = function () {
  App._handlePowerKey(POWER);
};

const controlVolume = function (volume: number) {
  audioData.volume = volume;
};

const controlBank = function () {
  audioData.bankNote = audioData.bankNote ? false : true;
};
const controlNoteBtn = function (noteBtn: string) {
  BANK[audioData.bankNote ? 0 : 1].forEach((note, i) => {
    if (noteBtn.toUpperCase() == note.keyTrigger) {
      createAudioElement(BANK[audioData.bankNote ? 0 : 1][i], audioData.volume);
      App._previewTextChange(BANK[audioData.bankNote ? 0 : 1][i].id);
    }
  });
};
controlPower();

App._volumeChange(controlVolume);
App._noteBtnClick(controlNoteBtn);
App._handleBankChanged(controlBank);
App._handleKeyboardClick();
