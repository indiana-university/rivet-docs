// Acccepts an HTML element id attribute
module.exports = {
    createCopyright: function (elId) {
        let year = document.getElementById(elId);
        if (year == null) return;
        let currentYear = new Date().getFullYear();
        year.innerHTML = currentYear;
    },
    setIndeterminate: function(checkEl) {
        let indCheck = document.querySelector(checkEl);
        // If its not the checkbox docs page bail.
        if (indCheck == null) return;
        // Set the demo checkbox.
        indCheck.indeterminate = true;
    }
}


