// let  oru = {
//     soruMetni : "Hangisi seçimde aday değildir?",
//     cevapSecenekleri : {
//         a: "RTE",
//         b: "KK",
//         c: "Ogan",
//         d: "İnce"
//     },

//     dogruCevap : "d",


//     cevapKontrol : function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// let soru2 = {
//     soruMetni : "Seçim ne zaman?",
//     cevapSecenekleri : {
//         a: "14",
//         b: "15",
//         c: "13",
//         d: "12"
//     },

//     dogruCevap : "a",


//     cevapKontrol : function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// let soru3 = {
//     soruMetni : "Hangi gün?",
//     cevapSecenekleri : {
//         a: "pzr",
//         b: "cuma",
//         c: "cmt",
//         d: "pzt"
//     },

//     dogruCevap : "a",


//     cevapKontrol : function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// let soru4 = {
//     soruMetni : "saat?",
//     cevapSecenekleri : {
//         a: "17",
//         b: "8",
//         c: "21",
//         d: "24"
//     },

//     dogruCevap : "b",


//     cevapKontrol : function (cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// //#region Soru1

// document.getElementById("soru").innerHTML = soru.soruMetni;

// document.getElementsByTagName("input").innerHTML = soru.cevapSecenekleri;
// console.log(soru.soruMetni);
// console.log(soru.cevapSecenekleri);
// var cevap1 = prompt("Cevap giriniz:")
// console.log("Cevabınız: "+cevap1);
// cevap1 = soru.cevapKontrol(cevap1)
// if (cevap1) {
//     cevap1 = "Doğru";
// }
// else{
//     cevap1 = "Yanlış"
// }
// console.log(cevap1);
// //#endregion
// //#region Soru2
// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// var cevap2 = prompt("Cevap giriniz:")
// console.log("Cevabınız: "+cevap2);
// cevap2 = soru2.cevapKontrol(cevap2)
// if (cevap2) {
//     cevap2 = "Doğru";
// }
// else{
//     cevap2 = "Yanlış"
// }
// console.log(cevap2);
// //#endregion
// //#region Soru3
// console.log(soru3.soruMetni);
// console.log(soru3.cevapSecenekleri);
// var cevap3 = prompt("Cevap giriniz:")


// console.log("Cevabınız: "+cevap3);
// cevap3 = soru3.cevapKontrol(cevap3)
// if (cevap3) {
//     cevap3 = "Doğru";
// }
// else{
//     cevap3 = "Yanlış"
// }
// console.log(cevap3);

// //#endregion
// //#region Soru 4
// console.log(soru4.soruMetni);
// console.log(soru4.cevapSecenekleri);
// var cevap4 = prompt("Cevap giriniz: ");
// // cevap4 = String(cevap4);

// console.log("Cevabınız: "+cevap4);

// cevap4 = soru4.cevapKontrol(cevap4)
// if (cevap4) {
//     cevap4 = "Doğru";
// }
// else{
//     cevap4 = "Yanlış"
// }
// console.log(cevap4);


// if (cevap1 == "Doğru" && cevap2 == "Doğru" && cevap3 == "Doğru" && cevap4 == "Doğru") {
//     console.log("Tebrikler testi doğru cevaplarla tamamladınız!");
//     let value = "Tebrikler"
//     document.getElementById("soru").innerHTML = value;
// }
// else{
//     console.log("Maalesef yanlış cevabınız var");
// }
// //#endregion

function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function (cevap) {
    return cevap === this.dogruCevap;
}

let soru1 = new Soru("Hangisi bir web tarayıcısının temel bileşenlerinden biridir?",{A: "HTML",b: "CSS",c: "JavaScript", d: "Browser Engine"},"d");
let soru2 = new Soru("Seçim ne zaman?",{a:"14",b:"15",c:"13",d:"16"},"a");
let soru3 = new Soru("Hangi gün?",{a:"pzr",b:"cmt",c:"cuma",d:"salı"},"a");
let soru4 = new Soru("Saat?",{a:"17",b:"8",c:"16",d:"21"},"b");


