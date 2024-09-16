$(document).ready(function(){
	// 解析当前URL
	const urlx = new URL(window.location.href); 
	// 获取名为"param1"的查询参数
	const paramValue1 =  urlx.searchParams.get('url'); // 'paramName'为要获取的参数名称
	const paramValue2 =  urlx.searchParams.get('bigsmall'); 
	const paramValue3 =  urlx.searchParams.get('fc'); // 'paramName'为要获取的参数名称
	const paramValue4  =  urlx.searchParams.get('bc'); 
    getQrcode(paramValue1,paramValue2,paramValue3,paramValue4);
	
	let logo=urlx.searchParams.get('logo');
	if (!logo || logo.length === 0) {
		$("#logo").hide();
	}else{
		var width_xx=paramValue2*0.25;
		var height_xx=paramValue2*0.25;
		$("#logo").css("height",width_xx);
		$("#logo").css("width",width_xx);
		$('#logo').attr("src",logo);
		$("#logo").show();
		
		
	}
	
});

function getQrcode(url_s,bigsmall=120,fc='black',bc='white'){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width : bigsmall,//设置宽高
      height : bigsmall,
	  colorDark:fc,
	  colorLight:bc,
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(url_s);  
}



