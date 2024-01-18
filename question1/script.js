let arr=[
    {
        a:10,
        b:60,
        c:40,
        d:100,
    },
    {
        a:50,
        b:60,
        c:10,
        d:400,
    } 
    ,{
        a:20,
        b:34,
        c:42,
        d:100,
    }
]

let arr2=arr.filter((num)=>{
   if(num.b>50){
    return 1
   }
});
let parent=document.getElementById("parent");
arr2.map((num)=>{
    let ele=document.createElement("div");
    ele.innerText=`age ${num.a}`;
    parent.appendChild(ele);
})
console.log(arr2);

// clock/
let timer=document.getElementById("timer");
let current =0;
let date=new Date();
setInterval(()=>{
    let date=new Date();
    // console.log("a")
    let hours=date.getHours()
    let text="Am"
    if(hours>12)
    {
      hours= hours-12;
      text="Pm"
    }
    
	timer.innerHTML=`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()},${hours}:${date.getMinutes()}:${date.getSeconds()} ${text}`;
},1000);
