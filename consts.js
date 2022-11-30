const mainParent = document.querySelector('.hero__block');
const ticketItemWhere = '.ticket__item-where';
const ticketItemDate = '.ticket__item-date';
const ticketItemTime = '.ticket__item-time';
const hero = document.querySelector('#hero');
const ticketItemRivalLeft = '.ticket__item-rival-left';
const ticketItemRivalRight = '.ticket__item-rival-right';
const options = {
    "active": "active",
    "middle": "middle",
    "small": "small"
}
const burgerMenu = document.querySelector(".open");
const menu = document.querySelector("#menu");

export {
    mainParent,
    ticketItemWhere,
    ticketItemDate,
    ticketItemTime,
    hero,
    ticketItemRivalLeft,
    ticketItemRivalRight,
    options,
    burgerMenu,
    menu
}