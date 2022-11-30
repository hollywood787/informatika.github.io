import { mainParent, ticketItemWhere, ticketItemDate, ticketItemTime, ticketItemRivalLeft, ticketItemRivalRight, options, burgerMenu, menu } from './consts.js'

const ivents = [
    {
        "place": "Стадион",
        "date": "1 сентября",
        "time": "17:00",
        "rivalOne": "Соперник №1",
        "rivalTwo": "Соперник №2",
    },
    {
        "place": "Стадион",
        "date": "2 сентября",
        "time": "16:00",
        "rivalOne": "Соперник №3",
        "rivalTwo": "Соперник №4",
    },
    {
        "place": "Площадка",
        "date": "3 сентября",
        "time": "14:00",
        "rivalOne": "Соперник №5",
        "rivalTwo": "Соперник №6",
    },
    {
        "place": "Танцпол",
        "date": "4 сентября",
        "time": "12:00",
        "rivalOne": "Соперник №7",
        "rivalTwo": "Соперник №8",
    },
    {
        "place": "Улица",
        "date": "5 сентября",
        "time": "11:00",
        "rivalOne": "Соперник №9",
        "rivalTwo": "Соперник №10",
    },
    {
        "place": "Лес",
        "date": "6 сентября",
        "time": "13:00",
        "rivalOne": "number11",
        "rivalTwo": "number12",
    },
    {
        "place": "Озеро",
        "date": "7 сентября",
        "time": "17:00",
        "rivalOne": "number13",
        "rivalTwo": "number14",
    },
]

ivents.map(function (item, index) {
    createIvent(index);
})

function createIvent(index) {
    const elem = document.createElement('div');
    elem.className="ticket__item prod_price-discount-badge";
    elem.append(tmpl.content.cloneNode(true));
    mainParent.append(elem);
    elem.querySelector(ticketItemWhere).textContent = ivents[index].place;
    elem.querySelector(ticketItemDate).textContent = ivents[index].date;
    elem.querySelector(ticketItemTime).textContent = ivents[index].time;
    elem.querySelector(ticketItemRivalLeft).textContent = ivents[index].rivalOne;
    elem.querySelector(ticketItemRivalRight).textContent = ivents[index].rivalTwo;
}

const allIventsItem = document.querySelectorAll('.ticket__item');

scrollAnimation(Math.ceil(ivents.length / 2));
defaultStay(Math.ceil(ivents.length / 2));

function scrollAnimation(index) {
    allIventsItem[index].classList.add(options.active);
}

function defaultStay(index) {
    allIventsItem[index].classList.add(options.active);
    allIventsItem[index + 1].classList.add(options.middle);
    allIventsItem[index - 1].classList.add(options.middle);
    allIventsItem[index + 2].classList.add(options.small);
    allIventsItem[index - 2].classList.add(options.small);
}

document.addEventListener("wheel", function (event) {
    if (event.deltaY > 0) {
        stylesTwinkIventsUp(atTheMomentActive())
    } else {
        stylesTwinkIventsDown(atTheMomentActive())
    }
})

function stylesTwinkIventsUp(index) {
    if (index > 2) {
        allIventsItem[index - 1].classList.add(options.active);
        allIventsItem[index - 1].classList.remove(options.middle);
        allIventsItem[index - 2].classList.remove(options.small);
        allIventsItem[index - 2].classList.add(options.middle);
        allIventsItem[index - 3].classList.add(options.small);
        allIventsItem[index - 1].classList.remove(options.small);
        allIventsItem[index + 1].classList.add(options.small);
        allIventsItem[index + 1].classList.remove(options.middle);
        allIventsItem[index + 2].classList.remove(options.small);
        allIventsItem[index].classList.remove(options.active);
        allIventsItem[index].classList.add(options.middle);
    }
}
function stylesTwinkIventsDown(index) {
    if (index < allIventsItem.length - 3) {
        allIventsItem[index + 1].classList.add(options.active);
        allIventsItem[index + 1].classList.remove(options.middle);
        allIventsItem[index - 2].classList.remove(options.small);
        allIventsItem[index - 1].classList.remove(options.middle);
        allIventsItem[index - 1].classList.add(options.small);
        allIventsItem[index + 2].classList.remove(options.small);
        allIventsItem[index + 2].classList.add(options.middle);
        allIventsItem[index + 3].classList.add(options.small);
        allIventsItem[index].classList.remove(options.active);
        allIventsItem[index].classList.add(options.middle);
    }
}

function atTheMomentActive() {
    for (let i = 0; i < allIventsItem.length; i++) {
        if (allIventsItem[i].classList.contains(options.active)) {
            return i;
        }
    }
}

for (let i = 2; i < allIventsItem.length - 2; i++) {
    allIventsItem[i].style.cursor = "pointer";
    allIventsItem[i].addEventListener("click", function() {
        reserAllStyles();
        defaultStay(i);
    })
}

function reserAllStyles() {
    for (let i = 0; i < allIventsItem.length; i++) {
        allIventsItem[i].classList.remove(options.middle);
        allIventsItem[i].classList.remove(options.active);
        allIventsItem[i].classList.remove(options.small);
    }
}

burgerMenu.addEventListener("click", function() {
    menu.classList.toggle(options.active);
});