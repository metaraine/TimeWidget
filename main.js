// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

$(function() {

  var dateObject = new Date();

	$( ":submit" ).click(function() {
		var	input =  $(".timeIn").val();
    dateObject = new Date(input);
    var dateObjToStr = dateObject.toString();
	
		$(".EST").text(moment(dateObjToStr).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".CST").text(moment(dateObjToStr).subtract("h", 1).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".MST").text(moment(dateObjToStr).subtract("h", 2).format("h:mm A, dddd, MMMM Do, YYYY"));
		$(".PST").text(moment(dateObjToStr).subtract("h", 3).format("h:mm A, dddd, MMMM Do, YYYY"));

    drawChart();
	});

  // Set a callback to run when the Google Visualization API is loaded.
  google.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    var mins = dateObject.getMinutes();

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['hours', 0.01],
      ['all else', mins],
      ['minutes', 0.01],
      ['all else', 60-mins]
    ]);

    // Set chart options
    var options = {'title':'The current time EST',
                   'width':400,
                   'height':300,
                   'colors':['white','red'],
                   'pieSliceText': 'none',
                   'legend': 'none',
                   'tooltip': { trigger: 'none' }
               };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
});
