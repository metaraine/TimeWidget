$(function() {
	// $( ":submit" ).click(function() {
      $(".timeIn").on("keyup", function() {
		var 	input =  $(".timeIn").val(),	
		  	dateObject = moment(input),
		  	dateObjToStr = dateObject.toString();
                  window.globalHour = dateObject.hour();
                  window.globalMinutes = dateObject.minutes();
                  
                  // globals to be passed outside the ready function and read below into the clock
                  // the Google chart api can't be accessed inside the ready function because it yields a blnk page
                  window.globalHour =dateObject.hour();
                  window.globalMinute =dateObject.minute();

      if (!dateObject.isValid()) {
        $(".EST").text("Not a valid time/date.");
        $(".CST").text("Not a valid time/date.");   
        $(".MST").text("Not a valid time/date.");   
        $(".PST").text("Not a valid time/date.");            
      }
        else {
		$(".EST").text(moment(dateObjToStr).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".CST").text(moment(dateObjToStr).subtract("h", 1).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".MST").text(moment(dateObjToStr).subtract("h", 2).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".PST").text(moment(dateObjToStr).subtract("h", 3).format("h:mm A, dddd, MMMM Do, YYYY"));
      }
	})
})

$(".submit").on("click", function() {
        var       input =  $(".timeIn").val(),  
                  dateObject = moment(input);
        // if (dateObject.isValid()) {
          window.open
          clock(window.globalHour,window.globalMinutes);
      // }
})

function clock(hour, minutes) {
   if(typeof(hour)==='undefined') a = 6;
   if(typeof(minutes)==='undefined') b = 15;
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['hour', hour],
  
          ['minutes', minutes],

        ]);

        // Set chart options
        var options = {'title':'The current time EST',
                       'width':400,
                       'height':300,
                       'colors':['white','red']
                   };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    }