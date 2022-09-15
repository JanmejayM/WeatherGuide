const checkBtn = document.querySelector('#check');

const weatherApi={
    url:"https://api.openweathermap.org/data/2.5/weather",
    key:"ce6292cfce1937c1e7acca60ec921522"
}

const text=document.getElementById("text");


checkBtn.addEventListener('click', (e)=>{
    
    e.preventDefault();
   // console.log('janmejay');
    var loc=text.value;
    
    //console.log(loc);
    

    if(loc!=undefined){
    fetch(`${weatherApi.url}?q=${loc}&appid=${weatherApi.key}&units=metric`)
        .then(res=>res.json())
        .then(data=>disp(data));
     }
    
});


function disp(data)
{
//console.log(data);

//console.log(data.main.temp);
//console.log(data.main.humidity);

document.getElementById("form-box").style.display="none";


document.querySelector(".location-box").innerHTML=`${data.name}, ${data.sys.country}`;
const d=new Date();
document.querySelector(".date-box").innerText= dataManage(d);


document.querySelector(".main-box").innerText=data.weather[0].main;

document.querySelector(".desc-box").innerText=data.weather[0].description;

document.querySelector(".temp-box").innerHTML=`${data.main.temp}&degC`;






document.querySelector("#result-box").style.display="block";



}

function dataManage(dateArg){

	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let year = dateArg.getFullYear();
	let month = months[dateArg.getMonth()];
	let date = dateArg.getDate();
	let day = days[dateArg.getDay()];

	return `${day} ${date} ${month}, ${year}`;
}