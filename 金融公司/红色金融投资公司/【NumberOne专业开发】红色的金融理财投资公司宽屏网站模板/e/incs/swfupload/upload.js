  function challs_flash_update(){ //Flash 初始化函数
	var a={};
        a.corporationURL = 'www.pageadmin.net';//不可修改
        a.corporationKey ='06a30f26d5c0c408a3339c06c23e9e01';
        a.corporationName = 'Powered By PageAdmin CMS';
        a.leftUrl='';
	a.title = "上传文件"; //设置组件头部名称
	a.FormName = "filedata";//设置Form表单的文本域的Name属性
	a.url = PostFile; //设置服务器接收代码文件
	a.parameter = ""; //设置提交参数，以GET形式提交,例："key=value&key=value&..."
	a.typefile =TypeFile;
	a.newTypeFile = NewTypeFile;
	a.UpSize = 0;//可限制传输文件总容量，0或负数为不限制，单位MB
	a.fileNum =FileNum;//可限制待传文件的数量，0或负数为不限制
	a.size = Size;//上传单个文件限制大小，单位MB，可以填写小数类型
	a.FormID =FormID;
	a.autoClose =1;//上传完成条目，将自动删除已完成的条目，值为延迟时间，以秒为单位，当值为 -1 时不会自动关闭，注意：当参数CompleteClose为false时无效
	a.CompleteClose = true;//设置为true时，上传完成的条目，将也可以取消删除条目，这样参数 UpSize 将失效, 默认为false
	a.repeatFile = true;//设置为true时，可以过滤用户已经选择的重复文件，否则可以让用户多次选择上传同一个文件，默认为false
	a.returnServer = true;//设置为true时，组件必须等到服务器有反馈值了才会进行下一个步骤，否则不会等待服务器返回值，直接进行下一步骤，默认为false
	a.MD5File =0;//设置MD5文件签名模式，参数如下 ,注意：FLASH无法计算超过100M的文件,在无特殊需要时，请设置为0
	a.loadFileOrder=true;//选择的文件加载文件列表顺序，TRUE = 正序加载，FALSE = 倒序加载
	a.mixFileNum=FileNum;//至少选择的文件数量，设置这个将限制文件列表最少正常数量（包括等待上传和已经上传）为设置的数量，才能点击上传，0为不限制
	a.ListShowType =ListShowType;//文件列表显示类型：1 = 传统列表显示，2 = 缩略图列表显示（适用于图片专用上传）,3 = 单列模式4 = MP3播放模式
	a.TitleSwitch = false;//是否显示组件头部
	a.ForceFileNum = 0;//强制条目数量，已上传和待上传条目相加等于为设置的值（不包括上传失败的条目），否则不让上传, 0为不限制，设置限制后mixFileNum,autoClose和fileNum属性将无效！
	a.autoUpload = false;//设置为true时，用户选择文件后，直接开始上传，无需点击上传，默认为false;
	a.adjustOrder = true;//设置为true时，用户可以拖动列表，重新排列位置
	a.deleteAllShow = true;//设置是否显示，全部清除按钮
	a.countData = true;
        a.copyright='false';
	//是否向服务器端提交组件文件列表统计信息，POST方式提交数据access2008_box_info_max 列表总数量access2008_box_info_upload 剩余数量 （包括当前上传条目）access2008_box_info_over 已经上传完成数量 （不包括当前上传条目)
	a.isShowUploadButton = true;//是否显示上传按钮，默认为true
	a.isRotation = true;
	a.isUploadRate = true;//是否显示上传速率
	a.requireMpegBitrates = 0;//MP3播放模式下有效
	a.mpegBitratesError = "mpegBitrates Error";
        a.isErrorStop = true;//遇见错误时，是否停止上传，如果为false时，忽略错误进入下一个上传
	a.isReadCookie = false;
	//是否读取cookie值，POST到服务器端
	//需要增加了challs_flash_cookies() JS函数支持
	//POST到服务器端，值名格式为 access2008_cookie_<cookie值名称>
	//比如 cookie名称为 aaa ,post 服务器 名称为 access2008_cookie_aaa
	return a ;
    }

