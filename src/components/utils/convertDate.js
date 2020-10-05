
function convertDate(date) {
    if (date) {
        const d = new Date(date);
        return d.toISOString().match(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)[0].split('-').reverse().join('/')
    }
}

function dateCalculateYear(date) {
    if (date) {
        const birthyear = new Date(date).getFullYear();
        const actualyear = new Date().getFullYear();
        return actualyear - birthyear;
    }
}

export { convertDate, dateCalculateYear };