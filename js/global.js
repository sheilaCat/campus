/**
author :Warren
http://www.wglong.com
**/
$.mobile.transitionFallbacks.slide = "none";
$.mobile.buttonMarkup.hoverDelay = "false";
function goTo(page,mav) {
	clicksound(mav);
	showLoading();
	$.mobile.changePage(page, {
		  transition: "none"
		});

}
function goBack() {
	$.mobile.back();
}

function showLoading(){
	$.mobile.loadingMessageTextVisible = true;
	//$.mobile.showPageLoadingMsg("a", "加载中..." );
}


function hideLoading(){
	$.mobile.hidePageLoadingMsg();
}

function errpic(thepic) {
	thepic.src = "../img/no_pic.png" 
}

function getUrlParam(string) {  
    var obj =  new Array();  
	    if (string.indexOf("?") != -1) {  
	        var string = string.substr(string.indexOf("?") + 1); 
	        var strs = string.split("&");  
	        for(var i = 0; i < strs.length; i ++) {  
	            var tempArr = strs[i].split("=");  
	            obj[i] = tempArr[1];
	        }  
	    }  
	    return obj;  
} 

//init iscroll
var myScroll;
function initMyScroll(id){
	function loaded() {
		if(myScroll!=null){
			myScroll.destroy();
		}
		myScroll = new iScroll(id,{checkDOMChange:false});
	}
}
//鼠标点击声音
function clicksound(i){
	var mid=new Array();
	mid[0]="1.wav";
	mid[1]="2.wav";
	var Media = new Audio(mid[i]);  
	//audio和video都可以通过标签获取对象
	Media.play();
}
/*function clinkDownList(listClick,listDown){
	var listClick=$(listClick);
	var listId=$(listDown);
	$(listClick).click(function(){
				$(listId).slideToggle("fast");
				});
				$(document).click(function (e) {
					var drag = $(listClick),
					dragel = $(listClick)[0],
					target = e.target;
					if (dragel !== target && !$.contains(dragel, target)) {
						$(listId).slideUp("fast");
						}
				});
	}
*/

function loaded(wrapper) {
	var myScroll;
	if (myScroll != null) {
		myScroll.destroy();
	}
	myScroll = new iScroll(wrapper, {
		checkDOMChange: false,
		hScrollbar: false,
		vScrollbar: false
	});
};










































