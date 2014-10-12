//var column = 1;
//var startX = 200;
//var graph = 2;

function preload(){
	stationTable = loadTable('data/stationData.csv');
	//totalGraduates = loadTable('data/Total_Graduates.csv');
}

function setup() {
	createCanvas(1280, 800);
	colorMode(HSB, 360, 100, 100, 100);
	textFont("Gotham");
}

function draw() {
	background(0,0,20);
	noStroke();
	fill(0, 0, 80);

	//Title
	textSize(24);
	text("CITIBIKE STATIONS BALANCE", 25, 35);
	textSize(12);
	text("PERCENTAGE OF BIKES AT EACH STATION - FIRST WEEK OF MAY 2014", 25, 50);

	//Global variables
	var totalEntries = stationTable.getColumnCount();
	var totalStations = stationTable.getRowCount();
	var totalWidth = totalEntries*0.24;
	var totalHeight = totalStations*2.1;
	var startGraphX = 50;
	var startGraphY = 80;
	var endGraphX = startGraphX+totalWidth;
	var endGraphY = startGraphY+totalHeight;

	//X Axis labels and tick marks
	textSize(8);
	var weekdays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
	for (var i = weekdays.length - 1; i >= 0; i--) {
		text(weekdays[i], 40+totalWidth/7*i, 67);
		text("12PM", 40+totalWidth/7*i+(totalWidth/14), 67);
	};
	stroke(0, 0, 80);
	strokeWeight(0.25);
	for (var i = 0; i < 24*7; i++) {
		line(startGraphX+totalWidth/(7*24)*i, 75, startGraphX+totalWidth/(7*24)*i, 72);
	};


	//Y Axis labels and tick marks
	for (var i=0; i<101; i++) {
	  line(startGraphX-1, startGraphY+i*(endGraphY-startGraphY)/100, startGraphX-4, startGraphY+i*(endGraphY-startGraphY)/100);
	};
	fill(0, 0, 80);
	noStroke();
	textAlign(RIGHT);
	for (var i=0; i<11; i++) {
	  text(100-i*10+"%", startGraphX-5, startGraphY+i*(endGraphY-startGraphY)/10);
	};

	//Legend
	var startLegend = 450;
	noStroke();
	for (var i=0; i<20; i++) {
	  fill(24, 100, 100, map(i, 19, 0, 10, 100));
	  rect(startLegend+4*i, 22, 4, 2);
	}
	fill(0, 0, 80);
	textAlign(RIGHT);
	text("< 5% FULL", startLegend-3, 26);
	textAlign(LEFT);
	text("> 95% FULL", startLegend+3+12*20, 26);
	textAlign(RIGHT);
	text("> 20% FULL", startLegend-3+4*20, 33);
	textAlign(LEFT);
	text("> 80% FULL", startLegend+3+8*20, 33);
	for (var i=0; i<20; i++) {
	  fill(180, 100, 100, map(i, 0, 19, 10, 100));
	  rect(startLegend+4*i+8*20, 22, 4, 2);
	}
	for (var i=0; i<20; i++) {
	  fill(300, 10);
	  rect(startLegend+4*i+4*20, 22, 4, 2);
	}

	//Build graph
	var value, value2;
	noFill();
	stroke(300);
	strokeWeight(.25);
	//console.log("Starting the reading process...");
	for (var i=0; i<50; i++) {
	  //for (var j=4; j<totalEntries-1; j++) {
	  for (var j=4; j<500; j++) {
	    value = stationTable.getColumn(j*10)[i];
	    //console.log(value);
	    value2 = stationTable.getColumn((j+1)*10)[i];
	    if (value > 100) {
	      value = 100;
	    } else if (value < 0) {
	      value =0;
	    } else {
	    }
	    if (value2 > 100) {
	      value2= 100;
	    } else if (value2 < 0) {
	      value2 =0;
	    } else {
	    }
	    if (value > 80) {
	      stroke(180, 100, 100, map(value, 80, 95, 5, 100));
	    } else if (value < 20) {
	      stroke(24, 100, 100, map(value, 20, 5, 5, 100));
	    } else if (value <5) {
	      stroke(24, 100, 100, 100);
	    } else if (value >95) {
	      stroke(180, 100, 100, 100);
	    } else {
	      stroke(300, 10);
	    }
	    line(startGraphX+((j-4)*10)*0.24, startGraphY+(100-value)*(endGraphY-startGraphY)/100, startGraphX+((j-3)*10)*0.24, startGraphY+(100-value2)*(endGraphY-startGraphY)/100);
	  }
	//console.log("done with station "+i);
	}
}

