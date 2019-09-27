//    range fonts
$('#range-value').html($('#input-range').attr('value'));
$('#input-range').on('input', function(){
    $('#range-value').html(this.value + "pt");
    $('#sortable p,.red_left_side li').css("font-size",this.value + "pt")
});
//
$('#range-value1').html($('#input-range1').attr('value'));
$('#input-range1').on('input', function(){
    $('#range-value1').html(this.value + "pt");
    $("#sortable h5").css("font-size",this.value + "pt")
});
// //
$('#range-value2').html($('#input-range2').attr('value'));
$('#input-range2').on('input', function(){
    $('#range-value2').html(this.value + "px");
    $("#sortable > li").css("margin-bottom",this.value + "px")
});
// //
$('#range-value3').html($('#input-range3').attr('value'));
$('#input-range3').on('input', function(){
    $('#range-value3').html(this.value + "px");
    $("#sortable p").css("margin",this.value + "px 0px")
});
// //
$('#range-value4').html($('#input-range4').attr('value'));
$('#input-range4').on('input', function(){
    $('#range-value4').html(this.value + "px");
    $("#sortable p").css("line-height",this.value + "px")
});
// //
$('#range-value5').html($('#input-range5').attr('value'));
$('#input-range5').on('input', function(){
    $('#range-value5').html(this.value + "px");
    $("#sortable").css({"margin-top":this.value + "px","margin-bottom":this.value + "px"});
});
// //
$('#range-value6').html($('#input-range6').attr('value'));
$('#input-range6').on('input', function(){
    $('#range-value6').html(this.value + "px");
    $("#sortable").css({"margin-left":this.value + "px","margin-right":this.value + "px"});
});
// //
$('#range-value7').html($('#input-range7').attr('value'));
$('#input-range7').on('input', function(){
    $('#range-value7').html(this.value + "px");
    $("#sortable p").css("padding-left",this.value + "px")
});
// //
$('#range-value8').html($('#input-range8').attr('value'));
$('#input-range8').on('input', function(){
    $('#range-value8').html(this.value);
    $("#sortable p").css("font-weight",this.value)
});
//
$("#font_famly").on("change",function () {
    console.log(this.value)
    $("#sortable").css("font-family",this.value)
})

