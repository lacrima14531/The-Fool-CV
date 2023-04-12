$(document).ready(function(){

	// header color change(導覽列內容變色)
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");//新的-index-21
		if(scrollDistance > 80){//如果超過80連接這個-component-271
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");//否則移除
		}
	})

	// wow plugin initialize(進場動畫效果-768以上才執行)
	if(screen.width > 768){
		new WOW().init();
	}
	

	// fancybox plugin options(作品集燈箱設定-可重複)
	$('[data-fancybox]').fancybox({
		loop : true
	});

	// stellar plugin initialize(視差滾動元件-768以上才執行)
	if(screen.width > 768){
		$(window).stellar();
	}
})