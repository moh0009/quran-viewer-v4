var v = document.getElementById('page_num');
var page_number = (v.value == "") ? 1 : parseInt(v.value);
var p = document.getElementById('page');
var a = document.getElementById('audio');
var s = document.getElementById('sounds');
var q = document.getElementById("alQiraat");
var sp = document.getElementById("speed");
var rorl = document.getElementById("rorl");
var rorlimg = document.getElementById("rorlimg");
var rightimg = "https://quran.ksu.edu.sa/images/book_right.png";
var leftimg = "https://quran.ksu.edu.sa/images/book_left.png";
var re_v = document.getElementById("re");
var loop = document.getElementById("lo");
var auto = document.getElementById("auto");

var sh = document.getElementById("sh");
var con = document.getElementById("controls");

p.src = "https://quran.ksu.edu.sa/ayat/safahat1/" + page_number + ".png";
p.alt = "page " + page_number;
var recitations = {
    "hafs": "حفص عن عاصم",
    "warsh": "ورش عن نافع",
    "shubah": "شعبة عن عاصم",
    "qaloon": "قالون عن نافع"
};
var reciters = {
    "hafs": ["ayman-swed", "abdullah-basfar", "al-hosary", "abdalbasit", "Shaatree", "alghamdi", "alhudhaifi", "akhdar", "almuaiqly", "alminshawi", "altablaway", "ayyoub"],
    "warsh": ["aldosary", "sayd", "salih", "noory", "abdalbasit_2"],
    "shubah": ["alsophy", "yaser", "nuh", "alsltani", "abdalhakim"],
    "qaloon": ["al-hosary_2", "mohamed", "yosof", "alhudhaifi_2", "alamin"],
};
var reciters_titles = {
    "ayman-swed": "الشيخ ايمن سويد",
    "abdullah-basfar": "الشيخ عبدالله بصفر",
    "al-hosary": "الشيخ محمود خليل الحصري",
    "abdalbasit": "الشيخ عبد الباسط عبد الصمد",
    "Shaatree": "الشيخ أبو بكر الشاطري",
    "alghamdi": "الشيخ سعد بن سعيد الغامدي",
    "alhudhaifi": "الشيخ علي بن عبد الرحمن الحذيفي",
    "akhdar": "الشيخ إبراهيم بن الأخضر",
    "almuaiqly": "الشيخ ماهر المعيقلي",
    "alminshawi": "الشيخ محمد صديق المنشاوي",
    "altablaway": "الشيخ محمد محمود الطبلاوي",
    "ayyoub": "الشيخ محمد أيوب",
    "aldosary": "الشيخ إبراهيم الدوسري",
    "sayd": "الشيخ محمد سايد",
    "salih": "الشيخ حسن صالح",
    "noory": "الشيخ توفيق النوري",
    "abdalbasit_2": "الشيخ عبد الباسط عبدالصمد",
    "alsophy": "الشيخ عبد الرشيد صوفي",
    "yaser": "الشيخ ياسر القرشي",
    "nuh": "الشيخ نوح أحمد",
    "alsltani": "الشيخ مفتاح السلطني",
    "abdalhakim": "الشيخ عبدالحكيم عبداللطيف",
    "al-hosary_2": "الشيخ محمود خليل الحصري",
    "mohamed": "الشيخ الدوكالي محمد العالم",
    "yosof": "الشيخ ابو يوسف الخرخاشي",
    "alhudhaifi_2": "الشيخ علي الحذيفي",
    "alamin": "الشيخ الأمين محمد قنيوة"
};

var reciters_links = {
    "hafs": {
        "ayman-swed": "https://ia801803.us.archive.org/10/items/1-mp-3-128-k/ألقران الكريم - أيمن سويد الصفحة %(MP3_128K).mp3",
        "abdullah-basfar": "https://everyayah.com/data/Abdullah_Basfar_32kbps/PageMp3s/Page%.mp3",
        "al-hosary": "https://everyayah.com/data/Husary_64kbps/PageMp3s/Page%.mp3",
        "abdalbasit": "https://everyayah.com/data/Abdul_Basit_Murattal_64kbps/PageMp3s/Page%.mp3",
        "Shaatree": "https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_64kbps/PageMp3s/Page%.mp3",
        "alghamdi": "https://everyayah.com/data/Ghamadi_40kbps/PageMp3s/Page%.mp3",
        "alhudhaifi": "https://everyayah.com/data/Hudhaify_32kbps/PageMp3s/Page%.mp3",
        "akhdar": "https://everyayah.com/data/Ibrahim_Akhdar_32kbps/PageMp3s/Page%.mp3",
        "almuaiqly": "https://everyayah.com/data/Maher_AlMuaiqly_64kbps/PageMp3s/Page%.mp3",
        "alminshawi": "https://everyayah.com/data/Menshawi_16kbps/PageMp3s/Page%.mp3",
        "altablaway": "https://everyayah.com/data/Mohammad_al_Tablaway_128kbps/PageMp3s/Page%.mp3",
        "ayyoub": "https://everyayah.com/data/Muhammad_Ayyoub_128kbps/PageMp3s/Page%.mp3"
    },
    "warsh": {
        "aldosary": "https://everyayah.com/data/warsh/warsh_ibrahim_aldosary_128kbps/PageMp3s/Page%.mp3",
        "sayd": "https://ia801303.us.archive.org/3/items/rabieaaa2012064724572457247247/%.mp3",
        "salih": "https://archive.org/download/rabieaaa2017_yahoo_1306666666/%.mp3",
        "noory": "https://archive.org/download/yoly35683556835853685368o2014_yahoo_585/%.mp3",
        "abdalbasit_2": "https://ia800306.us.archive.org/21/items/rabieaaa2017_yahoo_117888888888888/%.mp3"
    },
    "shubah": {
        "alsophy": "https://ia800305.us.archive.org/32/items/rabieaaa2017_yahoo_57666666666665/%.mp3",
        "yaser": "https://ia800405.us.archive.org/32/items/245742574574274224574254201/%.mp3",
        "nuh": "https://ia800405.us.archive.org/6/items/12512512512521352153_gmail_283/%.mp3",
        "alsltani": "https://ia802506.us.archive.org/9/items/zzzz565_202zzzzzzzzzzzzz/%.mp3",
        "abdalhakim": "https://ia802500.us.archive.org/25/items/380_20220424xxxxxx/%.mp3"
    },
    "qaloon": {
        "al-hosary_2": "https://ia800505.us.archive.org/6/items/rabieaaa2017_yahoo_12389/%.mp3",
        "mohamed": "https://ia800500.us.archive.org/13/items/rabieaaa2017_yahoo_3438888888888/%.mp3",
        "yosof": "https://ia800306.us.archive.org/24/items/rabieaaa2017_yahoo_0048777777777777/%.mp3",
        "alhudhaifi_2": "https://ia800500.us.archive.org/6/items/rabieaaa2017_yahoo_28155655/%.mp3",
        "alamin": "https://ia800500.us.archive.org/6/items/rabieaaa2017_yahoo_28155655/%.mp3"
    }
};
var sound = s.value;
var page_qira = q.value;

