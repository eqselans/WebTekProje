
function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function (cevap) {
    return cevap === this.dogruCevap;
}


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


function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex =0;
    this.dogruCevapSayisi =0;
    this.score_box = document.querySelector(".score_box");
    this.quiz_box = document.querySelector(".quiz_box");
    this.btn_replay = document.querySelector(".btn_replay");
    this.btn_quit = document.querySelector(".btn_quit");
    this.btn_start = document.querySelector(".btn_start");
    this.time_second = document.querySelector(".time_second");
    this.timer_text = document.querySelector(".timer_text");
    this.option_list = document.querySelector(".option_list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.btn_next = document.querySelector(".next_btn");
    this.time_line = document.querySelector(".time_line");
}

Quiz.prototype.soruGetir = function () {
    return this.sorular[this.soruIndex];
}

Quiz.prototype.skoruGoster = function (toplamSoru,dogruCevap) {
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}

const quiz = new Quiz(sorular);


quiz.btn_start.addEventListener("click",function () {
        document.querySelector(".quiz_box").classList.add("active");
        startTimer(15);

        soruGoster(quiz.soruGetir());
        soruSayisiniGoster(quiz.soruIndex +1 ,quiz.sorular.length);
})


document.querySelector(".next_btn").addEventListener("click",function () {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex++;
        soruSayisiniGoster(quiz.soruIndex + 1 ,quiz.sorular.length);
        clearInterval(counter);
        startTimer(15);
        quiz.timer_text.textContent = "Kalan Süre:"
        if (quiz.soruIndex == 9) {
            document.querySelector(".next_btn").disabled = true;
        }
        soruGoster(quiz.soruGetir())
    } else{
        console.log("Quiz bitti!");
        quiz.quiz_box.classList.remove("active");
        quiz.score_box.classList.add("active");
        quiz.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    }

});

quiz.btn_quit.addEventListener("click",function () {
    window.location.reload();
})

quiz.btn_replay.addEventListener("click",function () {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    quiz.btn_start.click();
    quiz.score_box.classList.remove("active");
})

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
    clearInterval(counter)
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


    for(const element of option_list.children){
        element.classList.add("disabled")
    }

    document.querySelector(".next_btn").disabled = false;

}

function soruSayisiniGoster(soruSirasi,toplamSoru) {
    let tag = `<span class="badge bg-danger fs-6">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag
}

let counter ;
function startTimer(time) {
    counter = setInterval(timer,1000);

    function timer() {
        quiz.time_second.textContent = time;
        time --;
        if (time < 0) {
            clearInterval(counter);

            quiz.timer_text.textContent = "Süre Bitti!";
            quiz.time_second.textContent = "";
            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of quiz.option_list.children){
                if (option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",quiz.correctIcon)
                    quiz.btn_next.disabled = false;
                }
            option.classList.add("disabled");
        }
    }
    
}

}