function challs_flash_onComplete(a){ //每次上传完成调用的函数，并传入一个Object类型变量，包括刚上传文件的大小，名称，上传所用时间,文件类型
	var name=a.fileName; //获取上传文件名
	var size=a.fileSize; //获取上传文件大小，单位字节
	var time=a.updateTime; //获取上传所用时间 单位毫秒
	var type=a.fileType; //获取文件类型，在 Windows 上，此属性是文件扩展名。 在 Macintosh 上，此属性是由四个字符组成的文件类型
	var creationDate = a.fileCreationDate //获取文件创建时间
	var modificationDate = a.fileModificationDate //获取文件最后修改时间
	//document.getElementById('show').innerHTML+=name+' --- '+size+'字节 ----文件类型：'+type+'--- 用时 '+(time/1000)+'秒<br><br>'
}

function challs_flash_onCompleteData(a){ //获取服务器反馈信息事件
	//document.getElementById('show').innerHTML+='<font color="#ff0000">服务器反馈信息：</font><br />'+a+'<br />';
        if(PostFile=="/e/aspx/upload.aspx")
         {
           document.getElementById('uframe').src=PostFile+"?"+a; //图片及附件
         }
        else
         {
           if(Request("tpic",a)!="")
           {
             AuotTitlePic=Request("tpic",a);  //文件组
           }
         }
}

function challs_flash_onStart(a){ //开始一个新的文件上传时事件,并传入一个Object类型变量，包括刚上传文件的大小，名称，类型
	var name=a.fileName; //获取上传文件名
	var size=a.fileSize; //获取上传文件大小，单位字节
	var type=a.fileType; //获取文件类型，在 Windows 上，此属性是文件扩展名。 在 Macintosh 上，此属性是由四个字符组成的文件类型
	var creationDate = a.fileCreationDate //获取文件创建时间
	var modificationDate = a.fileModificationDate //获取文件最后修改时间
	//document.getElementById('show').innerHTML=name+'开始上传！';
        CurrentNums+=1;
        if(PostFile=="/e/aspx/uploads.aspx" && PostType=="add")
         {
           if(CurrentNums>FileNum && FileNum>0)
            {
              alert("对不起，总共只能发布"+FileNum+"个文件!");
              if(TitlePic!="")
               {
                AuotTitlePic="&tpic="+AuotTitlePic;
               }
              document.getElementById('uframe').src=PostFile+"?result=more_nums&cs="+PostType+AuotTitlePic;
              return false;
            }
         }
	return true; //返回 false 时，组件将会停止上传
}

function challs_flash_onStatistics(a){ //当组件文件数量或状态改变时得到数量统计，参数 a 对象类型
	var uploadFile = a.uploadFile; //等待上传数量
	var overFile = a.overFile; //已经上传数量
	var errFile = a.errFile; //上传错误数量
}

function challs_flash_alert(a){ //当提示时，会将提示信息传入函数，参数 a 字符串类型
	//document.getElementById('show').innerHTML+='<font color="#ff0000">组件提示：</font>'+a+'<br />';
}

function challs_flash_onCompleteAll(a){ //上传文件列表全部上传完毕事件,参数 a 数值类型，返回上传失败的数量
	//document.getElementById('show').innerHTML+='<font color="#ff0000">文件上传完毕！</font>';
        if(a!="0")
         {
	  document.getElementById('show').innerHTML+=a+'个文件上传失败！<br />';
         }
        if(PostFile=="/e/aspx/uploads.aspx")
         {
             if(TitlePic!="")
              {
                AuotTitlePic="&tpic="+AuotTitlePic;
              }
           document.getElementById('uframe').src=PostFile+"?result=success&cs="+PostType+AuotTitlePic;
         }
}

function challs_flash_onSelectFile(a){ //用户选择文件完毕触发事件，参数 a 数值类型，返回等待上传文件数量
	//document.getElementById('show').innerHTML+='<font color="#ff0000">文件选择完成：</font>等待上传文件'+a+'个！<br />';
}

