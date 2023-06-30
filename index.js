const length = document.querySelector('#amount');
const convertFrom = document.querySelector("#from");
const convertTo = document.querySelector("#to");
const formular = document.querySelector(".content");
const result = document.querySelector("#result");

const hints = [
{
    sameUnit: 'gives the same value'

},
{
    c_m : 'Divide the length by 100'
},
{
    c_km:'Divide the length by 100000'
},
{
    m_cm:'Multiply the length by 100'
},
{
    m_km:'Divide the length by 1000'
},
{
    km_cm:'Multiply the length by 100000'
},
{
    km_m:'Multiply the length by 1000'
}
];

const units = [
    'meter',
    'kilometer'
];

selectElement = document.querySelectorAll('select')

for (let i=1;i>=0;i--){
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElement[0].firstElementChild.insertAdjacentHTML('afterend',option);
}
for (let i=1;i>=0;i--){
    let option = `<option value=${units[i]}>${units[i]}</option>`;
    selectElement[1].firstElementChild.insertAdjacentHTML('afterend',option);
}
function convertUnits (){
    if(
        (convertFrom.value === 'centimeter')&&(convertTo.value==='centimeter')||
        (convertFrom.value === 'meter')&&(convertTo.value==='meter')||
        (convertFrom.value === 'kilometer')&&(convertTo.value==='kilometer')
    ){
     formular.textContent = hints[0].sameUnit
     result.value = length.value;
    }
    else if((convertFrom.value === 'centimeter')&&(convertTo.value==='meter')){
     formular.textContent = hints[1].c_m; 
     result.value = length.value / 100
    }
    else if((convertFrom.value === 'centimeter')&&(convertTo.value==='kilometer')){
     formular.textContent = formular.textContent = hints[2].c_km;
     result.value=length.value / 100000; 
    }
    else if((convertFrom.value === 'meter')&&(convertTo.value==='centimeter')){
     formular.textContent = formular.textContent = hints[3].m_cm;
     result.value = length.value * 100; 
    }
    else if((convertFrom.value === 'meter')&&(convertTo.value==='kilometer')){
     formular.textContent = formular.textContent = hints[4].m_km;
     result.value=length.value / 1000; 
    }
    else if((convertFrom.value === 'kilometer')&&(convertTo.value==='centimeter')){
     formular.textContent = formular.textContent = hints[5].km_cm;
    result.value = length.value * 100000; 
    }
    else if((convertFrom.value === 'kilometer')&&(convertTo.value==='meter')){
     formular.textContent = formular.textContent = hints[6].c_m;
     result.value=length.value * 1000; 
    }
}
convertFrom.addEventListener('change',convertUnits)
convertTo.addEventListener('change',convertUnits)
length.addEventListener('change',convertUnits)