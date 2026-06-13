let money = 0;
let getting = 1;

function get_money(){
    money = money + getting;
    document.getElementById("money").value = money;
}
/*呼叫此方程
getElementById 透過ID尋找
*/

function buyoldmoney1(){
    if(money < 100){
        alert("你沒錢!");
        return;
    }
    
    money = money - 100;
    document.getElementById("money").value = money;
    alert("已購買");
    getting = getting + 1;
    

    document.getElementById("getting_money").value = getting

    return;
}


function buynewmoney1(){
    if(money < 20){
        alert("你沒錢!");
        return;
    }
    
    money = money - 20;
    document.getElementById("money").value = money;
    alert("已購買");

    setInterval(function(){
        money = money + 1;
        document.getElementById("money").value = money;
    }, 1000);

    return;
}

function buynewmoney10(){
    if(money < 200){
        alert("你沒錢!");
        return;
    }
    
    money = money - 200;
    document.getElementById("money").value = money;
    alert("已購買");

    setInterval(function(){
        money = money + 10;
        document.getElementById("money").value = money;
    }, 1000);

    return;
}