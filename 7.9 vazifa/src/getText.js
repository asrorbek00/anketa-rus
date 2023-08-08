export const words = {
    fio: {
        uz: "F.I.O",
        ru: "Ф.И.О (полностью)",
    },
    anketa_title: {
        ru: "АНКЕТА КАНДИДАТА",
        uz: "", 
    },
    personal: {
        ru: "1.Личные данные",
    },
    data_birth:{
        ru: "Дата рождения:"
    },
    plase_of_birth:{
        ru: "Место рождения:"
    },
    grajdan: {
        ru: "Гражданство:"
    },
    nationality: {
        ru: "Национальность:"
    },
    contact: {
        ru: "Контактные телефоны:"
    },
    domashniy: {
        ru: "Домашний:"
    },
    mobilny: {
        ru: "Мобильный:"
    },
    rabochiy: {
        ru: "Рабочий:"
    },
    email: {
        ru: "E-mail:"
    },
    extra_contact: {
        ru: "Другие контакты"
    },
    royxat: {
        ru: "Место регистрации (прописки)"
    },
    yashash: {
        ru: "Место жительства (фактическое)"
    }
};



export default text =>{
    const lang = window.localStorage.getItem('lang') || 'uz';
    return text[lang];
}