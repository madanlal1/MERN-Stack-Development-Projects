function getDate() {

    let today1 = new Date();

    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    let today = today1.toLocaleDateString('en-US', options);

    return today;
}

module.exports = getDate;