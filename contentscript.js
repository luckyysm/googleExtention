//获取登录框
var username = document.getElementById('userName');
var password =   document.getElementById('passWord');
var submitStatic = document.getElementById("loginButton");
var code = document.getElementById('imgForcheck');

if(window.location.href.indexOf('http://www.echargenet.com/portal/views/index.html') >=0 ) {window.location.href='http://www.echargenet.com/portal/views/login/login.html';}

//建立通道通信扩展框
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    // 识别不同事件
    if (request.greeting == "hello1"){
        username.focus();
        username.value = '13717554855';
        password.focus();
        password.value = 'qwer1234@';
        // 如果识别了验证码以后，可以直接登录
        // submitStatic.click();
        // 向扩展框传递信息
        // sendResponse({farewell: "goodbye"});  
    }else if(request.greeting == "hello2"){
        username.focus();
        username.value = '15201611455';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello3"){
        username.focus();
        username.value = '15801306036';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello4"){
        username.focus();
        username.value = '18201105072';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello5"){
        username.focus();
        username.value = '18911156107';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello6"){
        username.focus();
        username.value = '15811284816';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello7"){
        username.focus();
        username.value = '13811990395';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello8"){
        username.focus();
        username.value = '15718830627';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello9"){
        username.focus();
        username.value = '13718995675';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello10"){
        username.focus();
        username.value = '18510787907';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello11"){
        username.focus();
        username.value = '18611792242';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello12"){
        username.focus();
        username.value = '18613869940';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello13"){
        username.focus();
        username.value = '18800052069';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello14"){
        username.focus();
        username.value = '15236183122';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello15"){
        username.focus();
        username.value = '15901202465';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello16"){
        username.focus();
        username.value = '13466659734';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello17"){
        username.focus();
        username.value = '18701612656';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello18"){
        username.focus();
        username.value = '13501298359';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello19"){
        username.focus();
        username.value = '15811253455';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello20"){
        username.focus();
        username.value = '18612082866';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello21"){
        username.focus();
        username.value = '13701252117';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello22"){
        username.focus();
        username.value = '13470501386';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello23"){
        username.focus();
        username.value = '15174006179';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello24"){
        username.focus();
        username.value = '18241420570';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello25"){
        username.focus();
        username.value = '18304148348';
        password.focus();
        password.value = 'qwer1234@';
    }else if(request.greeting == "hello26"){
        username.focus();
        username.value = '15174004352';
        password.focus();
        password.value = 'qwer1234@';
    }else{
      sendResponse({}); // snub them.
    }
  });
// 判断页面链接执行时间函数
;(function(){
    var t,t_money;
    if( window.location.href.indexOf('http://www.echargenet.com/portal/views/rest/user/toMyHome.html') != -1 ){
        t = setInterval(function(){
            var J_MyPrivilegeInfo = $('.accountConTopRight').eq(0).children('p').find('span').text();
            var go_buy = $('.accountConTopRight').eq(0).children('div').find('span').eq(1);
            var this_mobile = $('.userName').text().slice(7);
            if( J_MyPrivilegeInfo && this_mobile ){
                var mymoney = parseFloat(J_MyPrivilegeInfo);
                // 判断钱数
                if( (this_mobile == 2242 || this_mobile == 9940 || this_mobile == 2069 || this_mobile == 3122 )  &&  mymoney < 50 ){
                    //alert("小于50");
                    go_buy.click();
                }else if( ( this_mobile != 2242 && this_mobile != 9940 && this_mobile != 2069 && this_mobile != 3122  ) &&  mymoney < 100 ){
                    //alert(this_mobile)
                    go_buy.click();
                }else if( this_mobile == 3455 &&  mymoney < 1500 ){
                	//alert(1);
                    go_buy.click();
                }
                clearInterval(t)
            }
        },100)
    }
    if( window.location.href.indexOf('http://www.echargenet.com/portal/views/rest/recharge/forAddRecharge.html?left=zhcz') != -1 ){
        t_money = setInterval(function(){
            // 修改充值金额
            var myhavemoney = $('#monNum');
            var this_mobile = $('.loginDiv').find('span a:first').text().slice(7);
            if(  ( this_mobile == 2242 || this_mobile == 9940 || this_mobile == 2069 || this_mobile == 3122 ) &&  myhavemoney  ){
                myhavemoney.focus();
                myhavemoney.val( ( 50 - parseFloat( $('.charge').val() ) ).toFixed(2) );
                myhavemoney.blur();
                clearInterval(t_money);
            }else if(  ( this_mobile !== 2242 && this_mobile !== 9940 && this_mobile !== 2069 && this_mobile !== 3122 && this_mobile !== 3455 ) &&  myhavemoney  ){

                myhavemoney.focus();
                myhavemoney.val( ( 300 - parseFloat( $('.charge').val() ) ).toFixed(2) );
                myhavemoney.blur();
                clearInterval(t_money);
            }else if(this_mobile == 3455 &&  myhavemoney){
            	alert($('.charge').val());
            	 myhavemoney.focus();
                myhavemoney.val( ( 1500 - parseFloat( $('.charge').val() ) ).toFixed(2) );
                myhavemoney.blur();
                clearInterval(t_money);
            }
        },100)
    }
})(jQuery);
