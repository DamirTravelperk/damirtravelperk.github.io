$(document).ready(function() {
    var items = ['oaschloch', 'geh scheissn', 'beidl'];
    
    $("#mainbutton").click(function(){
        $("#randomcontent").text(items[Math.floor(Math.random() * items.length)]);
    }); 
});
