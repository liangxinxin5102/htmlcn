  // JavaScript Document	
$(function(){
	
	var i=0;
	var n=$('.ques').size();
	var lists=$('.ques');
	var myansewr=[];
	var trueanswer=[1,2,3,4];
	lists.hide();
	lists.first().show();
	
	$('.nextQues').click(function(){
		var flag=0;
	if(i==0){
	var flag=0;
	var obj1=document.getElementsByName('t1');
	for(var k=0;k<obj1.length;k++){
		if(obj1[k].checked){
			flag=1;
			var a1=obj1[k].value;
			myansewr.push(k+1);
			alert(obj1[k].value);
			}
		}
		if( flag==0){
			i--;
			alert("请选择");
			}
			}
	
	
	if(i==1){
		var flag=0;
	var obj2=document.getElementsByName('t2');
	for(var k=0;k<obj2.length;k++){
		if(obj2[k].checked){
			myansewr.push(k+1);
			var a2=obj2[k].value;
			alert(obj2[k].value);
			flag=1;
			}
		}
		if(flag==0){
			i--;
			alert("请选择");
			}
		}
	
	if(i==2){
		var flag=0;
		var obj3=document.getElementsByName('t3');
	for(var k=0;k<obj3.length;k++){
		if(obj3[k].checked){
			flag=1;
			var a2=obj3[k].value;
			myansewr.push(k+1);
			alert(obj3[k].value);
			}
		}
		if(flag==0){
			i--;
			alert("请选择选项");
			}
		}
	
	if(i==n-1){
		var flag=0;
		var obj4=document.getElementsByName('t4');
	for(var k=0;k<obj4.length;k++){
		if(obj4[k].checked){
			var a4=obj4[k].value;
			alert(obj4[k].value);
			myansewr.push(k+1);
			flag=1;
			}
		}
		if(flag==0){
			i--;
			alert("请选择选项");
			}
		$('.nextQues').text("提交");
		if($('.nextQues').text()=="提交"){
			$('.nextQues').click(function(){
				alert("你的答案是："+myansewr);
				if(myansewr.toString()==trueanswer.toString()){
					alert("恭喜全部答对");
					}else{
						alert("Be more careful!");
						}
				})
			}
		}
	
		
		i++;
		lists.eq(i).show();
		lists.eq(i).siblings().hide();
		})
		
	
	})