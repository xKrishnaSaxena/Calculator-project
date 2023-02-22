let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
    {
        string=eval(string);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='C')
    {
        string ="";
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='cos')
    {
        let radians = string * (Math.PI/180);
        string =Math.cos(radians);
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='sin')
    {
        let radians = string * (Math.PI/180);
        string =Math.sin(radians);
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;}
    })
})