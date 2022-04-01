const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
const selectColor = document.getElementById("selectColor") as HTMLInputElement;
const sizeEl = document.querySelector(".size");
const minusEl = document.querySelector(".minus");
const plusEl = document.querySelector(".plus");
const crossEl = document.querySelector(".cross");
const eraseEl = document.querySelector(".erase");

let size = 20;
let isPressed = false;
let color: string = "black";
  
let x: number | undefined;
let y: number | undefined;

let erase: boolean = false;

const ctx = canvasEl.getContext("2d");

const eraseFun = () => {
  if (erase) {
    ctx!.globalCompositeOperation = "destination-out";
    eraseEl!.textContent = "Pen";
  } else {
    ctx!.globalCompositeOperation = "source-over";
    eraseEl!.textContent = "Erase";
  }
};

const drawCircle = (x: number, y: number) => {
  ctx?.beginPath();
  eraseFun();
  ctx?.arc(x, y, size, 0, Math.PI * 2);
  ctx!.fillStyle = color;
  ctx?.fill();
};

const drawLine = (x1: number, x2: number, y1: number, y2: number) => {
  ctx?.beginPath();
  eraseFun();
  ctx?.moveTo(x1, y1);
  ctx?.lineTo(x2, y2);
  ctx!.strokeStyle = color;
  ctx!.lineWidth = size * 2;
  ctx?.stroke();
};

canvasEl.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvasEl.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvasEl.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, x2, y, y2);

    x = x2;
    y = y2;
  }
});

selectColor?.addEventListener("change", () => {
  color = selectColor.value;
});

plusEl?.addEventListener("click", () => {
  size += 5;
  sizeEl!.textContent = `${size}`;
});
minusEl?.addEventListener("click", () => {
  if (size > 5) {
    size -= 5;
    sizeEl!.textContent = `${size}`;
  }
});
crossEl?.addEventListener("click", () => {
  ctx?.clearRect(0, 0, canvasEl.width, canvasEl.height);
});

eraseEl?.addEventListener("click", () => {
  erase = !erase;
  eraseFun();
});
