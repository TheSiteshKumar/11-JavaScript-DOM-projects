let toastBox = document.getElementById("toastBox");

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
let errorMsg = `<i class="fa-solid fa-circle-exclamation"></i> Please fix the errors!`;
let invalidMsg = `<i class="fa-solid fa-triangle-exclamation"></i> Invalid Input`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  console.log(msg);

  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
    console.log(toast.classList)
  }
  if (msg.includes("error")) {
    toast.classList.add("error");
    console.log(toast.classList)
  }


    setTimeout(() => {
        toast.remove();
    }, 3000);
}
