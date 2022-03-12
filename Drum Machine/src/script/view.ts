class App {
  _keyContainer = document.querySelector(".keyContainer");
  _allbtn = document.querySelectorAll(".drum-pad");
  _powerKey = document.querySelector("#PowerKey");
  _previewText = document.querySelector(".previewText");
  _volumeSlider = document.querySelector("#volumeSlider");
  _bankKey = document.querySelector("#bankKey");

  _handlePowerKey(powerStatus: boolean) {
    this._powerKey?.addEventListener("change", () => {
      powerStatus = !powerStatus;
      this._appStatus(powerStatus);
    });
  }
  _handleBankChanged(handler: Function) {
    this._bankKey?.addEventListener("click", () => {
      handler();
    });
  }
  _handleKeyboardClick() {
    document.addEventListener("keydown", (e) => {
      // console.log(e.key);
      const btnThatGonnaClicked = this._keyContainer?.querySelector(
        `[id = "${e.key.toUpperCase()}"]`
      );
      (btnThatGonnaClicked as HTMLElement)?.click();
    });
  }
  _appStatus(powerStatus: boolean) {
    if (powerStatus) {
      (this._volumeSlider as HTMLButtonElement)!.disabled = false;
      (this._previewText as HTMLButtonElement)!.disabled = false;
      (this._bankKey as HTMLButtonElement)!.disabled = false;
      this._allbtn!.forEach(
        (btn) => ((btn as HTMLButtonElement)!.disabled = false)
      );
    } else {
      (this._volumeSlider as HTMLButtonElement)!!.disabled = true;
      (this._previewText as HTMLButtonElement)!!.disabled = true;
      (this._bankKey as HTMLButtonElement)!!.disabled = true;
      this._allbtn!.forEach(
        (btn) => ((btn as HTMLButtonElement).disabled = true)
      );
    }
  }

  _volumeChange(handler: Function): void {
    this._volumeSlider?.addEventListener("input", (e) => {
      this._previewTextChange(
        `Volume ${(e.target as HTMLButtonElement).innerText}`
      );
      handler((e.target as HTMLButtonElement).value);
      setTimeout(() => {
        this._previewText!.innerHTML = `Play Music`;
      }, 2000);
    });
  }

  _noteBtnClick(handler: Function) {
    this._keyContainer?.addEventListener("click", (e) => {
      const pressedBtn = (e.target as HTMLButtonElement).closest(".drum-pad");
      if (!pressedBtn) return;
      const btnvalue = (pressedBtn as HTMLElement).id;
      handler(btnvalue);
    });
  }
  _previewTextChange(msg: string) {
    this._previewText!.textContent = msg;
  }
}

export default new App();
