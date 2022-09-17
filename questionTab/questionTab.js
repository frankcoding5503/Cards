const CardDeck = document.querySelectorAll(".Card-question");
const BtnNext = document.querySelectorAll(".Btn-nextTab");
const index = document.querySelectorAll(".Card_index");

BtnNext.forEach((el, i) => {
    el.addEventListener('click', () => {
        CardDeck[i + 1].style.transform = 'none';
    });
});

index.forEach((el, i) => {
    el.addEventListener('click', () => {
        for(let j = index.length - 1; j > i; j--){
            let delay = 0; 
            setTimeout(()=> {CardDeck[j].style.transform = 'translateY(100%)';}, delay);
            delay += 0; //各個卡片移動是否要延遲（單位： ms）
        }
    });
});