function loadData() 
  {

  var chkTicketClass = document.getElementById("chkTicketClass").checked;

  //select svg container and clear it
  var svg = d3.select(".chartContainer");
  svg.selectAll("*").remove();

  d3.csv("titanic_df.csv", function (data) {
     var myChart = new dimple.chart(svg, data);
      myChart.setBounds(20, 20, 780, 350);

    // include/exclude ticket class info based on checkbox
    if (chkTicketClass) {
      var y = myChart.addCategoryAxis("y", ["Group"]);
    }
    else {
      var y = myChart.addCategoryAxis("y", ["Group","Pclass"]);
    }

    var x = myChart.addMeasureAxis("x", ["SurvivedDisplay"]);
    x.title = "Count of Surviving vs. Perished Passengers";

    y.addOrderRule("Group", false);
    y.hidden = true;

    // include/exclude ticket class info based on checkbox
    if (chkTicketClass) {
      var series = myChart.addSeries(["SurvivedDisplay", "Group"], dimple.plot.bar);
    }
    else {
      var series = myChart.addSeries(["SurvivedDisplay", "Pclass", "Group"], dimple.plot.bar);
    }

    // sort by name of group
    series.addOrderRule("Group", true);

      //Customize the tooltip based on checkbox value
    if (chkTicketClass) {
      series.getTooltipText = function (e) {
        return [
          "Survived: " + (e.aggField[0] > 0 ? "Yes" : "No"),
          "Group: " + e.aggField[1],
          "Count: " + Math.abs(e.xValue)
        ];
      }
    }
    else {
      series.getTooltipText = function (e) {
        return [
          "Survived: " + (e.aggField[0] > 0 ? "Yes" : "No"),
          "Group: " + e.aggField[2],
          "Count: " + Math.abs(e.xValue),
          "Class: " + e.aggField[1]
        ];
      }
    };

    // create legend
    var myLegend = myChart.addLegend(800, 35, 200, 800, "right");
    myLegend.verticalPadding = 32;

    //draw main chart
    myChart.draw(1000);


    //set onclick event for checkbox
    d3.select('#chkTicketClass')
      .on('change', function() {
        loadData();
      });

    // set negative numbers to absolute value
    x.shapes
     .selectAll("text")
         .text(function (d) { return Math.abs(d)});

    // highlight x axis
    svg.append("line")
      .attr("x1", x._scale(0))
      .attr("x2", x._scale(0))
      .attr("y1", 20)
      .attr("y2", myChart._heightPixels() + 20)
      .style("stroke", "black")
      .style("stroke-width", "1");

    // color negative values axis red
    svg.append("line")
      .attr("x1", 20)
      .attr("x2", x._scale(0))
      .attr("y1", myChart._yPixels() + myChart._heightPixels())
      .attr("y2", myChart._yPixels() + myChart._heightPixels())
      .style("stroke", "red")
      .style("stroke-width", "2");

    // color positive values axis green
    svg.append("line")
      .attr("x1", 800)
      .attr("x2", x._scale(0))
      .attr("y1", myChart._yPixels() + myChart._heightPixels())
      .attr("y2", myChart._yPixels() + myChart._heightPixels())
      .style("stroke", "green")
      .style("stroke-width", "2");

    // create new svg for background coloring
    var svg2 = d3.select(".chartBackground");
    svg2.selectAll("*").remove();

    var myBackground = new dimple.chart(svg2, null);

    // red background for negative values
    svg2.append("rect")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", x._scale(0)-20)
      .attr("height", myChart._heightPixels())
      .style("fill", "red")
      .style("opacity", "0.05");

    // red background for negative values
    svg2.append("rect")
      .attr("x", x._scale(0))
      .attr("y", 20)
      .attr("width", myChart._widthPixels() - x._scale(0) + 20)
      .attr("height", myChart._heightPixels())
      .style("fill", "green")
      .style("opacity", "0.05");

    // draw background
    myBackground.draw(1000);
  });
};