let inp = document.querySelector("input");
let btns = document.querySelectorAll("button");
for(let btn of btns){
    if(btn.id=="ac"){
        btn.addEventListener("click",function(){
            inp.value="";
        });
    }else if(btn.id=="per"){
        btn.addEventListener("click",function(){
            inp.value+="%";
        });
    }else if(btn.id=="back"){
        btn.addEventListener("click",()=>{
            inp.value = inp.value.slice(0,-1);
        })
    }else if(btn.id=="div"){
        btn.addEventListener("click",function(){
            inp.value+="/";
        });
    }else if(btn.id=="7"){
        btn.addEventListener("click",function(){
            inp.value+="7";
        });
    }else if(btn.id=="8"){
        btn.addEventListener("click",function(){
            inp.value+="8";
        });
    }else if(btn.id=="9"){
        btn.addEventListener("click",function(){
            inp.value+="9";
        });
    }else if(btn.id=="mul"){
        btn.addEventListener("click",function(){
            inp.value+="*";
        });
    }else if(btn.id=="4"){
        btn.addEventListener("click",function(){
            inp.value+="4";
        });
    }else if(btn.id=="5"){
        btn.addEventListener("click",function(){
            inp.value+="5";
        });
    }else if(btn.id=="6"){
        btn.addEventListener("click",function(){
            inp.value+="6";
        });
    }else if(btn.id=="sub"){
        btn.addEventListener("click",function(){
            inp.value+="-";
        });
    }else if(btn.id=="1"){
        btn.addEventListener("click",function(){
            inp.value+="1";
        });
    }else if(btn.id=="2"){
        btn.addEventListener("click",function(){
            inp.value+="2";
        });
    }else if(btn.id=="3"){
        btn.addEventListener("click",function(){
            inp.value+="3";
        });
    }else if(btn.id=="add"){
        btn.addEventListener("click",function(){
            inp.value+="+";
        });
    }else if(btn.id=="00"){
        btn.addEventListener("click",function(){
            inp.value+="00";
        });
    }else if(btn.id=="0"){
        btn.addEventListener("click",function(){
            inp.value+="0";
        });
    }else if(btn.id=="."){
        btn.addEventListener("click",function(){
            inp.value+=".";
        });
    }else if(btn.id=="equal"){
        btn.addEventListener("click",function(){
            inp.value=parseInt(eval(inp.value));
        });
    }
    // console.log(btn.id);
}
inp.addEventListener("input",()=>{
    inp.value = inp.value.replace(/[^0-9+\-*/]/g,'');
});
inp.addEventListener("keydown",(e)=>{
    // console.log(e);
        if(e.key=="Enter"){
            let btn1 = document.querySelector("#equal");
            btn1.click();
        }
    })