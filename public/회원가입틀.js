function categoryChange(depart) {

	var department_a = ["소프트웨어&서비스 컴퓨팅", "소프트웨어 융합", "응용수학"];
	var department_b = ["문예창작미디어콘텐츠홍보전공", "영미언어문화전공", "공공행정전공"];
	var department_c = ["법학전공", "경영학전공"];
    var department_d = ["의류산업학전공","아동가족복지학전공","식품영양학전공","웰니스스포츠과학전공","융합레포츠전공"];
	var department_e = ["식물생명환경전공", "조경학전공"];
    var department_f = ["동물자원과학전공", "생물산업응용전공"];
	var department_g = ["원예생명공학전공", "응용생명공학전공"];
	var department_h = ["토목공학전공","환경공학전공"];
    var department_i = ["지역자원시스템공학전공","안전공학전공"];
	var department_j = ["식품생명공학전공","화학공학전공"];
	var department_k = ["ICT로봇공학전공","기계공학전공"];
    var department_l = ["전자공학전공","전기공학전공"];
	var department_o = ["디자인전공","건축학전공(5년제)","건축공학전공"];

	var target = document.getElementById("department");

	if(depart.value == "a") var d = department_a;
	else if(depart.value == "b") var d = department_b;
	else if(depart.value == "c") var d = department_c;
    else if(depart.value == "d") var d = department_d;
	else if(depart.value == "e") var d = department_e;
    else if(depart.value == "f") var d = department_f;
	else if(depart.value == "g") var d = department_g;
    else if(depart.value == "h") var d = department_h;
	else if(depart.value == "i") var d = department_i;
    else if(depart.value == "j") var d = department_j;
	else if(depart.value == "k") var d = department_k;
    else if(depart.value == "l") var d = department_l;
	else if(depart.value == "o") var d = department_o;

	target.options.length = 0;

	for (x in d) {
		var opt = document.createElement("option");
		opt.value = d[x];
		opt.innerHTML = d[x];
		target.appendChild(opt);
	}	
}