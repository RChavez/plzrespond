$(function () {
$(".eastereggsnigga").click(function() {
    	scottklemmer();
    });
});


function scottklemmer() {
	var status = $(".eastereggsnigga option:selected").text();
	console.log(status);
	/*
	var getString = "scottsucks/" + status;
		$.get(getString);	*/
}