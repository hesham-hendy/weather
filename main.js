
 
 let btnsearch=document.querySelector("#search")
 let inputsearch=document.querySelector("#searchinput")
 

 btnsearch.addEventListener("click", function(){
    getweather(inputsearch.value)
 })


 getweather("london")
let user;



 async function getweather(country){

  let response= await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=afd09cab4d5a407fb3c80239240312&q=${country}&days=3`)
 let final=  await response.json()
 user=final;

display()

}

function getDayName(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

function formatDate(date) {
    const day = date.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getMonth()];
    return `${day} ${month}`;
}


    









function display(){
    const today = new Date();
    const dayNames = [
        getDayName(today),
        getDayName(new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)),
        getDayName(new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)),
    ];

    const formattedDate = formatDate(today);



    let cartona= "";


   
 cartona+=`
          <div class="card" >

                <ul class="list-group list-group-flush">

                    <li class="list-group-item d-flex justify-content-between ">${dayNames[0]}
                        <p>${formattedDate}</p>
                    </li>
                </ul>
                <div class="container">
                    <p class="text ">${user.location.name}</p>
                    <p class="degree">${user.location.lat} c</p>
                    <img
                        src="${user.current.condition.icon}"
                        width="20%" alt>
                    <p class="text-info">${user.current.condition.text}</p>

                    <div class="icons ">
                        <i class="fa-solid fa-umbrella">20%</i>
                        <i class="fa-solid fa-cloud">18 km/h</i>
                        <i class="fa-solid fa-wind">East</i>
                    </div>
                </div>

            </div>

             <div class="card" >

                <ul class="list-group list-group-flush">

                    <li
                        class="list-group-item d-flex justify-content-center ">${dayNames[1]}

                    </li>
                </ul>
                <div class="container img1  ">
                    <img src="${user.forecast.forecastday[2].day.condition.icon}" class="m-5" alt>
                    <div class="text1 d-block ">
                        <p>${user.forecast.forecastday[2].day.maxtemp_c} c</p>
                        <p>${user.forecast.forecastday[2].day.mintemp_c} c</p>
                        <p class="text-info">${user.current.condition.text}</p>
                    </div>

                </div>

            </div>

            <div class="card">

                <ul class="list-group list-group-flush">

                    <li
                        class="list-group-item d-flex justify-content-center">${dayNames[2]}

                    </li>
                </ul>
                <div class="container img1  ">
                    <img src="${user.forecast.forecastday[2].day.condition.icon}" class="m-5" alt>
                    <div class="text1 d-block ">
                        <p>${user.forecast.forecastday[2].day.maxtemp_c} c</p>
                        <p>${user.forecast.forecastday[2].day.mintemp_c} c</p>
                        <p class="text-info">${user.current.condition.text}</p>
                    </div>
                </div>

            </div>

          
        
        `
    
    
        document.querySelector("#rowdata").innerHTML=cartona

}