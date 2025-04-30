
let firstValue = 'Remove'
let secondValue = 'Icon'

const moonSun = document.querySelector('#first-right');
const moonchild = document.querySelector('.moon')
const sun = document.querySelector('.sun');
const gridcontainer = document.getElementById('gridcontainer');
const active  = document.querySelector('#active');
const ifALL = document.getElementById('all');
const inactive = document.querySelector('#inactive');
const cody = document.querySelector('body');
const firstSection = document.querySelector('.first-section');
const extensionList = document.querySelector('.subb');


/* const showHide = ()=>{
    console.log("I have been clicked")
    if(moonSun.classList.contains('sun')){
        moonSun.classList.remove('sun');
        sun.style.display='none';
        moonchild.style.display = 'inline';
        firstSection.style.backgroundColor='white';
        extensionList.style.color=`hsl(227, 75%, 14%)`
        cody.style.backgroundImage=`linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`;
        container.style.backgroundColor='white';
    }
    else{
        moonSun.classList.remove('moon');
        moonSun.classList.add('sun');
        moonchild.style.display='none';
        sun.style.display='inline';
        firstSection.style.backgroundColor=`hsl(225, 23%, 24%)`;
        cody.style.backgroundImage=`linear-gradient(180deg, #040918 0%, #091540 100%)`;
        extensionList.style.color='white';
    }

} */

    function showHide() {
        // Example toggle between dark and light mode
        document.body.classList.toggle("dark-theme");
      
        // Optional: Swap sun/moon image visibility
       const container = document.querySelectorAll('.container');
       const firstlayer = document.querySelectorAll('#first-layer');
       const secondlayer = document.querySelectorAll('#second-layer');
       const firstbtn = document.querySelectorAll('#firstbtn');
      
        if (document.body.classList.contains("dark-theme")) {
          sun.style.display = "none";
          moonchild.style.display = "inline";
          firstSection.style.backgroundColor='white';
          extensionList.style.color=`hsl(227, 75%, 14%)`;
          cody.style.backgroundImage=`linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`;
          container.forEach(element=>{
            element.style.backgroundColor='white';
          });
          firstlayer.forEach(element=>{
            element.style.color=`hsl(227, 75%, 14%)`;
          })
          secondlayer.forEach(element=>{
            element.style.color=`hsl(226, 25%, 17%)`;
          })
          firstbtn.forEach(element=>{
            element.style.color='hsl(225, 23%, 24%)'
          })
        } else {
          sun.style.display = "inline";
          moonchild.style.display = "none";
          firstSection.style.backgroundColor=`hsl(225, 23%, 24%)`;
          cody.style.backgroundImage=`linear-gradient(180deg, #040918 0%, #091540 100%)`;
          extensionList.style.color='white';
          container.forEach(element=>{
            element.style.backgroundColor=`hsl(225, 23%, 24%)`;
          });
          firstlayer.forEach(element=>{
            element.style.color='#ffffff';
          });
          secondlayer.forEach(element=>{
            element.style.color=`hsl(217, 61%, 90%)`;
          });
          firstbtn.forEach(element=>{
            element.style.color='white';
          })
        }
      }

;


let allcomponent = () =>{
    moonSun.style.backgroundColor='red';
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
document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("click",function(e){
        const moonSunBtn = e.target.closest("#first-right");
        if(moonSunBtn){
            showHide();
        };
    });
});



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