function challs_flash_deleteAllFiles(){ //清空按钮点击时，出发事件
	//return confirm("你确定要清空列表吗?");
}

function challs_flash_onError(a){ //上传文件发生错误事件，并传入一个Object类型变量，包括错误文件的大小，名称，类型
	var err=a.textErr; //错误信息
	var name=a.fileName; //获取上传文件名
	var size=a.fileSize; //获取上传文件大小，单位字节
	var type=a.fileType; //获取文件类型，在 Windows 上，此属性是文件扩展名。 在 Macintosh 上，此属性是由四个字符组成的文件类型
	var creationDate = a.fileCreationDate //获取文件创建时间
	var modificationDate = a.fileModificationDate //获取文件最后修改时间
	document.getElementById('show').innerHTML+='<font color="#ff0000">'+name+' - '+err+'</font><br />';
}

function challs_flash_FormData(a){ // 使用FormID参数时必要函数
	try{
		var value = '';
		var id=document.getElementById(a);
		if(id.type == 'radio'){
			var name = document.getElementsByName(id.name);
			for(var i = 0;i<name.length;i++){
				if(name[i].checked){
					value = name[i].value;
				}
			}
		}else if(id.type == 'checkbox'){
			var name = document.getElementsByName(id.name);
			for(var i = 0;i<name.length;i++){
				if(name[i].checked){
					if(i>0) value+=",";
					value += name[i].value;
				}
			}
		}else if(id.type == 'select-multiple'){
		    for(var i=0;i<id.length;i++){
		        if(id.options[i].selected){
					if(i>0) value+=",";
			         values += id.options[i].value; 
			    }
		    }
		}else{
			value = id.value;
		}
		return value;
	 }catch(e){
		return '';
	 }
}

function challs_flash_cookies(){ //获取cookie
	var postParams = {};
	var i, cookieArray = document.cookie.split(';'), caLength = cookieArray.length, c, eqIndex, name, value;
	for (i = 0; i < caLength; i++) {
		c = cookieArray[i];
		// Left Trim spaces
		while (c.charAt(0) === " ") {
			c = c.substring(1, c.length);
		}
		eqIndex = c.indexOf("=");
		if (eqIndex > 0) {
			name = c.substring(0, eqIndex);
			value = c.substring(eqIndex + 1);
			postParams[name] = value;
		}
	}
	return postParams;
}

function challs_flash_style(){ //组件颜色样式设置函数
	var a = {};
	
	/*  整体背景颜色样式 */
	a.backgroundColor=['#D1EAFE','#D1EAFE','#D1EAFE'];	//颜色设置，3个颜色之间过度
	a.backgroundLineColor='#D1EAFE';					//组件外边框线颜色
	a.backgroundFontColor='#066AD1';					//组件最下面的文字颜色
	a.backgroundInsideColor='#FFFFFF';					//组件内框背景颜色
	a.backgroundInsideLineColor=['#B3CDF1','#B3CDF1'];	//组件内框线颜色，2个颜色之间过度
	
	
	/*  头部颜色样式 */
	a.Top_backgroundColor=['#e0eaf4','#bcd1ea']; 		//颜色设置，数组类型，2个颜色之间过度
	a.Top_fontColor='#245891';							//头部文字颜色
	
	
	/*  按钮颜色样式 */
	a.button_overColor=['#FBDAB5','#f3840d'];			//鼠标移上去时的背景颜色，2个颜色之间过度
	a.button_overLineColor='#e77702';					//鼠标移上去时的边框颜色
	a.button_overFontColor='#ffffff';					//鼠标移上去时的文字颜色
	a.button_outColor=['#ffffff','#dde8fe']; 			//鼠标离开时的背景颜色，2个颜色之间过度
	a.button_outLineColor='#91bdef';					//鼠标离开时的边框颜色
	a.button_outFontColor='#333333';					//鼠标离开时的文字颜色
	
	/* 滚动条样式 */	
	a.List_scrollBarColor=0x000000;				//滚动条颜色
	a.List_scrollBarGlowColor=0x34629e;			//滚动条阴影颜色

	/* 文件列表样式 */
	a.List_backgroundColor='#EAF0F8';					//列表背景色
	a.List_fontColor='#333333';						//列表文字颜色
	a.List_errFontColor='#ff0000';							//列表错误信息文字颜色
	a.List_LineColor='#B3CDF1';							//列表分割线颜色
	a.List_cancelOverFontColor='#ff0000';				//列表取消文字移上去时颜色
	a.List_cancelOutFontColor='#D76500';				//列表取消文字离开时颜色
	a.List_progressBarLineColor='#B3CDF1';				//进度条边框线颜色
	a.List_progressBarBackgroundColor='#D8E6F7';		//进度条背景颜色	
	a.List_progressBarColor=['#FFCC00','#FFFF00'];		//进度条进度颜色，2个颜色之间过度
	
	/* 错误提示框样式 */
	a.Err_backgroundColor='#ffffff';					//提示框背景色
	a.Err_fontColor='#ff0000';							//提示框文字颜色
	a.Err_shadowColor='#ffffff';						//提示框阴影颜色
	
	
	return a;
}

