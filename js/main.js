// JavaScript Document
jQuery(document).ready(function(e) {
	jQuery(".mob_menu_link").click(function(e) {
		if(jQuery("#site").width()>767){
			if(jQuery("body").hasClass("side_open")){
				jQuery("body").removeClass("side_open");
			}else{
				jQuery("body").addClass("side_open");
			}
		}else{
			if(jQuery("body").hasClass("side_mob")){
				jQuery("body").removeClass("side_mob");
			}else{
				jQuery("body").addClass("side_mob");
			}
		}
    });
	
    jQuery(".user_menu .link").click(function(){
		if(jQuery(".user_menu").hasClass("open")){
			jQuery(".user_menu").removeClass("open");
			jQuery(".user_menu .menu").stop().slideUp(200);
		}else{
			jQuery(".user_menu").addClass("open");
			jQuery(".user_menu .menu").stop().slideDown(200);
		}
		return false;
	});
	jQuery(".sidebar_menu .menu li").hover(function(){
		jQuery(this).addClass("open");
		jQuery(this).children("ul").stop().slideDown(200);
	},function(){
		jQuery(this).removeClass("open");
		jQuery(this).children("ul").stop().slideUp(200);
	});
	
	jQuery(".sort_form .sort_bl .name").click(function(e) {
        if(jQuery(this).parent(".sort_bl").hasClass("open")){
			jQuery(this).parent(".sort_bl").removeClass("open");
			jQuery(this).parent(".sort_bl").find(".desc").slideUp(200);
		}else{
			jQuery(this).parent(".sort_bl").addClass("open");
			jQuery(this).parent(".sort_bl").find(".desc").slideDown(200);
		}
    });
	
	jQuery("input[type='checkbox']").styler();
	
	jQuery(".catalog_wrap .brand_list li .type_list .topl_bl .topl_desc").click(function(e) {
        if(jQuery(".topl_sel").length>0){
			if(jQuery(".topl_calc").length>0){
				jQuery(".topl_calc").removeClass("topl_calc");
			}
			if(jQuery(this).parent().hasClass("topl_sel")){
				jQuery(this).parent().removeClass("topl_sel");
				jQuery(this).parent().find(".topl_buy_bl").stop().slideUp(300);
			}else{
				jQuery(".topl_sel").find(".topl_buy_bl").stop().slideUp(300);
				jQuery(".topl_sel").removeClass("topl_sel");
				jQuery(this).parent().addClass("topl_sel");
				jQuery(this).parent().find(".topl_buy_bl").stop().delay(300).slideDown(300);
				jQuery('html, body').delay(300).animate({'scrollTop':jQuery(this).parents(".topl_bl").offset().top},500);
				
			}
		}else{
			jQuery(this).parent().addClass("topl_sel");
			jQuery(this).parent().find(".topl_buy_bl").stop().slideDown(300);
			var ot = jQuery(this).parents(".topl_bl").offset().top;
			jQuery('html, body').animate({'scrollTop':ot},500);
		}
		
    });
	
	jQuery(".topl_bl .calc_bl .sub").click(function(e) {
        jQuery(this).parents(".topl_bl").addClass("topl_calc");
		var ot = jQuery(this).parents(".topl_bl").offset().top;
		jQuery('html, body').animate({'scrollTop':ot},500);
		return false;
    });
	
	jQuery(".top_block .other_link .filter").click(function(){
		if(jQuery('#site').width()<1200){
			if(jQuery(".sort_wrap").hasClass("open")){
				jQuery(".sort_wrap").removeClass("open");
				jQuery(".sort_wrap").stop().fadeTo(200,0).hide(0);
				jQuery("body").removeClass("overflow_hide");
			}else{
				jQuery(".sort_wrap").addClass("open");
				jQuery(".sort_wrap").stop().show(0).fadeTo(200,1);
				jQuery("body").addClass("overflow_hide");
			}
		}
	});
	jQuery(".sort_wrap .close").click(function(){
		if(jQuery('#site').width()<1200){
			jQuery(".sort_wrap").removeClass("open");
			jQuery(".sort_wrap").stop().fadeTo(200,0).hide(0);
			jQuery("body").removeClass("overflow_hide");
		}
	});
	
	/*NEW*/jQuery(".sort_wrap .sort_form .sort_bl .more_link a").click(function(){
		jQuery(this).parents(".sort_bl").find(".hide").show();
		jQuery(this).parent(".more_link").hide();
		return false;	
	});
});