$(function(){
	
	
	
	
	//topBtn 감추기/보이기, header의 배경색 바꾸기 
	
	$("#topBtn").fadeOut();
			//400은 스크롤 길이 500은 끝나는 길이
	$(window).scroll(function(){
		if($(this).scrollTop()>=800){
			$("#topBtn").fadeIn(900);
			$("header").css("background","#222");
		}else{
			$("#topBtn").fadeOut(900);
			$("header").css("background","rgba(0,0,0,0.7)");
		}	
	});
	
	//모바일 환경에서 삼선메뉴클릭시 전체메뉴 보이기/감추기
	//현재의 상태를(삼선메뉴상태) s=1
	//삼선메뉴 클릭시 보이는 상태를 s=0
	
	var s=1;
	$(".mAllMenu>ul").click(function(){
		$(this).toggleClass("mX");
		
		if(s==1){
			$("nav").stop().animate({right:0},500);
			s=0;
		}else{							//단위를 적을땐 ""이 들어감
			$("nav").stop().animate({right:"-50%"},500);
			s=1;
		}
	});
	
	//가로사이즈 자동 인식
	$(window).resize(function(){
			
		var w=$(window).width();
		
		if(w>=1200){
			$("nav").css({
				"right":"10%",
				"top":"50%",
				"transform":"translateY(-50%)"
			});
		}else{
			$("nav").css({
				"right":"-50%",
				"top":"0%",
				"transform":"translateY(0%)"
			});
		}
	});
	
	
	//주메뉴 클릭시 해당페이지로 이동할때 메뉴 포커스 설정과 부드럽게 이동
	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("on");
		$(this).addClass("on");
		
		
		$("body").scrollTo($(this).attr("href"),500);
		return false;
		
	});
	
	$("#topBtn a").click(function(){
		$("body").scrollTo($(this).attr("href"),500);
		return false;
	});
	
	//마우스 스크롤시 해당페이지 메뉴의 포커스 설정
	$(window).scroll(function(){
		
		//스크롤 된 화면의 top의 값을 구하여 sct변수에 기억
		var sct=$(window).scrollTop();
				
		var menu=$("nav ul li a");
		var content=$("#Wrap>section");
		
			//0번쨰(homt)에 위치한 가장 위쪽값을 구하라
		if(sct>=content.eq(0).offset().top){
			menu.removeClass("on");
			menu.eq(0).addClass("on");
		}
		

		if(sct>=content.eq(1).offset().top){
			menu.removeClass("on");
			menu.eq(1).addClass("on");
			$("#about .top").css("top","0");
			$("#about .bottom").css("bottom","0");
		}else{
			$("#about .top").css("top","-50%");
			$("#about .bottom").css("bottom","-50%");
		}


		if(sct>=content.eq(2).offset().top){
			menu.removeClass("on");
			menu.eq(2).addClass("on");
			$("#skills .left").css("transform","scale(1)");
			$("#skills .right").css("transform","scale(1)");
		}else{
			$("#skills .left").css("transform","scale(0)");
			$("#skills .right").css("transform","scale(0)");
		}


		if(sct>=content.eq(3).offset().top){
			menu.removeClass("on");
			menu.eq(3).addClass("on");
			$("#work .left").css("height","100%");
			$("#work .right").css("height","100%");
		}else{
			$("#work .left").css("height","0");
			$("#work .right").css("height","0");
		}
		

		if(sct>=content.eq(4).offset().top){
			menu.removeClass("on");
			menu.eq(4).addClass("on");
			$("#contact .left").css("width","45%");
			$("#contact .right").css("width","45%");
		}else{
			$("#contact .left").css("width","0");
			$("#contact .right").css("width","0");
		}

	});
	
	$(document).ready(function(){
		//초기값 설정
		$(".box").hide();
		$("#first").show();
		
		function tabmenu1(){
			$(".box").hide();
			$("#first").show(500);
			$(".navi ul li").removeClass("on");
			$(".navi ul li:nth-child(1)").addClass("on");
		}
		
		function tabmenu2(){
			$(".box").hide();
			$("#seconde").show(500);
			$(".navi ul li").removeClass("on");
			$(".navi ul li:nth-child(2)").addClass("on");
		}
		
		$(".navi ul li:nth-child(1) a").click(function(){
			tabmenu1();
		});
		
		$(".navi ul li:nth-child(2) a").click(function(){
			tabmenu2();
		});
		
	})
	
	window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});
	
	var $html = $("html");
 
	var page = 1;
 
	var lastPage = $(".content").length;
 
	$html.animate({scrollTop:0},10);

	$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});
	const circle = document.querySelector(".circle");
			document.addEventListener("mousemove",(e) => { // mousemove이벤트를 이용해 움

	            // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

	            // pageX, pageY와는 다름.

	            const mouseX = e.pageX;

	            const mouseY = e.pageY;

	            circle.style.left = mouseX + 'px';

	            circle.style.top = mouseY + 'px';

	        });
	
	 
	function tag () {
		let progress = document.querySelector('.progressTag')
		let interval = 1
		let updatesPerSecond = 1000 / 60
		let end = progress.max * 0.6

		function animator () {
		progress.value = progress.value + interval
		if ( progress.value + interval < end){
		setTimeout(animator, updatesPerSecond);
		} else { 
		progress.value = end
		}
	}

	setTimeout(() => {
		animator()
	}, updatesPerSecond)
	}
		tag();
		
	function tag () {
		let progress = document.querySelector('.progressTag2')
		let interval = 2
		let updatesPerSecond = 1000 / 60
		let end = progress.max * 0.6

		function animator () {
		progress.value = progress.value + interval
		if ( progress.value + interval < end){
		setTimeout(animator, updatesPerSecond);
		} else { 
		progress.value = end
		}
	}

	setTimeout(() => {
		animator()
	}, updatesPerSecond)
	}
		tag();
		
		
});








