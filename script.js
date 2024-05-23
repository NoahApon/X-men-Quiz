document.getElementById("next-question").addEventListener("click" ,nextQuestion);
document.getElementById("q1").addEventListener("change", q1);
document.getElementById("q2").addEventListener("change", q2);
document.getElementById("q3").addEventListener("change", q3);
document.getElementById("q4").addEventListener("change", q4);
document.getElementById("q5").addEventListener("change", q5);
document.getElementById("q6").addEventListener("change", q6);
document.getElementById("q7").addEventListener("change", q7);
document.getElementById("q8").addEventListener("change", q8);
document.getElementById("q9").addEventListener("change", q9);
document.getElementById("q10").addEventListener("change", q10);
document.getElementById("q11").addEventListener("change", q11);
document.getElementById("q12").addEventListener("change", q12);
document.getElementById("q13").addEventListener("change", q13);
document.getElementById("q14").addEventListener("change", q14);
document.getElementById("q15").addEventListener("change", q15);
document.getElementById("q16").addEventListener("change", q16);
document.getElementById("q17").addEventListener("change", q17);
document.getElementById("q18").addEventListener("change", q18);
document.getElementById("q19").addEventListener("change", q19);
document.getElementById("q20").addEventListener("change", q20);

var Question = 0;
var correct = 0;


function q1() {
    var q1Word = document.getElementById("q1").value.toLowerCase();
    if (q1Word == "cable" || q1Word == "nathan" || q1Word == "nathan summers") {
        correct ++;
        console.log(correct);
    }
}

function q2() {
    var q2Word = document.getElementById("q2").value.toLowerCase();
    if (q2Word == "james" || q2Word == "james howlett") {
        correct ++;
        console.log(correct);
    }
}
function q3() {
    var q3Word = document.getElementById("q3").value.toLowerCase();
    if (q3Word == "madelyne" || q3Word == "madelyne pryor") {
        correct ++;
        console.log(correct);
    }
}

function q4() {
    var q4Word = document.getElementById("q4").value.toLowerCase();
    if (q4Word == "night crawler" || q4Word == "nightcrawler" || q4Word == "kurt" || q4Word == "kurt wagner") {
        correct ++;
        console.log(correct);
    }
}

function q5() {
    var q5Word = document.getElementById("q5").value.toLowerCase();
    if (q5Word == "adamantium") {
        correct ++;
        console.log(correct);
    }
}

function q6() {
    var q6Word = document.getElementById("q6").value.toLowerCase();
    if (q6Word == "mon ami") {
        correct ++;
        console.log(correct);
    }
}

function q7() {
    var q7Word = document.getElementById("q7").value.toLowerCase();
    if (q7Word == "magneto" || q7Word == "max" 
    || q7Word == "max eisenheart" 
    || q7Word == "erik" || q7Word == "erik magnus lehnsherr" 
    || q7Word == "magnus") {
        correct ++;
        console.log(correct);
    }
}

function q8() {
    var q8Word = document.getElementById("q8").value.toLowerCase();
    if (q8Word == "weapon-x" || q8Word == "weapon x") {
        correct ++;
        console.log(correct);
    }
}

function q9() {
    var q9Word = document.getElementById("q9").value.toLowerCase();
    if (q9Word == "sentinel" || q9Word == "sentinels" || q9Word == "sentinel's") {
        correct ++;
        console.log(correct);
    }
}

function q10() {
    var q10Word = document.getElementById("q10").value.toLowerCase();
    if (q10Word == "cyclops" || q10Word == "scott" || q10Word == "scott summers") {
        correct ++;
        console.log(correct);
    }
}

function q11() {
    var q11Word = document.getElementById("q11").value.toLowerCase();
    if (q11Word == "apocalypse") {
        correct ++;
        console.log(correct);
    }
}

function q12() {
    var q12Word = document.getElementById("q12").value.toLowerCase();
    if (q12Word == "x-jet" || q12Word == "x jet" 
    || q12Word == "xjet" || q12Word == "blackbird" 
    || q12Word == "the blackbird") {
        correct ++;
        console.log(correct);
    }
}

function q13() {
    var q13Word = document.getElementById("q13").value.toLowerCase();
    if (q13Word == "scarlet witch" || q13Word == "wanda" 
    || q13Word == "wanda maximoff" || q13Word == "quick silver" 
    || q13Word == "pietro" || q13Word == "pietro lensherr") {
        correct ++;
        console.log(correct);
    }
}

