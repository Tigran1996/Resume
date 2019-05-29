$(document).ready(function(){
  $('#owl1').owlCarousel({
	    items:3,
	    loop:true,
	    margin:10,
	    dots:true,
	    center:true,
	    mouseDrag:false,
	});
  $('#owl2').owlCarousel({
	    startPosition: 0,
        margin: 20,
        items:1,
        loop: true,
        autoplay: false,
        pagination :false,
        dots:false,
	  	mouseDrag:false,
        nav:true,
        responsiveClass:true,
	});

function img(){
	  var test1 = $("#testi1");
	  var test2 = $("#testi2");
	  var test3 = $("#testi3");

	  var array = [test1,test2,test3];

	  $(".owl-next").on("click",function(){
	  	console.log(array)
	  	var last = array.pop();
	  	array.unshift(last);
	  	$(".testi_img").remove();
	  	$(".testi_div").append(array);
	  	

	  })
	  $(".owl-prev").on("click",function(){
	  	var first = array.shift();
	  	array.push(first);
	  	$(".testi_img").remove();
	  	$(".testi_div").append(array);
	  	

	  })
}
img();


});