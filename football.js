var APIkey = '4449be15ece22adc61fee32d2cc7281e62684b5b8cb14769aa81b1801156b613';
var league_id = '62';
var timeFrom = '2018-11-30';
var timeTo = '2019-01-04';

var boxItem = document.getElementById("matchgame")
boxItem.innerHTML = "Loading...";
//Lay data cac tran giua 2 team;

fetch(`https://apifootball.com/api/?action=get_standings&league_id=${league_id}&&APIkey=${APIkey}`).then(function(respone){
    respone.json().then(function(data){
        stanDings(data)
    })
});
fetch(`https://apifootball.com/api/?action=get_events&from=${timeFrom}&to=${timeTo}&league_id=62&APIkey=${APIkey}`).then(function(respone){
    respone.json().then(function(data){
        boxItem.innerHTML = "";
        Events(data)
    })
});




function swap(x, y) {
    var tg;
    tg = x;
    x = y;
    y = tg;
}

var content = document.getElementById("content");
function stanDings(data){
    console.log(data);
    data.sort(function(a, b){
        return a.overall_league_position - b.overall_league_position
    })
    data.forEach(function(item, index) {
        
        var innerHTML = `
        <tr>
        <th scope="row">${index+1}</th>
        <td>${item.team_name}</td>
        <td>${item.overall_league_payed}</td>
        <td>${item.overall_league_W}</td>
        <td>${item.overall_league_D}</td>
        <td>${item.overall_league_L}</td>
        <td>${item.overall_league_GF}</td>
        <td>${item.overall_league_GA}</td>
        
        <td>${item.overall_league_PTS}</td>
        
        </tr>
        ` 
        content.insertAdjacentHTML("beforeend",innerHTML);
    })
    
};
var matchgame = document.getElementById("matchgame");
        function Events(data){
            console.log(data);
            for (item of data){
                var match = `
                <div class = "boxItem ">
                    <div class = "d-flex ">
                        <div>${item.match_awayteam_name}</div>
                        <span class = "ml-1">${item.match_awayteam_score}</span>
                    </div>
                    <div class = "d-flex ">
                        <div>${item.match_hometeam_name}</div>
                        <span class = "ml-1">${item.match_hometeam_score}</span>
                    </div>
                    <div class = "d-flex ">
                        <div>${item.match_date}</div>
                        <span class = "ml-1">${item.match_time}</span>
                    </div>
                </div>
        
                `
                matchgame.insertAdjacentHTML("beforeend",match);
            }
           
        };
var table = document.getElementsByClassName("table");
function btnclick(){
    var btnstd = document.getElementById("btnstd");
    btnstd.addEventListener("click",function(){
        table[0].style.display = "";
        boxItem.style.display = "none";
    })   
}
function btnclick2(){
    var match = document.getElementById("match");
    match.addEventListener("click",function(){
        table[0].style.display = "none";
        boxItem.style.display = "flex";
    })   
}
btnclick();
btnclick2();



