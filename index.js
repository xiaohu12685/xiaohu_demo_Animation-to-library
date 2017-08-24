var imgurl = '1.png';//图片路径
var positions = ['0 -854', '-174 -852', '-349 -852', '-524 -852', '-698 -852', '-873 -848'];//图片定位坐标
var ele = document.getElementById('odiv');//获取div
animation(ele, positions, imgurl);//传参

function animation(ele, positions, imgurl) {
	ele.style.backgroundImage = 'url(' + imgurl + ')';//把图片路径拼接给div
	ele.style.backgroundRepeat = 'no-repeat';//图片不重复
	var index = 0;// 先var一个空值

	function run() {
		var position = positions[index].split(' ');//切割数组
		ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';//图片定位X轴+Y轴
		index++;
		if(index >= positions.length) {//判断数组的长度，使它循环
			index = 0;
		}
		a=setTimeout(run, 80);
	}
	run();
	i=true;
	ele.onclick=function(){
		if(i){
			clearTimeout(a);
			i=false;
		}else{
			a=setTimeout(run, 80);
			i=true;
		}
	}
}