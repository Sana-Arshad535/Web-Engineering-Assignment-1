//1
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let Name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    if (Name != "" && email != "") {
        document.querySelector("#Msg").textContent = `Thank you for visiting, ${Name}! We will contact you at ${email}.`;
    }
})

//2
let rows = document.querySelectorAll("tbody tr");
for (let row of rows) {
    row.addEventListener('mouseover', () => {
        for (let cell of row.children) {
            cell.style.backgroundColor = "#cdb4db"
            
        }
    })
}
for (let row of rows) {
    row.addEventListener('mouseout', () => {
       for (let cell of row.children) {
            cell.style.backgroundColor = "rgb(248, 225, 229)"
           
        }
    })
}
//3
let bg = document.getElementsByTagName("body")[0];
let togbtn = document.getElementsByClassName('toggle')[0];
let texts = document.querySelectorAll(".tg");
let hds = document.querySelectorAll(".h");
let tds = document.querySelectorAll(".t");
let b = document.querySelectorAll("button");
let c = document.querySelectorAll(".categories button, #readMore");
let tg = 0;
togbtn.addEventListener('click', () => {
    if (tg == 0) {
        bg.style.backgroundColor = "#a53860";
        for (let text of texts) {
            text.style.color = "rgb(248, 225, 229)";
        }
        for (let hd of hds) {
            hd.style.color = "#ffffff";
        }
        for (let hd of tds) {
            hd.style.color = "#a53860";

        }
        for (let butt of b) {
            butt.style.backgroundColor = "#a53860";
        }
        for (let cat of c) {
            cat.style.backgroundColor = "rgb(243, 214, 214)";
            cat.style.color = "#a53860";
        }
        tg = 1;
    }
    else if (tg == 1) {
        bg.style.backgroundColor = "";
        for (let text of texts) {
            text.style.color = "";
        }
        for (let hd of hds) {
            hd.style.color = "";
        }
        for (let hd of tds) {
            hd.style.color = "";

        }
        for (let butt of b) {
            butt.style.backgroundColor = "";

        }
        for (let cat of c) {
            cat.style.backgroundColor = "";
            cat.style.color = "";
        }
        tg = 0;
    }
})
//4
let items = document.querySelectorAll(".item");
let total = document.querySelector("#total");
for (let item of items) {
    item.addEventListener('change', () => {
        let p = 0;
        for (let i of items) {
            if (i.checked) {
                p = p + Number(i.value);
            }
        }
        total.innerText = "Total: Rs " + p;
    });
}
//5
let birth_year = document.getElementById("birth-year");
birth_year.addEventListener('change', () => {
    let year = parseInt(birth_year.value);
    let age = 2026 - year;
    if (age >= 12 && age <= 25) {
        document.getElementById("discount").innerText = "Congratulations! You qualify for a 10% student discount.";
    }
    else if (age >= 26 && age <= 59) {
        document.getElementById("discount").innerText = "You do not qualify for an age-based discount.";
    }
    else if (age >= 60) {
        document.getElementById("discount").innerText = "Congratulations! You qualify for a 15% senior citizen discount.";
    }
})
//6
let readMore = document.getElementById("readMore");
let moreText = document.getElementById("more")
readMore.addEventListener('click', () => {
    if (moreText.style.display == "none") {
        moreText.style.display = "inline";
        readMore.innerText = "read less";
    }
    else {
        moreText.style.display = "none";
        readMore.innerText = "read more";
    }
})
//7
let cats = document.querySelectorAll("tbody tr");
document.getElementById("all").addEventListener('click', () => {
    for (let row of cats) {
        row.style.display = "";
    }
})
document.getElementById("bags").addEventListener('click', () => {
    for (let row of cats) {
        row.style.display = row.classList.contains("bags") ? "" : "none";
    }
})
document.getElementById("hair").addEventListener('click', () => {
    for (let row of cats) {
        row.style.display = row.classList.contains("hair") ? "" : "none";
    }
})
document.getElementById("cloths").addEventListener('click', () => {
    for (let row of cats) {
        row.style.display = row.classList.contains("cloths") ? "" : "none";
    }
})
//8
let stat = document.getElementById("status");
let hour = new Date().getHours();
if (hour >= 8 && hour <= 22) {
    stat.innerText = "We are Open!";
    stat.style.color = "#73a206";
}
else {
    stat.innerText = "Closed - Open at 8 AM";
    stat.style.color = "#f32929";
    stat.style.textShadow = "1px 1px 1px black";
}
//9
let notes = document.getElementById("special-notes");
let count = document.getElementById("charCount");
notes.addEventListener('input', () => {
    let rem = notes.value.length;
    rem = 100 - rem;
    count.textContent = "Remaining Characters: " + rem;
})