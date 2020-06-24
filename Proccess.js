// var x = setInterval(function () {
//     $.get('getr.php', function (data) {
//         var datar = JSON.parse(data);

//         console.log(datar[0]);
//         // var Totalinternal = 0;
//         // var TotalMediumcare = 0;
//         // var TotalCentralcare = 0;
//         // for (var a = 0; a < datar[0].length; ++a) {
         
//         //     var internal = datar[0][a]["internal"];
//         //     var Mediumcare = datar[0][a]["Mediumcare"];
//         //     var Centralcare = datar[0][a]["Centralcare"];

//         //     var arrCol = ["internal", "Mediumcare", "Centralcare"];
//         //     for (var B = 0; B < arrCol.length; ++B) {
//         //         SetValueAll("internal", internal,a);
//         //         SetValueAll("Mediumcare", Mediumcare,a);
//         //         SetValueAll("Centralcare", Centralcare,a);
//         //     }
//         //     Totalinternal += Number(internal);
//         //     TotalMediumcare += Number(Mediumcare);
//         //     TotalCentralcare += Number(Centralcare);
            
//         // }
//         //  document.getElementById("Totalinternal").textContent = Totalinternal;
//         //  document.getElementById("TotalMediumcare").textContent = TotalMediumcare;
//         //  document.getElementById("TotalCentralcare").textContent = TotalCentralcare;

//     });
   
// }, 1000);



$.get('getr.php', function (data) {
    var datar = JSON.parse(data);
    console.log(datar[0]);
})
function Gto(){

    window.location.href = "inde.php";
}