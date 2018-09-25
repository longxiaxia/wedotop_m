$(function(){    	
	//头尾加载
	//$("#header").load("header.html");
	//$("#footer").load("footer.html");
	//轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop:true
    });	
    
    //首页一二级菜单
    $("body").on("click","nav a.fLevel",function(){
    	$(this).toggleClass("active");
    	$(this).parent().find(".submenu").slideToggle();
	});	

	var htmlFont = parseFloat(document.getElementsByTagName('html')[0].style.fontSize);
	//首页价值观效果
    $("body").on("click","#index .value a",function(){
		$(this).addClass("active").siblings().removeClass("active");
		if($(this).index()==0){
			console.log(2);
			$("#index .value a").eq(1).addClass("te");
		}else{
			$("#index .value a").eq(1).removeClass("te");
		}
	});
	
	
	
})	 