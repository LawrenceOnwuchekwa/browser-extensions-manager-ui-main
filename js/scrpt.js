cars  = [1,2,3,4,5,67,5,67];

cars.filter(e=>{
    if(e<2){
        console.log(e);
    }
})

console.log("Hello world")

dataloop();

function dataloop(){
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item => {
            console.log(item);
})
    })
}

let firstValue = 'Remove'
let secondValue = 'Icon'


const gridcontainer = document.getElementById('gridcontainer');
const active  = document.querySelector('#active');
let allcomponent = () =>{
    let content =``
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item => {
            // const imgPath = new URL(item.logo, window.location.href).href;
            content+=`
            <div class='container'>
                <div class='devlens'>
                    <div id="image"><img src="${'',item.logo}"></div>
                    <div id="text">
                        <p id="first-layer">${item.name}</p>
                        <p id="second-layer">${item.description}</p>
                    </div>
                </div>
                <div class='cardbottom'>
                    <button id="firstbtn">${firstValue}</button>
                    ${item.isActive?`
                    <button id="secondbtnActive">o
                        <div id="makecustomm"></div>
                    </button>`
                        : `<div id="secondbtnInactive">
                        <div id="makecustommm"></div>
                    </div>`
                    } 
                </div> 
             </div>                      
            `;
            });
                const ifALL = document.getElementById('all')
                ifALL.style.backgroundColor = `hsl(3, 86%, 64%)`
                gridcontainer.innerHTML = content;
            
        }

    )
    active.addEventListener("click",activeDisplay);
};


window.onload = allcomponent;


function activeDisplay() {
    let content = ''
    const active = document.getElementById('active');
    active.style.backgroundColor = `hsl(3, 86%, 64%)`
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item=>{
            if(item.isActive){
                content+= `
                 <div class='container'>
                    <div class='devlens'>
                        <div id="image"><img src="${'',item.logo}"></div>
                        <div id="text">
                            <p id="first-layer">${item.name}</p>
                            <p id="second-layer">${item.description}</p>
                        </div>
                    </div>
                    <div class='cardbottom'>
                        <button id="firstbtn">${firstValue}</button>
                        <button id="secondbtnActive">o
                            <div id="makecustomm"></div>
                        </button>
                    </div> 
                </div>                       
                `;
            }

});
gridcontainer.innerHTML=content;
        })
    }








