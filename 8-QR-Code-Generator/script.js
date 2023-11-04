let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("input-error");
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
      qrText.classList.add("input-error");
    }, 1000);
  }
}

qrText.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    generateQR();
  }
});
