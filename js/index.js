$(function () {
	
	// 加载json数据
    $.ajax({
        url: './data/data.json',
        success: function (data) {
			// 判断是否成功
			if (data.msg === '成功' && data.code === '1') {
				$("#content-action").empty();
				$(data.result).each(function(i,d){
					$("#content-action").append(''+
						'<div class="item">'+
							'<div class="item-content">'+
								'<a href="#">'+d.title+'</a>'+
								'<p>'+
									'<span>'+d.time+'</span>'+
									'<i>'+d.status_DISPLAY+'</i>'+
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