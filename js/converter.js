var Converter = (function() {

    // Private stuff up here
    var conversionValue = 9/5;
    var offsetValue = 32;


    // Public methods here
    return {
        convertFromCelsToFahr: function(temp) {
            var num = parseInt(temp);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = (num * conversionValue) + offsetValue;
            return Math.round(num*10)/10;
        },

        convertFromFahrToCels: function(temp) {
            var num = parseInt(temp);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = (num - offsetValue) / conversionValue;
            return Math.round(num*10)/10;
        }
        
    }
}())