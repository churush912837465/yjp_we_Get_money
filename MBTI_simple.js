function getName(){
    checkbox_check();
    const User_name = document.getElementById("ninput").value;
    document.getElementById("getName").innerText = User_name + "님의 검사 결과";
    document.getElementById("getMBTI").innerText = mbti[0]+mbti[1]+mbti[2]+mbti[3]+"입니다.";
}
const box_list = []
const mbti =[]
function checkOnlyOne(element,name) {

    const checkboxes = document.getElementsByName(name);
    
    checkboxes.forEach((cb) => {cb.checked = false;})
    
    element.checked = true;
    if(box_list in element){
        

    }
    else{
        box_list.push(element);
    }
}

function checkbox_check(){
    for(let i = 0; i < box_list.length; i++){
        if(box_list[i].checked){
            mbti.push(box_list[i].value);
        }
    }
}