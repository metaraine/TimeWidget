$(function() {
	$( ":submit" ).click(function() {
		var 	input =  $(".timeIn").val(),	
		  	dateObject = new Date(input),
		  	dateObjToStr = dateObject.toString();
	
		$(".EST").text(moment(dateObjToStr).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".CST").text(moment(dateObjToStr).subtract("h", 1).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".MST").text(moment(dateObjToStr).subtract("h", 2).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".PST").text(moment(dateObjToStr).subtract("h", 3).format("h:mm A, dddd, MMMM Do, YYYY"));
	})
	
})
