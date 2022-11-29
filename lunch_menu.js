const KoFood = ["김치찌개","된장찌개","제육볶음","비빔밥","국밥","한식"]
const ChFood = ["짜장면","짬뽕","탕수육","마라탕","팔보채","가지볶음","중식"]
const JpFood = ["초밥","라멘","우동","가라아케","덮밥","새우튀김","일식"]
const UsFood = ["파스타","스테이크","피자","햄버거","오믈렛","양식"]
const AllFood =[KoFood,ChFood,JpFood,UsFood]

food = ""

function KogetFood(){
    const KoNum = Math.floor(Math.random() * KoFood.length);
    document.getElementById("see_food").innerText = "추천메뉴는 '" + KoFood[KoNum]+"' 입니다 ";
    food = KoFood[KoNum]
}

function ChgetFood(){
    const ChNum = Math.floor(Math.random() * ChFood.length); 
    document.getElementById("see_food").innerText ="추천메뉴는 '"+ ChFood[ChNum]+"' 입니다 ";
    food = ChFood[ChNum]
}

function JpgetFood(){
    const JpNum = Math.floor(Math.random() * JpFood.length); 
    document.getElementById("see_food").innerText ="추천메뉴는 '"+ JpFood[JpNum]+"' 입니다 ";
    food = JpFood[JpNum]
}

function UsgetFood(){
    const UsNum = Math.floor(Math.random() * UsFood.length); 
    document.getElementById("see_food").innerText ="추천메뉴는 '"+ UsFood[UsNum]+"' 입니다 ";
    food = UsFood[UsNum]
}

function RandomgetFood(){
    const AllNum = Math.floor(Math.random() * AllFood.length); //0부터 리스트의 길이만큼 난수
    const AllNum2 = Math.floor(Math.random() * AllFood[AllNum].length) //랜덤수를 인덱스로 넣어서 해당위치에 해당하는 리스트이 길이만큼 난수
    document.getElementById("see_food").innerText ="추천메뉴는 '"+ AllFood[AllNum][AllNum2]+"' 입니다 "; //처음 뽑은위치의 리스트의 두번째뽑은 난수의 인덱스값의 값
    food = AllFood[AllNum][AllNum2]
}

function search_food(){
    var openNewWindow = window.open("about:blank");
    openNewWindow.location.href = "https://map.naver.com/v5/search/" + food;
}
