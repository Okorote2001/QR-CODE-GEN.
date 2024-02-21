const input = document.querySelector("#input");
const img = document.querySelector(".img");
const button = document.querySelector(".generate");

function generate(){

    if(input.value.length > 0){
        img.classList.add("QRimg");
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        input.classList.remove("enterVal");   
    }
    else{
        button.classList.add("error");
        input.classList.add("enterVal")
        setTimeout(()=>{
            button.classList.remove("error");
        }, 1000);

        setTimeout(()=>{
         input.classList.remove("enterVal");   
        }, 10000);
    }
}