let sorular = [
    new Soru("1-Hangisi bir web tarayıcısının temel bileşenlerinden biridir?",{A: "HTML",B: "CSS",C: "JavaScript", D: "Browser Engine"},"D"),
    new Soru("2-Hangisi web sayfalarının stilini belirlemek için kullanılan bir dil değildir?",{A:"CSS",B:"HTML",C:"JavaScript",D:"Bootstrap"},"B"),
    new Soru("3-Hangisi bir sunucu tarafı web programlama dili değildir?",{A:"PHP",B:"JavaScript",C:"Ruby",D:"Python"},"D"),
    new Soru("4-Hangisi bir web uygulamasında kullanılabilecek bir veritabanı sistemi değildir?",{A:"MySQL",B:"PostgreSQL",C:"MongoDB",D:"Java"},"D"),
    new Soru("5-Hangisi web sayfalarında ses veya video dosyalarını oynatmak için kullanılan bir etiket değildir?",{A:"< audio >",B:"< video >",C:"< media >",D:"< source >"},"C"),
    new Soru("6-Hangisi bir web sayfasında kullanılabilecek bir kullanıcı arabirimi çerçevesi değildir?",{A:"React",B:"Angular",C:"Vue",D:"JavaFX"},"D"),
    new Soru("7-Hangisi bir web sayfasında kullanılabilecek bir web sunucusu değildir?",{A:"Apache",B:"IIS",C:"Nginx",D:"Python"},"D"),
    new Soru("8-Hangisi bir web sayfasında kullanılabilecek bir JavaScript kütüphanesi veya çatısı değildir?",{A:"jQuery",B:"Angular",C:"Vue",D:"MySQL"},"D"),
    new Soru("9-Hangisi bir web sayfasında kullanılabilecek bir HTTP istemci kütüphanesi değildir?",{A:"Axios",B:"Fetch",C:"jQuery",D:"Request"},"C"),
    new Soru("10-Hangisi bir web sayfasında kullanılabilecek bir CSS çerçevesi değildir?",{A:"Bootstrap",B:"Materialize",C:"Foundation",D:"Laravel"},"D")
]



// for(let s of sorular){
//     console.log(s.soruMetni);
//     console.log(s.cevapSecenekleri);
// }

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex =0;
    this.dogruCevapSayisi =0;
    this.score_box = document.querySelector(".score_box");
    this.quiz_box = document.querySelector(".quiz_box");
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);

// for (let i = 0; i < sorular.length; i++) {
//     console.log(quiz.soruGetir());
//     quiz.soruIndex++;
    
// }

document.querySelector(".btn_start").addEventListener("click",function () {
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex +1 ,quiz.sorular.length);
})


document.querySelector(".next_btn").addEventListener("click",function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex++;
        soruSayisiniGoster(quiz.soruIndex + 1 ,quiz.sorular.length);
        if (quiz.soruIndex == 9) {
            document.querySelector(".next_btn").disabled = true;
        }
        soruGoster(quiz.soruGetir())
    } else{
        console.log("Quiz bitti!");
        quiz.quiz_box.classList.add("active");
        quiz.score_box.classList.add("active");
    }

});

const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>'
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'

function soruGoster(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';
    for(let cevap in soru.cevapSecenekleri){
        options +=
        `
            <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
        `
        ;
    }

    document.querySelector(".next_btn").disabled = true;
    document.querySelector(".soru_text").innerHTML = question;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    

    for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")
    }
}
function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    

    if (soru.cevapKontrol(cevap)) {
        quiz.dogruCevapSayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",correctIcon);
    }
    else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
    }


    for(let i=0 ;i < option_list.children.length; i++){
        option_list.children[i].classList.add("disabled")
    }

    document.querySelector(".next_btn").disabled = false;

}

function soruSayisiniGoster(soruSirasi,toplamSoru) {
    let tag = `<span class="badge bg-danger fs-6">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag
}

