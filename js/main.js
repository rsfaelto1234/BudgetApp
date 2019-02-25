// Inicializar Firebase
var config = {
    apiKey: "AIzaSyCbddiI71fIxHc8FJJavmlS87JQMF5XHX0",
    authDomain: "budgetapp-5ed04.firebaseapp.com",
    databaseURL: "https://budgetapp-5ed04.firebaseio.com",
    projectId: "budgetapp-5ed04",
    storageBucket: "budgetapp-5ed04.appspot.com",
    messagingSenderId: "1094536442676"
  };
firebase.initializeApp(config);

// GLOBAL
var x2,x3

// ADD VALUES TO FIREBASE
document.getElementById("form1").addEventListener("submit",(e)=>{
    e.preventDefault();
    var budget = {budget:document.getElementById("budgetFirebase").value};
    firebase.database().ref("budgetapp/budget").set(budget);
    document.getElementById("budgetFirebase").value="";
});

document.getElementById("form2").addEventListener("submit",(e)=>{
    e.preventDefault();
    var expenses = {expenses:document.getElementById("expensesFirebase").value};
    firebase.database().ref("budgetapp/expenses").set(expenses);
    document.getElementById("expensesFirebase").value="";
});

// READ VALUES
function read(){
    firebase.database().ref("budgetapp/budget").child("budget").on("value",function(value){
        document.getElementById("budget").innerHTML=`${value.val()}`;
        x2 = value.val();
        document.getElementById("chart").innerHTML=`<canvas id="myChart"></canvas>`;
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Presupuesto", "Gastos"],
                datasets: [{
                    label: '# of Votes',
                    data: [x2, x3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        document.getElementById("total").innerHTML=`${x2-x3}`;
    });


    firebase.database().ref("budgetapp/expenses").child("expenses").on("value",function(value){
        document.getElementById("expenses").innerHTML=`${value.val()}`;
        x3 = value.val();
        document.getElementById("chart").innerHTML=`<canvas id="myChart"></canvas>`;
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Presupuesto", "Gastos"],
                datasets: [{
                    label: '# of Votes',
                    data: [x2, x3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        document.getElementById("total").innerHTML=`${x2-x3}`;
    });



}