function challs_flash_language(){ //组件文字设置函数
	var a = {
		// $[1]$ $[2]$ $[3]$是替换符号 
		// \n 是换行符号

		//按钮文字
		ButtonTxt_1:'停 止',
		ButtonTxt_2:'选择文件',
		ButtonTxt_3:'上 传',
		ButtonTxt_4:'清空',
		
		//全局文字设置
		Font:'宋体',
		FontSize:12,
		
		//提示文字
		Alert_1:'初始化错误：\n\n没有找到 JAVASCRITP 函数 \n函数名为 challs_flash_update()',
		Alert_2:'初始化错误：\n\n函数 challs_flash_update() 返回类型必须是 "Object" 类型',
		Alert_3:'初始化错误：\n\n没有设置上传路径地址',
		Alert_4:'添加上传文件失败，\n\n不可以再添加更多的上传文件!',
		Alert_5:'添加上传文件失败，\n\n等待上传文件列表只能有$[1]$个，\n请先上传部分文件!',
		Alert_6:'提示信息：\n\n请再选择$[1]$个上传文件！',
		Alert_7:'提示信息：\n\n请至少再选择$[1]$个上传文件！',
		Alert_8:'\n\n请选择上传文件！',
		Alert_9:'上传错误：\n\n$[1]$',

		//界面文字
		Txt_5:'等待上传',
		Txt_6:'等待上传：$[1]$个  已上传：$[2]$个',
		Txt_7:'字节',
		Txt_8:'总量限制（$[1]$MB）,上传失败',
		Txt_9:'文件超过$[1]$MB,上传失败',
		Txt_10:'秒',
		Txt_11:'保存数据中...',
		Txt_12:'上传完毕',
		Txt_13:'文件加载错误',
		Txt_14:'扫描文件...',
		Txt_15:'验证文件...',
		Txt_16:'取消',
		Txt_17:'无图',
		Txt_18:'加载中',

		Txt_20:'关闭',
		Txt_21:'确定',
		Txt_22:'上传文件',
		
		//错误提示
		Err_1:'上传地址URL无效',
		Err_2:'服务器报错：$[1]$',
		Err_3:'上传失败,$[1]$',
		Err_4:'服务器提交效验错误',
		Err_5:'效验数据无效错误'
	};

	return a;

}

function Request(paras,url) //获取url中参数
 { 
  if(url==null){url=location.href;}
  var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
  var paraObj={} 
  for (i=0;j=paraString[i]; i++)
   { 
    paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length); 
   } 
  var returnValue = paraObj[paras.toLowerCase()]; 
  if(typeof(returnValue)=="undefined")
  { 
   return ""; 
  }
 else
  { 
    return returnValue; 
  } 
} 

var isMSIE = (navigator.appName == "Microsoft Internet Explorer");   
function thisMovie(movieName){   
  if(isMSIE){   
  	return window[movieName];   
  }else{
  	return document[movieName];   
  }   
}