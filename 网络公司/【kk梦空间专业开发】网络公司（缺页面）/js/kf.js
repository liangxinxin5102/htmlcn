
	function hz6d$(id)
	{
		return document.getElementById(id) ? document.getElementById(id) : null;
	}
	
	var hz6d_referer = '&referer=' + window.encodeURIComponent(window.location.href); //当前访问页面
	var kf_success=1; var kftype=2;
	var powered_by_53kf_url = 'http://www.53kf.com/53kfkefu.html?yx_from=53KF02',
			powered_by_53kf_txt = 'Powered by 53KF';
	function hz6d_createScript(id, url){
		var oldS=hz6d$(id);
		if(oldS!=null) oldS.parentNode.removeChild(oldS);
		var t=document.createElement('script');
		t.src = url;
		t.type = 'text/javascript';
		t.id = id;
		document.getElementsByTagName('head')[0].appendChild(t);
	}
	
	(function(window, undefined) {
		// window.open 方法重写 
		// 支持ie/ff/chrome/safari/opera 
		var _open = window.open;
		window.open = function(sURL, sName, sFeatures, bReplace) {
			if (sURL == undefined) {
				sURL = ''
			}
			if (sName == undefined) {
				sName = ""
			}
			if (sFeatures == undefined) {
				sFeatures = ""
			}
			if (bReplace == undefined) {
				bReplace = false
			}
			if (/webCompany.php|webClientMin.php/.test(sURL)) {
				sURL += '&timeStamp=' + new Date().getTime();
			} else if ('http://sudu.cn/dialog_1.htm' != '') {
				var _zdyurl = 'http://sudu.cn/dialog_1.htm';
				if (sURL.indexOf(_zdyurl) > -1) {
					sURL += '&timeStamp=' + new Date().getTime();
				}
			}
			sURL = sURL.replace('&referer={hz6d_referer}',hz6d_referer);
			var win = _open(sURL, sName, sFeatures, bReplace);
			return win;
		}
	})(window);
	// 获取cookie值 
	function hz6d_getCookie(name)
	{
		var offset = document.cookie.indexOf(name + "=");
		if (offset != -1)
		{
			offset += name.length + 1;
			var end = document.cookie.indexOf(";", offset);
			if (end == -1)
			{
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, end));
		}
		else
		{
			return "";
		}
	}

	function hz6d_setCookie(name,value,expires,path,domain,secure)
	{
		var argv = arguments;
		var argc = arguments.length;
		var expires = (argc > 2) ? argv[2] : null;
		var path = (argc > 3) ? argv[3] : '/';
		var domain = (argc > 4) ? argv[4] : null;
		var secure = (argc > 5) ? argv[5] : false;
		document.cookie = name + "=" + escape (value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
	}
	// 获取访问的入口来源页面:搜索引擎/外部链接/直接输入  
	var hz6d_from_page = hz6d_getCookie("53kf_1195701_keyword");
	var kf_1195701_keyword_ok = hz6d_getCookie("kf_1195701_keyword_ok");
	if (kf_1195701_keyword_ok != 1)
	{
		hz6d_from_page = document.referrer;
	}
	hz6d_setCookie("53kf_1195701_keyword",hz6d_from_page);
	hz6d_setCookie("kf_1195701_keyword_ok",1);
	hz6d_from_page = "&keyword=" + escape(hz6d_from_page);
	
	function hz6d_html_replace(html)
	{
		var pattern = /{hz6d_keyword}/gim;
		var str = hz6d_from_page + "&tfrom=1";
		var hz6d_html = html.replace(pattern, str);
		return hz6d_html;
	}

	// has defined <!DOCTYPE... > 

	function hasdoctype()
  {
		if (document.compatMode == "BackCompat")
		{
			ret = false;
		}
		else
		{
			ret = true;
		}
		return ret;
	}

	function detectBrowser()
	{
		var ret = "ie6"; // default
		var user_agent = navigator.userAgent;
		if (user_agent.indexOf("compatible") > -1)
		{
			if (user_agent.indexOf("MSIE 6.0") > -1)
			{
				ret = "ie6";
			}
			else if (user_agent.indexOf("MSIE 7.0") > -1)
			{
				ret = "ie7";
			}
			else if (user_agent.indexOf("MSIE 8.0") > -1)
			{
				ret = "ie8";
			}
			if (user_agent.indexOf("360") > -1)
			{
				ret = "360";
			}
		}
		else if (user_agent.indexOf("Gecko") > -1)
		{
			ret = "firefox";
		}
		if ("" == "TheWorld")
		{
			ret = "TheWorld";
		}
		return ret;
	}
	// 间距小于步进，则移动间距的距离 

	function smoothMove(start, end)
	{
		var step = Math.abs(end - start);
		var forword = end - start;
		if (step > 2)
		{
			step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
		}
		else
		{
			step = step * (forword / Math.abs(forword));
		}
		posi = start + step;
		if (step > 0)
		{
			if (posi > end) posi = end;
		}
		else
		{
			if (posi < end) posi = end;
		}
		return posi;
	}
	
	var hasdoctype = hasdoctype();
	var browser = detectBrowser();
	// 点击图标设置变量 

	function setIsinvited()
	{
		try
		{
			onliner_zdfq = 2;
			if (acc_autotype == 3)
			{
				document.cookie = "onliner_zdfq1195701=" + onliner_zdfq;
			}
		}
		catch (e)
		{}
	}
	var onliner_zdfq = hz6d_getCookie("onliner_zdfq1195701"); // onliner_zdfq: 0.初始值 2.点击接受 3.点击拒绝 
	if (onliner_zdfq == "")
	{
		onliner_zdfq = 0;
		document.cookie = "onliner_zdfq1195701=" + onliner_zdfq;
	}
	var hz6d_kf_type = 2;
	var hz6d_pos_model = 1;
	var hz6d_hidden = 1;
	var hz6d_close_icon = 0;
	// 加载ivt.php，即中间的接受邀请层 
	if (!hz6d$("ivt_script"))
		document.write("<scr"+"ipt src='http://www3.53kf.com/kf_ivt.php?arg=bigwww&test_do=&style=1&isonline=1&kfonline=1&lang=zh-cn&resize=yes&charset=gbk&kflist=off&kf=100301827&zdkf_type=2"+ hz6d_referer + hz6d_from_page + "&lytype=0&tpl_name=crystal_blue&tpl_width=703&tpl_height=473' type='text/javascript' id='ivt_script'></scr"+"ipt>");  

  var kf_script_num = 0;
  var script_total = document.getElementsByTagName('script');
  for (var i = 0; i < script_total.length; i++)
  {
    if (script_total[i].src.indexOf('kf.php') != -1)
    {
      kf_script_num += 1;
      break;
    }
  }
	if (kf_script_num <= 1)
  {
    document.write('<iframe src="" frameborder="0" style="overflow: hidden; position: absolute;height:0;width:0" id="hz6d_im_iframe"></iframe>');
    function init_zdytb_arr(zdytb_str)
    {
      // 生成 图标 数组 
      var zdytb_arrs = [];
      var tmp_arrs = zdytb_str.split('#');
      for (var i = 0; i < tmp_arrs.length; i++)
      {
        zdytb_arrs[i] = [];
        zdytb_arrs[i] = tmp_arrs[i].split(',');
      }
      return zdytb_arrs;
    }

    function get_input_name_pos(_input_name_arr,_input_name)
    {
      // 获取自定义图标 输入值位置 
      var _pos = 0;
      for (var i = 0; i < _input_name_arr.length; i++)
      {
        if (_input_name_arr[i] == _input_name)
        {
          _pos = i;
          break;
        }
      }
      return _pos;
    }

    // 组装自定义图标div 
    function get_zdytb_divs(on_off,zdytb_on_arrs,zdytb_off_arrs,kficon_click_str)
    {
      var element_arrs = (String(on_off) == '1') ? zdytb_on_arrs : zdytb_off_arrs;
      
      var divs_str = '';
      for (var i = 0; i < element_arrs.length; i++)
      {
        var element_arr = element_arrs[i];
        var css_arr_1 = css_name_arr_1;
        //var css_arr_2 = css_name_arr_2;
        var css_arr_3 = css_name_arr_3;
        var css_str = '';
        var link_str = '';
        var target_str = '';
        var text_str = '';
        var click_str = '';

        // 处理css 
        for (var j = 0;j < css_arr_3.length; j++)
        {
          var css_pos = css_arr_3[j];
          if (element_arr[css_pos] == '' || element_arr[css_pos] == '-')
            continue;
          if (css_pos == 8 && element_arr[css_pos].indexOf('http://') == -1)
            element_arr[css_pos] = "http://" + "www3.53kf.com" + "/" + element_arr[css_pos];
          css_str += css_arr_1[j].replace("c_c",element_arr[css_pos]) + ';';
        }
        
        // 处理文本内容 
        var text_type_pos = get_input_name_pos(input_name_arr,'text_type');
        var text_content_pos = get_input_name_pos(input_name_arr,'text_content');
        var tmp_type = element_arr[text_type_pos].Trim();
        var tmp_text = element_arr[text_content_pos].Trim().replace(/&amp;/g, '&').HtmlDecode();
        if (tmp_type != '' && tmp_type != '-' && tmp_text != '' && tmp_text != '-')
        {
          text_str = tmp_text; 
        }
        
        // 处理连接 
        var element_type_pos = get_input_name_pos(input_name_arr,'element_type');
        var link_href_pos = get_input_name_pos(input_name_arr,'link_href');
        var tmp_e_type = element_arr[element_type_pos].Trim();
        var tmp_herf = element_arr[link_href_pos].Trim().replace(/&amp;/g, '&').HtmlDecode();
        var im_account_pos = get_input_name_pos(input_name_arr,'im_account');
        var tmp_im_account = element_arr[im_account_pos].Trim();
        if ((tmp_e_type == '' || tmp_e_type == '-') && tmp_herf.Trim().replace('http://','') != '' && tmp_herf.Trim() != '-')
        {
          link_str = tmp_herf.Trim();
        }
        else
        {
					switch (tmp_e_type)
          {
            case 'chat': click_str = kficon_click_str; break;
            case 'close': click_str = 'this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)'; break; 
            case 'etel': click_str = 'window.open(\'http://chat.53kf.com/eht.php?company_id=1195701&style_id=101141201\',\'_blank\',\'height=400,width=300,top=100,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no\')'; break;
            case 'qq':
							if (tmp_im_account != '' && tmp_im_account != '-'){
								if (tmp_im_account.toLowerCase().indexOf('biz') > -1){ //biz qq
									tmp_im_account = tmp_im_account.replace('biz','');
									link_str = 'http://www3.53kf.com/bizqq.php?qq=' + tmp_im_account + '&from=' + window.encodeURIComponent(window.location.href);
								} else{
									link_str = 'tencent://message/?uin=' + tmp_im_account;
								}
								if(tmp_im_account == '97559766')
									link_str="http://www.53kf.com/?www.53rj.com";
							}
							break;
            case 'wang': if (tmp_im_account != '' && tmp_im_account != '-') link_str = 'aliim://sendmsg?touid=cntaobao' + tmp_im_account; if(tmp_im_account == 'fonlue') link_str='http://www.53kf.com/?www.53rj.com'; break;
            case 'msn': if (tmp_im_account != '' && tmp_im_account != '-') link_str = 'msnim:chat?contact=' + tmp_im_account; if(tmp_im_account.indexOf('fonlue') > -1) link_str='http://www.53kf.com/?www.53rj.com'; break;
            default: link_str = '';click_str = '';
          }
        }
        // 处理是否新窗口 
        var link_target_pos = get_input_name_pos(input_name_arr,'link_target');
        var tmp_target = element_arr[link_target_pos].Trim();
        if (tmp_target == '' || tmp_target == '-' || tmp_target == '_blank') target_str = '_blank';
        else target_str = '_self';
        // if (tmp_im_account != '' && tmp_im_account != '-' && link_str != '') 
        // {
          //click_str = "chatwindow = window.open('','','width=1,height=1,top=0,left=0');chatwindow.location='" + link_str + "';if(typeof chatwindow != 'undefined') closeTimer = window.setInterval(function(){chatwindow.close();},1000);else window.clearInterval(closeTimer);";
          // click_str = "hz6d$('hz6d_im_iframe').src='" + link_str + "'";
          // link_str = '';
        // }
        
        var onclick_str = '';
        if (link_str == '' && click_str != '') onclick_str = 'onclick="' + click_str + ';"';
        else if (link_str != ''&& click_str != '') onclick_str = ' onclick="' + click_str + ';window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
        else if (link_str != ''&& click_str == '') onclick_str = ' onclick="window.open(\'' + link_str +'\',\'' + target_str + '\');" ';
        
        if (link_str != '' || click_str != '') css_str += "cursor: pointer;";
        var height_str = element_arr[get_input_name_pos(input_name_arr,'div_height')];
        if (text_str != '') css_str += "line-height: " + height_str + "px;";
        //if (text_str != '') css_str += "padding-top: " + parseInt(height_str/2) + "px;" + "padding-bottom: " + parseInt(height_str/2) + "px;";
        // 组装成div 
        
        var title_str = '';
        if (text_str != ''&& onclick_str != '')
        {
          title_str = 'title=\"' + text_str + '\"';
        }
			if(tmp_e_type != 'qq' && tmp_e_type != 'msn' && tmp_e_type != 'wang' )	link_str = link_str.replace('http://www.53kf.com',powered_by_53kf_url);
			if(tmp_e_type != 'qq' && tmp_e_type != 'msn' && tmp_e_type != 'wang' )	onclick_str =  onclick_str.replace('http://www.53kf.com',powered_by_53kf_url);
        if(i == 0)
        {
          onclick_str = '';
          divs_str += "<div style=\"position: relative;overflow: hidden;z-index:10086;" + css_str + "\" " + onclick_str + ">";
        }
        else if(tmp_im_account != '' && tmp_im_account != '-' && link_str != '')
        {
          divs_str += "<a href=\"" + link_str+ "\" target=\"_blank\"><div style=\"position: absolute;overflow: hidden;text-decoration:none;" + css_str + "\" " + title_str + ">" + text_str + "</div></a>";
        }
        else
        {
          divs_str += "<div style=\"position: absolute;overflow: hidden;" + css_str + "\" " + onclick_str + title_str + ">" + text_str + "</div>";
        }
      }
      divs_str += '</div>';
      return divs_str;
    }
    String.prototype.Trim = function()
    {
      var tmp = this.replace(/(^\s*)|(\s*$)/g, "");
      return tmp;
    }
    String.prototype.HtmlDecode = function()
    {
      var msg = this.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g,",").replace(/&jinghao/g,'#');
      return msg;
    }

    // 定义全局解码数组 
    var css_name_arr_1 = ["width: c_cpx","height: c_cpx","left: c_cpx","top: c_cpx","z-index: c_c","background-image: url(c_c)","background-repeat: c_c","background-color: #c_c","font-size: c_cpx","color: #c_c","text-align:c_c","font-weight: c_c","font-style: c_c","text-decoration: c_c","font-family:c_c","border-style: c_c","border-width: c_cpx","border-color:#c_c;word-break:break-all;"];
    var css_name_arr_2 = ["div_width","div_height","div_left","div_top","div_zindex","bg_img_url","bg_img_repeat","bg_color","font_size","text_color","text_align","font_bold","font_italic","text_underline","font_family","border_style","border_width","border_color"];
    var css_name_arr_3 = [3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,21,22,23];
    var input_name_str = 'element_id#element_name#element_type#div_width#div_height#div_left#div_top#div_zindex#bg_img_url#bg_img_repeat#bg_color#im_account#text_type#text_content#font_size#text_color#text_align#font_bold#font_italic#text_underline#font_family#border_style#border_width#border_color#link_href#link_target';
    var input_name_arr = input_name_str.split('#'); // 初始化解码数组 
	}
  
	if (!hz6d$("stat_script"))
		document.write("<scr"+"ipt src='http://www3.53kf.com/stat.php?com_id=1195701" + hz6d_referer + hz6d_from_page + "' type='text/javascript' id='stat_script'></scr"+"ipt>");