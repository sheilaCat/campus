	
	
	
	 var myScroll, pullDownEl, pullDownOffset, generatedCount = 0;

    //下拉刷新 
    // myScroll.refresh();		
	// 数据加载完成后，调用界面更新方法
    //bang//
	/*实现系统信息的下拉更新*/
	function pullDownAction_zw03(){
		 setTimeout(function() {
            var content = ""
            for (var i = 1; i < 3; i++) {
                content = content + "<li data-icon=\"false\">";
                content = content + "<a href=\"#\" >";
                content = content + "<div class=\"ui-grid-b\">";
                content = content + "<div class=\"ui-block-a\">";
                content = content + "<h2><font color=\"green\">[私信]</font>XXX给你留言了</h2>"
                content = content + "</div>";
				content = content + "<div class=\"ui-block-c\">";
				content = content + "<h4><font size=\"1px\">2小时前</font></h4>";
				content = content + "</div>";
                content = content + "</div>";
                content = content + "<textarea disabled=\"disabled\">哈哈哈哈哈</textarea>";
				content = content + "</li></a>";
            }
            $("#message").prepend(content).listview('refresh');
			window.plugins.SimplePlugin.test("test",function(result) {	//成功时执行，传入的是Javascript中对象方法的参数
			//output.innerHTML = result;//把输入框的的内容的内容显示在输出div上
			alert("回调成功");
            }, function(err) {						//错误时执行
                // failure callback
                //output.innerHTML = 'err: ' + err  + ', Failed to invoke simple plugin';
				alert("为嘛会失败呢？");
            });
            myScroll.refresh(); //数据加载完成后，调用界面更新方法
        },1000);}

    // 初始化iScroll控件
    function loaded_zw02() {
        if (myScroll != null) {
            myScroll.destroy();
        }
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;


        myScroll = new iScroll('MwrapperContent', {
            // 重要样式
            useTransition: false,
			checkDOMChange: false,
				scrollbarClass: 'myScrollbar',
				hScrollbar: false,		// 隐藏滚动条
				vScrollbar: false,
				
            topOffset: pullDownOffset,           
            onScrollMove: function() {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                    this.minScrollY = 0;
                } 
                
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                    pullDownAction_zw03(); // Execute custom function (ajax call?)
				
                } 
            }
        });

        setTimeout(function() {
            document.getElementById('MwrapperContent').style.left = '0';
        },0);
    }
	
	//页面二即将显示执行代码-------------------------
	$("#message").live("pagebeforeshow", function(){
		setTimeout(loaded_zw02, 200);
		setTimeout(function() {myScroll.refresh()}, 1000);
		//setTimeout(myScroll.refresh(), 800);
	});
	//页面二显示时执行代码-------------------------
	$("#message").on("pageshow",function() {
		
	});