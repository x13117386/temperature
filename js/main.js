window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '681-1199', containers: 960 },
        mobile: { range: '-680', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#convertbutton").click(function() {
        var cValue = $("#cinput").val();
        var fValue = $("#finput").val();


        if (((cValue.length !=0) && (fValue.length !=0))
            || ((cValue.length == 0) && fValue.length == 0)) {
            alert("Please set one field, and only one field")
        }
        if (cValue.length != 0) {
            $("#finput").val(Converter.convertFromCelsToFahr(cValue));
        }
        else if (fValue.length != 0) {
            $("#cinput").val(Converter.convertFromFahrToCels(fValue));
        }
    });
    $("#clearbutton").click(function() {
        $("#finput").val('');
        $("#cinput").val('');
    });
        
});