function counter(){
    let input = document.querySelector(".inputItem");

let vowels = document.querySelector(".answer");

let btn = document.querySelector(".btn");

let deleteBtn = document.querySelector(".delete")

btn.addEventListener("click", () => {
    let inputAttri = input.value;
    let count = 0;
    for(val of inputAttri){
        
        if(val === "a" || val === "A"){
            count++;

        }else if(val === "e" || val === "E"){
            count++;
        }else if(val === "i" || val === "I"){
            count++;
        }else if(val === "o" || val === "O"){
            count++;
        }else if(val === "u" || val === "U"){
            count++;
        }
        

        vowels.innerHTML = `Vowels of : ${inputAttri} = ${count}`;
        
    }

    if(count === 0){
        vowels.style.opacity = 0;
    }else{
        vowels.style.opacity = 1;
    }
});


deleteBtn.addEventListener("click", () => {
    vowels.innerHTML = "";
    vowels.style.opacity = 0;
    input.value = "";
})
}

counter();