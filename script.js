let colorlist = ["red","blue","green","orange"];

let  pick = document.getElementsByClassName("pick");
let container  = document.getElementById("container");

// console.log(pick,container);

for(let i=0;i<pick.length;i++)
{
    pick[i].style.backgroundColor = colorlist[i];

    pick[i].addEventListener('click', function(){
        changecolor(colorlist[i] , i);
    })
}

changecolor = (color,active) =>{

    
    
    for(let i = 0; i<pick.length; i++)
    {
        pick[i].classList.remove('active');
        
    }
    
    pick[active].classList.add('active');
    

    container.style.backgroundColor = color ;

    
}