window.onload = function() {
    loader();
    sh.innerText = "view";
    con.style = "display:none;";
}
function loader(keep = 0) {
    if (!keep) {
        $("#alQiraat option").remove();
        for (var i = 0; i < Object.keys(reciters).length; i++) {
            if (!keep) {
                $("<option value=" + Object.keys(reciters)[i] + ">" + recitations[Object.keys(reciters)[i]] + "</option>").appendTo("#alQiraat");
            }
        }
    }

    if (keep != 2) {
        $("#sounds option").remove();
        var qiraa = $("#alQiraat option:selected").val();
        for (var j = 0; j < Object.keys(reciters[qiraa]).length; j++) {
            $("<option value=" + reciters[qiraa][j] + ">" + reciters_titles[reciters[qiraa][j]] + "</option>").appendTo("#sounds");
        }
    }
}

function h() {
    //geting html elment DRY-Dont7repeat yourself
    page_number = parseInt(v.value);

    if (page_number >= 1 && page_number <= 604) {
        check(2);
    }

}

function right() {

    if (page_number >= 1 && page_number <= 604) {

        page_number--;
        if (page_number < 1) {
            page_number = 1;
        }
        check(2);
        v.value = page_number;
    }
}

function left() {

    if (page_number >= 1 && page_number <= 604) {
        page_number++;
        if (page_number > 604) {
            page_number = 604;
        }
        check(2);
        v.value = page_number;
    }
}



function check(refresher = 0) {
    loader(refresher);
    sound = s.value;
    page_qira = q.value;
    sounds();
    pages();
    speed();
    loopy();
    autoy();
    rightorleft();
}

window.setInterval(function() {
    loopy();
}, 1000);

function pages() {
    var f = new Function(page_qira + "()");
    f();
}

function sounds() {
    a.src = reciters_links[page_qira][sound].replace("%", String(page_number).padStart(3, '0'));
}
// sounds



// qura
function hafs() {
    p.src = "https://quran.ksu.edu.sa/ayat/safahat1/" + page_number + ".png";
    p.alt = "page " + page_number;
}

function warsh() {
    p.src = "https://www.quranflash.com/books/Warsh1/data/N/" + String(page_number + 3).padStart(4, '0') + ".png";
    p.alt = "page " + page_number;

}

function shubah() {
    p.src = "https://www.quranflash.com/books/Shubah/data/N/" + String(page_number + 3).padStart(4, '0') + ".png";
    p.alt = "page " + page_number;
}


function qaloon() {
    p.src = "https://www.quranflash.com/books/Qaloon/data/N/" + String(page_number + 3).padStart(4, '0') + ".png";
    p.alt = "page " + page_number;
}

function qaloon() {
    p.src = "https://www.quranflash.com/books/Qaloon/data/N/" + String(page_number + 3).padStart(4, '0') + ".png";
    p.alt = "page " + page_number;
}

//auto left page

function speed() {
    var speed = sp.value;
    a.playbackRate = speed;
}
function rightorleft() {
    if (page_number % 2 == 0) {
        rorlimg.src = leftimg;
        rorl.innerText = "left";
    } else {
        rorlimg.src = rightimg;
        rorl.innerText = "right";

    }
}

// function re(){
//     var r = re_v.value;
//     if (r>1){
//         // while(r>1){
//         //     a.loop = true;
//         //     a.addEventListener("ended", function() {
//         //         r--;
//         //     });
//         //     console.log("runs good");
//         // }
//         for(r;r>1;r--){
//             a.loop = true;
//             onsole.log("runs good");
//             re_v.value = r;
//         }
//     }
//     else{
//         a.loop = false;
//     }
// }

a.addEventListener("ended", function() {
    a.currentTime = 0;
    left();
});
function loopy() {
    if (loop.checked) {
        a.loop = true;
    }
    else {
        a.loop = false;
    }
}
function autoy() {
    if (auto.checked) {
        a.autoplay = true;
    }
    else {
        a.autoplay = false;
    }
}

sh.onclick = function() {
    if (sh.innerText == "view") {
        con.style = "display: block;";
        sh.innerText = "hide";
    }
    else if (sh.innerText == "hide") {
        con.style = "display: none;";
        sh.innerText = "view";
    }
}