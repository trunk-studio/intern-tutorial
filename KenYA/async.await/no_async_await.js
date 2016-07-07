const sayHi = function(){
    //假設工作需要花費三秒，完成後會回傳字串
    setTimeout(function(){
        return "Hello, How are you today..";
    },3000);
}

const test = function(){
    //呼叫 sayHi 回傳值給 message 並且輸出
    let message = sayHi();
    console.log(message);
}

//但會發現 console.log結果是 "undefined"
test();