function q14() {
    var q14Word = document.getElementById("q14").value.toLowerCase();
    if (q14Word == "mister sinister" || q14Word == "mr. sinister" 
    || q14Word == "mr.sinister" || q14Word == "sinister") {
        correct ++;
        console.log(correct);
    }
}

function q15() {
    var q15Word = document.getElementById("q15").value.toLowerCase();
    if (q15Word == "the incredible hulk" || q15Word == "incredible hulk" 
    || q15Word == "the hulk" || q15Word == "hulk") {
        correct ++;
        console.log(correct);
    }
}

function q16() {
    var q16Word = document.getElementById("q16").value.toLowerCase();
    if (q16Word == "wolverine") {
        correct ++;
        console.log(correct);
    }
}

function q17() {
    var q17Word = document.getElementById("q17").value.toLowerCase();
    if (q17Word == "magnetism" || q17Word == "metal") {
        correct ++;
        console.log(correct);
    }
}

function q18() {
    var q18Word = document.getElementById("q18").value.toLowerCase();
    if (q18Word == "genosha") {
        correct ++;
        console.log(correct);
    }
}

function q19() {
    var q19Word = document.getElementById("q19").value.toLowerCase();
    if (q19Word == "deadpool" || q19Word == "wade" || q19Word == "wade wilson") {
        correct ++;
        console.log(correct);
    }
}

function q20() {
    var q20Word = document.getElementById("q20").value.toLowerCase();
    if (q20Word == "1963") {
        correct ++;
        console.log(correct);
    }
}



function nextQuestion () {    
    Question++;
    console.log(Question);
    if (Question == 1) {
        document.getElementById("question-1").style.display = "block";
        document.getElementById("Intro").style.display = "none";
    } else if (Question == 2) {
        document.getElementById("question-2").style.display = "block";
        document.getElementById("question-1").style.display = "none";
    } else if (Question == 3) {
        document.getElementById("question-3").style.display = "Block";
        document.getElementById("question-2").style.display= "none";
    } else if (Question == 4) {
        document.getElementById("question-4").style.display = "Block";
        document.getElementById("question-3").style.display = "none";
    } else if (Question == 5) {
        document.getElementById("question-5").style.display = "Block";
        document.getElementById("question-4").style.display = "none";
    } else if (Question == 6) {
        document.getElementById("question-6").style.display = "Block";
        document.getElementById("question-5").style.display = "none";
    } else if (Question == 7) {
        document.getElementById("question-7").style.display = "Block";
        document.getElementById("question-6").style.display = "none";
    } else if (Question == 8) {
        document.getElementById("question-8").style.display = "Block";
        document.getElementById("question-7").style.display = "none";
    } else if (Question == 9) {
        document.getElementById("question-9").style.display = "Block";
        document.getElementById("question-8").style.display = "none";
    } else if (Question == 10) {
        document.getElementById("question-10").style.display = "Block";
        document.getElementById("question-9").style.display = "none";
    } else if (Question == 11) {
        document.getElementById("question-11").style.display = "Block";
        document.getElementById("question-10").style.display = "none";
    } else if (Question == 12) {
        document.getElementById("question-12").style.display = "Block";
        document.getElementById("question-11").style.display = "none";
    } else if (Question == 13) {
        document.getElementById("question-13").style.display = "Block";
        document.getElementById("question-12").style.display = "none";
    } else if (Question == 14) {
        document.getElementById("question-14").style.display = "Block";
        document.getElementById("question-13").style.display = "none";
    } else if (Question == 15) {
        document.getElementById("question-15").style.display = "Block";
        document.getElementById("question-14").style.display = "none";
    } else if (Question == 16) {
        document.getElementById("question-16").style.display = "Block";
        document.getElementById("question-15").style.display = "none";
    } else if (Question == 17) {
        document.getElementById("question-17").style.display = "Block";
        document.getElementById("question-16").style.display = "none";
    } else if (Question == 18) {
        document.getElementById("question-18").style.display = "Block";
        document.getElementById("question-17").style.display = "none";
    } else if (Question == 19) {
        document.getElementById("question-19").style.display = "Block";
        document.getElementById("question-18").style.display = "none";
    } else if (Question == 20) {
        document.getElementById("question-20").style.display = "Block";
        document.getElementById("question-19").style.display = "none";
    } else if (Question > 20) {
        document.getElementById("question-20").style.display = "none";
        document.getElementById("Scores").style.display = "Block";
        document.getElementById("corrects").innerHTML = correct + "/20";
        var percent = (correct / 20) * 100;
        document.getElementById("percent Grade").innerHTML = percent + "%";
    } 
}  
