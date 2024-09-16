// 获取输入框中的值
getCurrentAddress();

function isNumberLessThan(input) {
    // 检查输入是否为数字
    if (!Number.isNaN(Number(input))) {
        // 如果输入是数字，检查它是否小于10
		if(Number(input) <= 320){
			return true;
		}
    } else {
        // 如果输入不是数字，则返回false
        return false;
    }
}

function getQrcode(url_s,bigsmall=120){
  
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width : bigsmall,//设置宽高
      height : bigsmall,
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcode.makeCode(url_s);
  
}

function getCurrentAddress(){
	browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      setCurrentAddress(tabs[0].url);
  })
} 

function setCurrentAddress(url){
	document.getElementById('currentAddress').value=url;
    getQrcode(url,220);
}
    
// 监听表单提交事件
document.getElementById('diy').addEventListener('click', function(e) {
  var value = document.getElementById('currentAddress').value;
  var bigsmall=document.getElementById('bigsmall').value;
  var fc=document.getElementById('fc').value;
  var bc=document.getElementById('bc').value;
  var logo=document.getElementById('logo_path').value;

  if(isNumberLessThan(bigsmall)){
	window.location.href="../mypage/my-page.html?url=" + value + "&bigsmall=" + bigsmall + "&fc=" + fc + "&bc=" + bc + "&logo=" + logo;
	$("#tip").hide();
  }else{
	$("#tip").show();
	return false;
  }
  
});



/*browser.runtime.sendMessage(
  {
    // 里面的值应该可以自定义，用于判断哪个请求之类的
    type: 'fetch',
    url: "" // 需要请求的url
  },
  response => JSON.parse(response.text()));
  */