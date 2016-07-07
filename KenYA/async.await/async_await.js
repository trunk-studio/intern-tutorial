var async = require('asyncawait/async');
var await = require('asyncawait/await');

//async , 建立一個需要花費三秒的工作
const sayHi = async( function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //經由 resolve 回傳字串
            resolve("Hello, How are you today.");
        },3000);
    });
});

const test = async( function(){
    //await 會等 sayHi 執行完成，才執行console.log
    let message = await( sayHi() );
    console.log(message);
});

//console.log 為預期的結果
test();
