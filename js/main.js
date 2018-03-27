"use strict"

/**
 * инициализация всех инициализаций
 */
$(document).ready(function()
{
	o2.init();
});

/**
 * основной объект
 * @type {object}
 */
var o2 = 
{
	/**
	 * вызов функций, которые должны запускаться при загрузке страницы
	 */
	init: function()
	{
		this.diagrams.diagram1();
		this.diagrams.diagram2();
		this.diagrams.diagram3();
		this.diagrams.diagram4();
        this.diagrams.diagram5();
		this.formStyler.init();
		this.makePhoneMask();
	},
	popups:
	{
		showPopup: function(popup)
		{
			$('._overlay').addClass('_show');
			$(popup).addClass('_show');
		},
		closePopup: function(popup)
		{
			$('._overlay').removeClass('_show');
			$('.popup').removeClass('_show');
		},
	},
	makePhoneMask: function()
	{
		$('._phone-mask').inputmask({"mask": "+7 (999) 999-99-99"});
	},
	showPass: function(instance) {
		if($(instance).prev().attr('type')== 'password')
			$(instance).prev().attr('type', 'text');
		else
			$(instance).prev().attr('type', 'password');
	},
	formStyler:
	{
		init:function()
		{
			$('select').styler();
		}
	},
	sliders:
	{

	},
	
	tabs:
	{
		tabLength: false,
		init: function()
		{
			this.tabLength = $('.profile-tabs__button').length;
		},
		openTab: function(instance, event)
		{
			event.preventDefault();
			if(!$(instance).hasClass('active'))
			{
				this.setActive(instance);
				this.showTabById($(instance).data('tab-id'));
			}
		},
		// устанавливает активность выбранному табу
		setActive: function(instance)
		{
			$('.profile-tabs__button').removeClass('active');
			$(instance).addClass('active');
		},
		// скрывает предыдущую вкладку и показывает новую
		showTabById: function(id)
		{
			$('.profile-tab').slideUp(0)
			$('.profile-tab[data-tab-id="'+id+'"]').slideDown(300);
		},
	},
	diagrams:
	{
		diagram1: function()
		{
			let pie = document.querySelector('#diagram1');
			if(pie == null)
				return false
			var myDoughnutChart = new Chart(pie, 
			{
				"type":"pie",
				"data":{
					"labels":["Асфальтостроение","Лесопромышленная...","МЭС","четыре","пять"],
					"datasets":[
						{
							"label":"My First Dataset",
							"data":[24,18,33,10,10],
							"backgroundColor":["#97cc64","#77b6e7","#fd5a3e","pink","yellow"],
							"borderWidth":"0",
							"FontSize":"10",
							"borderColor":"transparent"

						}]
						},
						options: {
					        legend: {
					            labels: {
					                FontFamily: 'Roboto',
					            }
					        },
					        layout: {
					            padding: 10
					        }
					    }
			});
		},
		diagram2: function()
		{
			let bar = document.querySelector('#diagram2');
			if(bar == null)
				return false
			var myDoughnutChart = new Chart(bar, 
			{
				"type":"bar",
				"data":{
					
					"datasets":[
						{
							"label":"ДГК",
							"data":[30],
							"backgroundColor":["#fd5a3e"],
							"FontSize":"10",
							"borderColor":"transparent"

						},
						{
							"label":"ДТ-Е-К5",
							"data":[20],
							"backgroundColor":["#77b6e7"],
							"FontSize":"10",
							"borderColor":"transparent"

						},
						{
							"label":"ДТ-З-К5",
							"data":[25],
							"backgroundColor":["#97cc64"],
							"FontSize":"10",
							"borderColor":"transparent"

						},
						{
							"label":"ШНД",
							"data":[15],
							"backgroundColor":["#cc9f64"],
							"FontSize":"10",
							"borderColor":"transparent"

						}
						]
						},
						options: {
					        legend: {
					            labels: {
					                FontFamily: 'Roboto',
					            }
					        },
					        layout: {
					            padding: 10,
					        },
					        scales: {
						        xAxes: 
						        [{
						            gridLines: {
						                offsetGridLines: true,
						                display: false
						            }  
						        }],
						        yAxes: 
						        [{
							      gridLines: {
							        color: "transparent",
							      },
							      ticks: {
							      	display: false
							      },
							    }]
						    }
					    }
			});
		},
		diagram3: function()
		{
			let pie = document.querySelector('#diagram3');
			if(pie == null)
				return false
			var myDoughnutChart = new Chart(pie, 
			{
				"type":"pie",
				"data":{
					"labels":["Асфальтостроение","Лесопромышленная...","МЭС"],
					"datasets":[
						{
							"label":"My First Dataset",
							"data":[24,18,53],
							"backgroundColor":["#97cc64","#77b6e7","#fd5a3e"],
							"borderWidth":"0",
							"FontSize":"10",
							"borderColor":"transparent"

						}]
						},
						options: {
					        legend: {
					            labels: {
					                FontFamily: 'Roboto',
					            }
					        },
					        layout: {
					            padding: 10
					        }
					    }
			});
		},
		diagram4: function()
		{
			let pie = document.querySelector('#diagram4');
			if(pie == null)
				return false
			var myDoughnutChart = new Chart(pie, 
			{
				"type":"pie",
				"data":{
					"labels":["Асфальтостроение","Лесопромышленная...","МЭС"],
					"datasets":[
						{
							"label":"My First Dataset",
							"data":[24,18,53],
							"backgroundColor":["#97cc64","#77b6e7","#fd5a3e"],
							"borderWidth":"0",
							"FontSize":"10",
							"borderColor":"transparent"

						}]
						},
						options: {
					        legend: {
					            labels: {
					                FontFamily: 'Roboto',
					            }
					        },
					        layout: {
					            padding: 10
					        }
					    }
			});
		},
        diagram5: function()
        {
            let pie = document.querySelector('#diagram5');
            if(pie == null)
                return false
            var myDoughnutChart = new Chart(pie,
                {
                    "type":"line",
                    "data":{
                        "labels":[
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                            '03.04',
                        	],
                        "datasets":[
                            {
                                "label":'Цена за единицу',
                                "data":[
                                	32.45,
                                    34.45,
                                    32.45,
                                    34.45,
                                    34.45,
                                    34.45,
                                    32.45,
                                    37.45,
                                    34.45,
                                    34.45,
                                    32.45,
                                    32.45,
                                    34.45,
                                    34.45
                                	],
                                "fill": false,
                                spanGaps: false,
                                borderColor: '#d8880d',
                                "borderWidth": 1,
                                "FontSize":"10",
                                lineTension: 0.000001

                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                FontFamily: 'Roboto',
                            }
                        },
                        layout: {
                            padding: 10
                        }
                    }
                });
        },
	}
}