/*


	stroke(180, 100, 50);
	strokeWeight(1);
	line(0, 45, 180, 45);
	line(0, 2, 180, 2);
	line(200, 2, 700, 2);

	//Description
	noStroke();
	textSize(12);
	fill(0, 0, 60);
	text("Here is where we describe what's happening with this data, how many people responded, what percentage it is of the whole GSAPP, etc, etc, etc. Just a brief description to explain this dashboard and make an interesting point...", 0, 45, 175, 500);
	
	//Left hand side toggles
	fill(0, 0, 40);
	noStroke();
	rect(0, 200+30*graph, 175, 20);
	noFill();
	stroke(200);
	strokeWeight(1);
	for(var i=0; i<4; i++){
		rect(0, 200+30*i, 175, 20);
	}
	fill(0, 0, 60);
	noStroke();
	textAlign(CENTER);
	text("Respondents per Degree", 87, 215);
	text("Proportion per Class", 87, 245);

	*/

	/*for (var i = 0; i<200; i++){
		noStroke();
		nodeNetwork[floor(random(0, nodeNetwork.length))].display();
		strokeWeight(0.5);
		stroke(150);
		line(nodeNetwork[floor(random(0, nodeNetwork.length))].x, nodeNetwork[floor(random(0, nodeNetwork.length))].y, nodeNetwork[floor(random(0, nodeNetwork.length))].x, nodeNetwork[floor(random(0, nodeNetwork.length))].y)
	}*/
	//background(0);

	/*
	if (graph == 0){
		barChart();
	}
	if (graph ==1){
		circleChart();
	}
	if (graph == 2){
		pieChart();
	}
}

function pieChart(){
	var circleStartY = 125;
	var circleStartX = 290;
	var angles = [30, 10, 45, 35, 60, 38, 75, 67];
	var lastAngle = 0;
	stroke(0);
	strokeWeight(1);
	noFill();
	for(var i=0; i<angles.length; i++){
		arc(circleStartX, circleStartY, 200, 200, lastAngle, lastAngle+radians(angles[i]), PIE);
		lastAngle += radians(angles[i]);
	}
	fill(0, 0, 20);
	ellipse(circleStartX, circleStartY, 125, 125);
}

function circleChart(){
	var circleStartY = 70;
	var circleStartX = 290;
	noFill();
	strokeWeight(1);
	stroke(200);
	for(var i=0; i<6; i++){
		for(var j=0; j<7; j++){
			ellipse(circleStartX+75*i, circleStartY+75*j, 50, 50);
		}
	}
	fill(180, 100, 80);;
	strokeWeight(1);
	stroke(200);
	for(var i=0; i<6; i++){
		for(var j=0; j<7; j++){
			ellipse(circleStartX+75*i, circleStartY+75*j, totalGraduates.getColumn(i+1)[j+10], totalGraduates.getColumn(i+1)[j+10]);
		}
	}
	textAlign(LEFT);
	fill(0, 0, 60);
	noStroke();
	for(var i=0; i<7; i++){
		text(totalGraduates.getColumn(0)[i+1], circleStartX-85, circleStartY+75*i);
	}
	textAlign(CENTER);
	for(var i=0; i<6; i++){
		text(totalGraduates.getColumn(i+1)[0], circleStartX+75*i, circleStartY-45);
	}
	textAlign(LEFT);
	textSize(8);
	for(var i=0; i<6; i++){
		for(var j=0; j<7; j++){
			text(floor(100*result.getColumn(i+1)[j+1]/totalGraduates.getColumn(i+1)[j+1])+"%", circleStartX+25+75*i, circleStartY+25+75*j);
		}
	}
}

function barChart(){

	//Title
	textAlign(LEFT);
	textSize(14);
	noStroke();
	fill(0, 0, 60);
	text("GSAPP Degrees", startX, 15);

	//Toggle Icons
	fill(0, 0, 40);
	noStroke();
	rect(startX+(column-1)*60, 25, 40, 20);
	for(var i=0; i<6; i++){
		noFill();
		strokeWeight(1);
		stroke(200);
		rect(startX+i*60, 25, 40, 20);
	}
	noStroke();
	fill(0, 0, 60);
	textSize(12);
	textAlign(CENTER);
	text("All", startX+20, 40);
	text("2013", startX+80, 40);
	text("2012", startX+140, 40);
	text("2011", startX+200, 40);
	text("2010", startX+260, 40);
	text("2009", startX+320, 40);

	//Bar Chart
	var startY = 50;
	var spaceBetween = 25;
	var maxValue = 0;
	var totalYear = 0;
	var maxLength = 400;
	for (var i=1; i<result.getRowCount(); i++){
		maxValue = max(maxValue, result.getColumn(column)[i]);
		totalYear = totalYear + parseInt(result.getColumn(column)[i]);
	}
	textAlign(LEFT);
	textSize(8);
	var rectNum = 20;
	for(var i=1; i<result.getRowCount(); i++){
		noStroke;
		for(var j=0; j<map(result.getColumn(column)[i], 0, maxValue, 0, maxLength)/3; j++){
			fill(180, 100, map(j, 0, map(result.getColumn(column)[i], 0, maxValue, 0, maxLength)/3, 30, 100));
			rect(startX+j*3, startY+spaceBetween*i, 1, 7);
		}
		//rect(0, startY+spaceBetween*i, map(result.getColumn(column)[i], 0, maxValue, 0, maxLength), 10);
		noStroke();
		fill(0, 0, 60);
		text((round(result.getColumn(column)[i]/totalYear*100)).toString()+"%", startX+3+map(result.getColumn(column)[i], 0, maxValue, 0, maxLength), startY+spaceBetween*i+9);
		text(result.getColumn(0)[i], startX, startY+spaceBetween*i-2);
	}
}

function mousePressed(){
	if (mouseX > startX && mouseX < startX+40 && mouseY > 25 && mouseY < 45){
		column = 1;
		//print("hello all");
	}
	if (mouseX > startX+60 && mouseX < startX+100 && mouseY > 25 && mouseY < 45){
		column = 2;
		//print("hello 2013");
	}
	if (mouseX > startX+120 && mouseX < startX+160 && mouseY > 25 && mouseY < 45){
		column = 3;
		//print("hello 2012");
	}
	if (mouseX > startX+180 && mouseX < startX+220 && mouseY > 25 && mouseY < 45){
		column = 4;
		//print("hello 2011");
	}
	if (mouseX > startX+240 && mouseX < startX+280 && mouseY > 25 && mouseY < 45){
		column = 5;
		//print("hello 2010");
	}
	if (mouseX > startX+300 && mouseX < startX+340 && mouseY > 25 && mouseY < 45){
		column = 6;
		//print("hello 2009");
	}
	if (mouseX > 0 && mouseX < 175 && mouseY > 200 && mouseY < 220){
		graph = 0;
	}	
	if (mouseX > 0 && mouseX < 175 && mouseY > 230 && mouseY < 250){
		graph = 1;
	}
}

*/
