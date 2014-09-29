window.onload = function(){
  var ctx1 = document.getElementById("canvas1").getContext("2d");
  window.myBar = new Chart(ctx1).Bar(barChartData, {
    responsive : true
  });

  var ctx2 = document.getElementById("canvas2").getContext("2d");
    window.myLine = new Chart(ctx2).Line(lineChartData, {
      responsive: true
    });
}

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var barChartData = {
  labels : ["Brasky", "Dentith","Hutchins","Sanchez","Koch","Olson", "Schwarzenegger"],
  datasets : [
    {
      fillColor : "rgba(246,143,30,0.8)",
      strokeColor : "rgba(105,108,116,0.8)",
      highlightFill: "rgba(246,143,30,0.65)",
      highlightStroke: "rgba(105,108,116,0.65)",
      data : [
              7563,
              5905,
              5754,
              4453,
              4189,
              3308,
              2256]
              //randomScalingFactor()]
    }
  ]

}

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
    var lineChartData = {
      labels : ["0min", "10min","20min","30min","40min","50min","60min"],
      datasets : [
        {
          label: "Hutchins",
          fillColor : "rgba(220,220,220,0.2)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(220,220,220,1)",
          data : [270, 250, 160, 150, 155, 145, 135, 120, 100]
        },
        {
          label: "Dentith",
          fillColor : "rgba(151,187,205,0.2)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(151,187,205,1)",
          data : [250, 210, 160, 150, 155, 145, 135, 120, 100]
        },
        {
          label: "Koch",
          fillColor : "rgba(151,187,205,0.2)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(151,187,205,1)",
          data : [240, 200, 180, 170, 155, 145, 135, 120, 100]
        },
        {
          label: "Olson",
          fillColor : "rgba(151,187,205,0.2)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(151,187,205,1)",
          data : [290, 280, 240, 200, 145, 175, 190, 180, 170]
        }
      ]
    }