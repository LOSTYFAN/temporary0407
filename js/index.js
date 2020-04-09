$(function () {
	
	// 加载json数据
    $.ajax({
        url: './data/data.json',
        success: function (data) {
			// 判断是否成功
			if (data.msg === '成功' && data.code === '1') {
				// 清空子节点
				$("#content-action").empty();
				$(data.result).each(function(i,d){
					// 循环遍历添加元素
					$("#content-action").append(''+
						'<div class="item">'+
							'<div class="item-content">'+
								'<a href="#">'+d.title+'</a>'+
								'<p>'+
									'<span>'+d.time+'</span>'+
									'<i>'+d.status_DISPLAY+'</i>'+
									'<i>'+d.author+'</i>'+
								'<p>'+
							'</div>'+
							'<div class="item-img">'+
								'<img src="'+d.img+'" >'+
							'</div>'+
						'</div>'+
					'');
				});
			}   
        }
    });
});