// JavaScript Document
$(document).ready(function(e) {
	$(".mob_menu_link").click(function(e) {
		if($("#site").width()>767){
			if($("body").hasClass("side_open")){
				$("body").removeClass("side_open");
			}else{
				$("body").addClass("side_open");
			}
		}else{
			if($("body").hasClass("side_mob")){
				$("body").removeClass("side_mob");
			}else{
				$("body").addClass("side_mob");
			}
		}
    });
	
    $(".user_menu .link").click(function(){
		if($(".user_menu").hasClass("open")){
			$(".user_menu").removeClass("open");
			$(".user_menu .menu").stop().slideUp(200);
		}else{
			$(".user_menu").addClass("open");
			$(".user_menu .menu").stop().slideDown(200);
		}
		return false;
	});
	$(".sidebar_menu .menu li").hover(function(){
		$(this).addClass("open");
		$(this).children("ul").stop().slideDown(200);
	},function(){
		$(this).removeClass("open");
		$(this).children("ul").stop().slideUp(200);
	});
	
	$(".sort_form .sort_bl .name").click(function(e) {
        if($(this).parent(".sort_bl").hasClass("open")){
			$(this).parent(".sort_bl").removeClass("open");
			$(this).parent(".sort_bl").find(".desc").slideUp(200);
		}else{
			$(this).parent(".sort_bl").addClass("open");
			$(this).parent(".sort_bl").find(".desc").slideDown(200);
		}
    });
	
	// $("input[type='checkbox']").styler();
	
	$(".catalog_wrap .brand_list li .type_list .topl_bl .topl_desc").click(function(e) {
        if($(".topl_sel").length>0){
			if($(".topl_calc").length>0){
				$(".topl_calc").removeClass("topl_calc");
			}
			if($(this).parent().hasClass("topl_sel")){
				$(this).parent().removeClass("topl_sel");
				$(this).parent().find(".topl_buy_bl").stop().slideUp(300);
			}else{
				$(".topl_sel").find(".topl_buy_bl").stop().slideUp(300);
				$(".topl_sel").removeClass("topl_sel");
				$(this).parent().addClass("topl_sel");
				$(this).parent().find(".topl_buy_bl").stop().delay(300).slideDown(300);
				$('html, body').delay(300).animate({'scrollTop':$(this).parents(".topl_bl").offset().top},500);
				
			}
		}else{
			$(this).parent().addClass("topl_sel");
			$(this).parent().find(".topl_buy_bl").stop().slideDown(300);
			var ot = $(this).parents(".topl_bl").offset().top;
			$('html, body').animate({'scrollTop':ot},500);
		}
		
    });
	
	$(".topl_bl .calc_bl .sub").click(function(e) {
        $(this).parents(".topl_bl").addClass("topl_calc");
		var ot = $(this).parents(".topl_bl").offset().top;
		$('html, body').animate({'scrollTop':ot},500);
		return false;
    });
	
	$(".top_block .other_link .filter").click(function(){
		if($('#site').width()<1200){
			if($(".sort_wrap").hasClass("open")){
				$(".sort_wrap").removeClass("open");
				$(".sort_wrap").stop().fadeTo(200,0).hide(0);
				$("body").removeClass("overflow_hide");
			}else{
				$(".sort_wrap").addClass("open");
				$(".sort_wrap").stop().show(0).fadeTo(200,1);
				$("body").addClass("overflow_hide");
			}
		}
	});
	$(".sort_wrap .close").click(function(){
		if($('#site').width()<1200){
			$(".sort_wrap").removeClass("open");
			$(".sort_wrap").stop().fadeTo(200,0).hide(0);
			$("body").removeClass("overflow_hide");
		}
	});
	
	/*NEW*/$(".sort_wrap .sort_form .sort_bl .more_link a").click(function(){
		$(this).parents(".sort_bl").find(".hide").show();
		$(this).parent(".more_link").hide();
		return false;	
	});
});