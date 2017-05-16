
window.onload = function () {
    var alertReg = document.getElementById("alertReg");
    var login = document.getElementById("login-button");
    var reg = document.getElementById("register");
    var input = document.getElementsByTagName('input')
    //console.log(input)
    var back = document.getElementsByTagName('section')[0]
    var enroll = document.getElementById('enroll');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('li');
    var lbtn = document.getElementById('lbtn');
    var rbtn = document.getElementById('rbtn');
    var index = 0;
    function animate (offset) {              
        var left = Number(list.style.left.slice(0,-2)) + offset ;
        if(left>0){
            list.style.left = 0+"px"
        }else if(left<-1200){
            list.style.left = -1800+"px";
            //console.log(back);
            back.style.backgroundPosition="0 -850px";
            document.getElementsByClassName('video')[0].style.top = '-850px'
            enroll.style.top="-850px";
            document.getElementById('goodbye').style.opacity=1;
            lbtn.style.display="none";
            rbtn.style.display="none";

        }else{
            list.style.left = left+"px";
        }
    }
    function showButton(index) {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index].className = 'on';
    }

    var timer = null;
    function inopacity() {
      clearInterval(timer)
      enroll.style.opacity = '1';
      lbtn.style.opacity = '1';
      rbtn.style.opacity = '1';
    }
    function outopacity() {
      timer = setTimeout(function(){
        enroll.style.opacity = '0.05';
        lbtn.style.opacity = '0.05';
        rbtn.style.opacity = '0.05';
      }, 500);
    }
    enroll.onmouseenter = inopacity;
    enroll.onmouseleave = outopacity;
    rbtn.onmouseenter = inopacity;
    rbtn.onmouseleave = outopacity;
    lbtn.onmouseenter = inopacity;
    lbtn.onmouseleave = outopacity;


    rbtn.onclick = function () {
        index++;
        if(index>2){
            alertReg.style.opacity = 1;
            alertReg.style.top = '50%';                
            alertReg.style.zIndex = 100;
            index--; 
            showButton(index);
            return;               
        }
        animate(-600);               
        showButton(index);
    }
    lbtn.onclick = function () {
        animate(600);
        index==0?index=0:index--;
        showButton(index);
    }
    for (var i = 0; i < buttons.length-1; i++) {
        buttons[i].onclick = function () {
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -600 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton(index);

        }
    }
    buttons[3].onclick = function () {
        var myIndex = 2 ;
        var offset = -600 * (myIndex - index);
        animate(offset);
        index = myIndex;
        showButton(index);
        alertReg.style.opacity = 1;
        alertReg.style.top = '50%';                
        alertReg.style.zIndex = 100;                
    }

    reg.onclick = function(){
        animate(-600);
        index = 2;
        showButton(index);
    }
    document.getElementsByClassName('vcontrol')[0].firstElementChild.onclick = function(){
      if(v1.paused){
        v1.play();
        this.style.background = '#2fc3a3'
        this.style.color = '#fff'
        this.innerHTML = '暂停';
        enroll.style.opacity = '0.05';
        lbtn.style.opacity = '0.05';
        rbtn.style.opacity = '0.05';
        enroll.onmouseenter = inopacity;
        enroll.onmouseleave = outopacity;
        rbtn.onmouseenter = inopacity;
        rbtn.onmouseleave = outopacity;
        lbtn.onmouseenter = inopacity;
        lbtn.onmouseleave = outopacity;
      }else {
        v1.pause();
        this.style.background = '#fff'
        this.style.color = '#2fc3a3'
        this.innerHTML = '播放';
        enroll.style.opacity = '1';
        lbtn.style.opacity = '1';
        rbtn.style.opacity = '1';
        enroll.onmouseenter = null;
        enroll.onmouseleave = null;
        rbtn.onmouseenter = null;
        rbtn.onmouseleave = null;
        lbtn.onmouseenter = null;
        lbtn.onmouseleave = null;
      }
    }
    document.getElementsByClassName('vcontrol')[0].lastElementChild.onclick = function(){
      console.dir(v1)
      if(v1.muted == false){
        v1.muted = true;
        this.style.background = '#2fc3a3'
        this.style.color = '#fff'
        this.innerHTML = '关闭声音';
      }else {
        this.style.background = '#fff'
        this.style.color = '#2fc3a3'
        this.innerHTML = '开启声音';
        v1.muted = false;
      }
    }

    var logn = document.getElementsByTagName('input');
    for(var i=0;i<logn.length;i++){
      logn[i].onblur =regist;
    }
    
    function regist(){
      if(this.validity.valueMissing){
        this.nextElementSibling.style.display ="block";
        this.nextElementSibling.innerHTML = "该项不能为空"
      }else if(this.validity.tooShort){ 
        this.nextElementSibling.style.display ="block";
        this.nextElementSibling.innerHTML = "不能小于4位"
      }else if(this.validity.tooLong){ 
        this.nextElementSibling.style.display ="block";
        this.nextElementSibling.innerHTML = "不能大于12位"
      }else if(this.validity.patternMismatch){
        this.nextElementSibling.style.display ="block";
        this.nextElementSibling.innerHTML = "必须为6~12位数字"
      }else if(this.validity.typeMismatch){
        this.nextElementSibling.style.display ="block";
        this.nextElementSibling.innerHTML = "请输入正确的email"
      }else {
        this.nextElementSibling.style.display ="none";
      }
    }

    login.onclick = function(){
      for(var i=0;i<logn.length;i++){
        if (logn[i].validity.valid == false) {
          logn[0].autofocus="autofocus";
          return;
        };
      }
      showButton(index); 
      animate(-1200);
      index = 3;
    }
    // function vali(txt,reg){
    //   if(reg.test(txt.value)){               
    //     return true;
    //   }else{//否则                
    //     return false;
    //   }
    // }
    // function valiName(){
    //     if(!vali(input[0],/^\w{1,10}$/)){
    //         input[0].nextElementSibling.style.display ="block";                  
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    // function valiPwd(){
    //     if(!vali(input[1],/^\d{6}$/)){   
    //         input[1].nextElementSibling.style.display ="block";
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    // function nextPwd(){
    //     if(!(input[2].value==input[1].value)){
    //         input[2].nextElementSibling.style.display ="block";
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
}

function getFocus(txt){
    txt.nextElementSibling.style.display ="none";
}
function times(span){
    span.parentElement.parentElement.style.opacity = 0;
    span.parentElement.parentElement.style.zIndex = -1;
    span.parentElement.parentElement.style.top = '40%';
}
