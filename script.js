const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '10243d1695msh2dc33553e100000p132fedjsn3494fa47d532',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        document.getElementById("temp").innerHTML=response.temp+'&#8451';
        document.getElementById("temp2").innerHTML=response.temp;
        document.getElementById("min_temp").innerHTML=response.min_temp+'&#8451';
        document.getElementById("humidity").innerHTML=response.humidity+'%';
        document.getElementById("humidity2").innerHTML=response.humidity;
        document.getElementById("sunrise").innerHTML=moment.utc(response.sunrise,'X').add(3600,'seconds').format('HH:mm a');;
        document.getElementById("sunset").innerHTML=moment.utc(response.sunset,'X').add(3600,'seconds').format('HH:mm a');;
        document.getElementById("wind_degrees").innerHTML=response.wind_degrees+'&#176';
        document.getElementById("wind_speed").innerHTML=response.wind_speed+'km/h';
        document.getElementById("wind_speed2").innerHTML=response.wind_speed;
        document.getElementById("max_temp").innerHTML=response.max_temp+'&#8451';
        document.getElementById("feels_like").innerHTML=response.feels_like+'&#8451';
    
    
    
    }
    )
    .catch(err=>console.error(err))
}
function mode(){
      document.documentElement.setAttribute('data-bs-theme', window.localStorage.getItem('theme'))
      
    console.log(window.localStorage.getItem('theme'))
  
   
}
function func(){
    if(localStorage.getItem("theme")==="light"){
    //if( document.documentElement.attributes[0].value==="dark")
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem("theme","dark")
    }
    else{
        document.documentElement.setAttribute('data-bs-theme', 'light');
        localStorage.setItem("theme","light")
    }
}
const setWeather=(city,value)=>{
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        document.getElementById("temper"+value).innerHTML=response.temp+document.getElementById("temper"+value).innerHTML;
       
        document.getElementById("mn_temp"+value).innerHTML=response.min_temp+document.getElementById("mn_temp"+value).innerHTML;
        
        document.getElementById("hum"+value).innerHTML=response.humidity+ document.getElementById("hum"+value).innerHTML;
        document.getElementById("srise"+value).innerHTML= moment.utc(response.sunrise,'X').add(3600,'seconds').format('HH:mm a');
           
        document.getElementById("sset"+value).innerHTML=moment.utc(response.sunset,'X').add(3600,'seconds').format('HH:mm a');

        document.getElementById("wd"+value).innerHTML=response.wind_degrees+'&#176';
       
        document.getElementById("ws"+value).innerHTML=response.wind_speed+"km/h";
        document.getElementById("mx_temp"+value).innerHTML=response.max_temp+document.getElementById("mx_temp"+value).innerHTML;
        document.getElementById("feels_like"+value).innerHTML=response.feels_like+'&#8451';
    
    
    
    }
    )
    .catch(err=>console.error(err))
}
function function1(){
   document.body.classList.toggle("mystyle");
}
final.addEventListener("click",(e)=>{
    e.preventDefault();
  getWeather(city.value);
})
getWeather("Delhi");
setWeather("Seattle",'1');
setWeather("Boston",'2');
setWeather("Lucknow",'3');
setWeather("Kolkata",'4');
