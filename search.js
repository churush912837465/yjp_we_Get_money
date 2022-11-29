const search = [
    {
        adress: ' 한식 ',
        food: ' ',
        url: ' https://map.naver.com/v5/search/%ED%95%9C%EC%8B%9D?c=14316625.0336467,4285313.2746507,13.48,0,0,0,dh '
    },
    {
        adress: ' ',
        food: ' ',
        url: ' '
    },
    {
        adress: ' ',
        food: ' ',
        url: ' '
    },
    {
        adress: ' ',
        food: ' ',
        url: ' '
    },{
        adress: ' ',
        food: ' ',
        url: ' '
    },
] 

const list = document.getElementById('list');

function showList(val='') {
    list.innerHTML = '';
    const res = search.forEach(Fod => {
        if(Fod.name.includes(val)) {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src='${Fod.url}' alt='${Fod.adress}'>
                <p>주소: ${Fod.adress}</p>
                <p>종류: ${Fod.food}</p>
                `
                list.appendChild(li);
        }
    })
}

showList('');

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) =>{
    e.prevertDefault();
    const val = searchInput.Value;
    console.log(val);
    showList(val);
})