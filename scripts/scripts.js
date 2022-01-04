$(document).ready(function(){
	$(".button").click(function(){
		getWeather();
	});

	$('#input').on("keypress",function(enter){
		if(enter.which == 13){
			getWeather();
		}
	});
});

function getWeather() {
	$(".item").remove();
	var inputValue = $("#input").val();
	$.ajax({
		url:'https://api.openweathermap.org/data/2.5/forecast?q='+inputValue+'&appid=a22e97f1e4e872aabcdf1d0a4726c22d&units=metric',
		success: function (respons) {
			respons.list.forEach(function(item) {
				$ (".blog").append(`
					<div class="item">
						<img src="https://openweathermap.org/img/wn/`+ item.weather[0].icon +`@2x.png">
						<div class="item_main-temp">` + Math.round(item.main.temp) + " ℃ " + `</div>
						<div class="item_dt-txt">` + item.dt_txt + `</div>
						<div class="item_temp-max">Maximal ~` + Math.round(item.main.temp_max) + `</div>
						<div class="item_temp-min">Minimal ~` + Math.round(item.main.temp_min) + `</div>
						<div class="item_wind">Wind ~` + item.wind.speed + `</div>
						<span class="item_wind-deg" style="transform:rotate(`+item.wind.deg+`deg)">→</span>
					</div>`
				);
			});
		} 
	});
}