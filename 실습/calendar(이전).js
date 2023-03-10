let CDate = new Date();
let today = new Date();

buildCalendar();

function buildCalendar(){  
    let prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0);  
    let thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1);  
    let thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0);  
    document.querySelector(".yearTitle").innerHTML = CDate.getFullYear();//상단에 년도 출력  
    document.querySelector(".monthTitle").innerHTML = CDate.getMonth() + 1;//상단에 월 출력  
    let dates = [];//현재 월 달력에 쓰일 날짜를 모을 배열  
    if(thisFirst.getDay()!=0){//만약 이번 월의 첫째날이 일요일이 아니라면  
        for(let i = 0; i < thisFirst.getDay(); i++){//일요일부터 이번 월의 요일까지 날짜를 구하기 위한 for문  
            dates.unshift(prevLast.getDate()-i);//이전 월의 마지막 날짜부터 1씩 빼가며 unshift(배열 앞에 값을 넣습니다.)  
        }  
    }  
    for(let i = 1; i <= thisLast.getDate(); i++){//이번 월 날짜 구하기  
        dates.push(i);  
    }      
    for(let i = 1; i <= 13 - thisLast.getDay(); i++){//다음 월 날짜 구하기  
        dates.push(i);  
    }  
    let htmlDates = '';//날짜 정보를 html형식으로 저장할 변수  
    for(let i = 0; i < 42; i++){//42일을 출력할 for문  
        if(today.getDate()==dates[i] && today.getMonth()==CDate.getMonth() && today.getFullYear()==CDate.getFullYear()){  
        //만약 년도, 월, 일이 똑같은 dates[i]값이 나오면 class에 today를 추가하기 위함.  
        //이를 이용해서 today클래스에만 테두리를 줄것임.  
            htmlDates += `<div class="date today">${dates[i]}</div>`;//html형식으로 날짜 정보 저장  
        }  
        else{  
            htmlDates += `<div class="date">${dates[i]}</div>`;//html형식으로 날짜 정보 저장  
        }    
        document.querySelector(".dates").innerHTML = htmlDates;//htmlDates를 index.html의 .dates안에 넣는 작업  
    }
}

function prevCal(){  
    CDate.setMonth(CDate.getMonth()-1);  
    buildCalendar();  
    }
    
function nextCal(){  
    CDate.setMonth(CDate.getMonth()+1);  
    buildCalendar();  
    }
