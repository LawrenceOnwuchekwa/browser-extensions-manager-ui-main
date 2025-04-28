
let firstValue = 'Remove'
let secondValue = 'Icon'


const gridcontainer = document.getElementById('gridcontainer');
const active  = document.querySelector('#active');
const ifALL = document.getElementById('all');
const inactive = document.querySelector('#inactive');
let allcomponent = () =>{
    active.style.backgroundColor=`hsl(225, 23%, 24%)`;
    active.style.color=`hsl(217, 61%, 90%)`;
    inactive.style.backgroundColor=`hsl(225, 23%, 24%)`;
    inactive.style.color=`hsl(217, 61%, 90%)`;
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
                ifALL.style.backgroundColor = `hsl(3, 86%, 64%)`;
                ifALL.style.color=`hsl(225, 23%, 24%)`;
                
                gridcontainer.innerHTML = content;
            
        }

    )
    active.addEventListener("click",activeDisplay);
    ifALL.addEventListener("click",allcomponent);
    inactive.addEventListener("click",inactiveDisplay);
};


window.onload = allcomponent;


function activeDisplay() {
    console.log("Active")
    ifALL.style.backgroundColor=`hsl(225, 23%, 24%)`;
    ifALL.style.color=`hsl(217, 61%, 90%)`;
    inactive.style.backgroundColor=`hsl(225, 23%, 24%)`;
    inactive.style.color=`hsl(217, 61%, 90%)`;
    let content = '';
    active.style.backgroundColor = `hsl(3, 86%, 64%)`
    active.style.color=`hsl(225, 23%, 24%)`;
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

function inactiveDisplay(){
    inactive.style.backgroundColor=`hsl(3, 86%, 64%)`;
    inactive.style.color=`hsl(225, 23%, 24%)`;
    ifALL.style.backgroundColor=`hsl(225, 23%, 24%)`;
    ifALL.style.color=`hsl(217, 61%, 90%)`;
    active.style.backgroundColor=`hsl(225, 23%, 24%)`;
    active.style.color=`hsl(217, 61%, 90%)`;
    let content = '';
    fetch('../data.json')
    .then(response=>response.json())
    .then(data=>{
        data.forEach(item=>{
            if(!item.isActive){
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
                            <div id="secondbtnInactive">
                                <div id="makecustommm"></div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        gridcontainer.innerHTML=content;
    })

}








