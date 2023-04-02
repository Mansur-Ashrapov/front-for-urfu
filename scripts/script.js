var chckbox = document.getElementById("switch");

var firstStep = document.getElementById("firstStep");
var fourthStep = document.getElementById("fourthStep");

var budget = document.getElementById('budget_switch');

var contract = document.getElementById('contract_switch');
contract.style.color = "#222222";
contract.style.opacity = 0.4;

var data = {
    "Contract": {
        "Admission": {
            "FullTime": "20.06 - 23.09",
            "Distance": "20.06 - 28.10",
        },
        "Tests": {
            "FullTime":"04.07 - 13.08 и 22.08 - 24.09",
            "Distance":"04.07 - 13.08 и 22.08 - 29.10",
        },
    },
    "Budget": {
        "Admission": {
            "FullTime": "20.06 - 08.08",
            "Distance": "20.06 - 08.08",
        },
        "Tests": {
            "FullTime": "04.07 - 13.08",
            "Distance": "04.07 - 13.09 и 22.08 - 12.09",
        },
    }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header__nav").style.top = "0";
    } else {
        document.getElementById("header__nav").style.top = "-14vh";
    }
    prevScrollpos = currentScrollPos;   
}

function anim (movePos, data) {
    var blockAnim = document.getElementById("how-to-join");
    var pos = 0;

    var isRight = false
    
    chckbox.disabled = true;
    blockAnim.style.transition = "150ms";
    
    var interval = setInterval(frame);
    function frame () {
        if (pos == movePos && !isRight) {
            changeText(data);
            isRight = true
        } else if (pos < movePos && !isRight) {
            pos++;
            blockAnim.style.marginLeft = pos + "px";
            blockAnim.style.opacity = 0;
        }  

        if (pos >= 0 && isRight) {
            pos--;
            blockAnim.style.marginLeft = pos + "px";
        } else if (isRight) {
            blockAnim.style.opacity = 1;
            chckbox.disabled = false;
            clearInterval(interval);
        }
    }
}


const changeText = (_data) => {
    firstStep.getElementsByTagName('span')["fulltime"].textContent = _data["Admission"]["FullTime"];
    firstStep.getElementsByTagName('span')["distance"].textContent = _data["Admission"]["Distance"];
    fourthStep.getElementsByTagName('span')["fulltime"].textContent = _data["Tests"]["FullTime"];
    fourthStep.getElementsByTagName('span')["distance"].textContent = _data["Tests"]["Distance"];
};

changeText(data["Budget"]);

chckbox.onchange = function () {
    if (chckbox.checked) { 
        anim(50, data["Contract"]);
        budget.style.color = "#222222";
        budget.style.opacity = 0.4;
        contract.style.color = "#1E4391";
        contract.style.opacity = 1;
    }
    else { 
        anim(50, data["Budget"]);
        contract.style.color = "#222222";
        contract.style.opacity = 0.4;
        budget.style.color = "#1E4391";
        budget.style.opacity = 1;
    }
}