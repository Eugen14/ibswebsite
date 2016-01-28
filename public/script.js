



$(document).ready(function () {
	
	getrequest();
	setInterval(getrequest,30000);


});

function getrequest() {
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function () {
	
		if (xhr.readyState == 4 && xhr.status == 200) {	
			var myarr=JSON.parse(xhr.responseText);
			
			document.getElementById("status").innerHTML = "-- status: "+ xhr.status +" OK";
			
			chart1(myarr);
			chart2(myarr);
			chart3(myarr);
		}
	};
xhr.open("GET","https://arsnova.eu/api/statistics/",true);
xhr.send();
}	
	


function chart1(myarr) {
	
		var daten =[];
		for( bezeichnung in myarr){
			if (myarr[bezeichnung]>=3000) {
			daten.push({y:myarr[bezeichnung], label:bezeichnung,indexLabel:""+myarr[bezeichnung],
						indexLabelFontColor:"black",indexLabelFontSize:12});
			}
		}
		
		CanvasJS.addColorSet("thmfarben",["#80ba24","#4a5c66"]);
			
        var chart = new CanvasJS.Chart("chartContainer1", {
				
				backgroundColor:null  ,
				colorSet:"thmfarben",				
				
				axisX:{
					tickThickness:0,
					lineThickness:0,
					labelFontSize:12,
					labelFontColor:"black"
				},
	 	
				axisY:{
					lineThickness:0,
					gridThickness:0,
					valueFormatString:" ",
					tickLength:0,
				},
        	
            data: [{ type: "bar", dataPoints: daten }]
            
        });

        chart.render();
    }


function chart2(myarr) {
	
		var daten =[];
		for( bezeichnung in myarr){
			if (myarr[bezeichnung]<3000 && myarr[bezeichnung]>=400) {
			daten.push({y:myarr[bezeichnung], label:bezeichnung, indexLabel:""+myarr[bezeichnung],
						indexLabelFontColor:"black",indexLabelFontSize:12});
			}
		}
		
		CanvasJS.addColorSet("thmfarben",["#80ba24","#4a5c66"]);
			
        var chart = new CanvasJS.Chart("chartContainer2", {
        	
				backgroundColor:null  ,
				colorSet:"thmfarben",				
				 
				axisX:{
					tickLength:5,
					tickThickness:0,
					lineThickness:0,
					labelFontSize:12,
					labelFontColor:"black"
				},
	
				axisY:{
					gridThickness:0,
					lineThickness:0,
					valueFormatString:" ",
					tickLength:0
				},
        	
            data: [{ type: "column", dataPoints: daten }]
            
        });

        chart.render();
    }
    

	function chart3(myarr) {
	
		var daten =[];
		for( bezeichnung in myarr){
			if (myarr[bezeichnung]<400 ) {
			daten.push({y:myarr[bezeichnung], label:bezeichnung, indexLabel:""+myarr[bezeichnung],
						indexLabelFontColor:"black",indexLabelFontSize:12});
			}
		}
		
		CanvasJS.addColorSet("thmfarben",["#80ba24","#4a5c66"]);
			
        var chart = new CanvasJS.Chart("chartContainer3", {
				
				backgroundColor:null  ,
				colorSet:"thmfarben",				
				
				axisX:{
					tickLength:5,
					tickThickness:0,
					lineThickness:0,
					labelFontSize:12,
					labelFontColor:"black"
				},
	
				axisY:{
					lineThickness:0,
					gridThickness:0,
					valueFormatString:" ",
					tickLength:0
				},
        	
            data: [{ type: "column", dataPoints: daten }]
            
        });

        chart.render();
    }
	
	
	
