// JavaScript Document


var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //isAndroid = true;
var isIPhone = u.indexOf('iPhone') > -1;
var isIPad = u.indexOf('iPad') > -1;
	

var playBtn, proBack, proPlayed, proBlock;
var mediaPlayer, adPlayer;
var swfPath;

var useFlash = false;
var proDrag = false;
var proMax = 0;

var currentVol = 1;
var isMute = false;

var topOption = { };
topOption.mmsURL = "";
topOption.terminalType = "";
topOption.readyHandler = null;
topOption.completeHandler = null;
topOption.onHeartClick = null;
topOption.onPlaylistClick = null;
topOption.onNextClick = null;
topOption.onLastClick = null;

var isLive = false;
var inited_TopPlayer = false;
var channelId_TopPlayer = 0;
var playData = {};

var playMode_TopPlayer = {};
playMode_TopPlayer.loopAll = 0;
playMode_TopPlayer.loopRandom = 1;
playMode_TopPlayer.loopSingle = 2;
playMode_TopPlayer.currentMode = playMode_TopPlayer.loopAll;
if( null == playMode_TopPlayer.countDuration )
	playMode_TopPlayer.countDuration = false;


var topMediaPlayerId = "topMediaPlayer_windows_media_player";
var wmpInterval = null;


/** 是否正在播放广告 **/
var isAding = false;
var harfAdChecked = false;
var ads = [];
var adIndex = -1;
	

function O( id ){ return document.getElementById( id ); }
function changeStyle( id, old, now ){ O( id ).className = O( id ).className.replace( new RegExp( old ), now ); }

function formatSecond( sec )
{
	if( isNaN( sec ) ) sec = 0;
	var m = Math.floor( sec / 60 );
	var s = Math.floor( sec % 60 );
	var mm = ( m < 10 ) ? "0" : "";
	mm += m + ":";
	mm += ( s < 10 ) ? "0" : "";
	mm += s;
	
	return mm;
}



function createTopPlayer( sp, option )
{
	if( option )
	{
		if( option.readyHandler ) topOption.readyHandler = option.readyHandler;
		if( option.completeHandler ) topOption.completeHandler = option.completeHandler;
		if( option.onHeartClick ) topOption.onHeartClick = option.onHeartClick;
		if( option.onPlaylistClick ) topOption.onPlaylistClick = option.onPlaylistClick;
		if( option.onNextClick ) topOption.onNextClick = option.onNextClick;
		if( option.onLastClick ) topOption.onLastClick = option.onLastClick;
		if( option.terminalType ) topOption.terminalType = option.terminalType;
	}
	//alert(O( "TopPlayer" ).offsetWidth+" - "+O( "lastBtn" ).offsetWidth+" - "+O( "nextBtn" ).offsetWidth);
	O( "playerMain" ).style.width = ( O( "TopPlayer" ).offsetWidth - O( "lastBtn" ).offsetWidth - O( "nextBtn" ).offsetWidth - 20 ) + "px";
	O( "player" ).style.width = ( O( "playerMain" ).offsetWidth - 50 ) + "px";
	O( "proBar" ).style.width = ( O( "player" ).offsetWidth - 320 ) + "px";
	O( "programNameDiv" ).style.maxWidth = ( O( "playerMain" ).offsetWidth - $("#rightBtns").width() - 50 ) + "px";
	//O( "descr" ).style.maxWidth = ( O( "playerMain" ).offsetWidth - $("#rightBtns").width() - 50 ) + "px";
	O( "playerBottom" ).style.width = O( "player" ).style.width;
	//alert(O( "programNameDiv" ).style.width);
	swfPath = sp;
	addPlayer_TopPlayer();
	
	if( option.onHeartClick ) $( "#favorBtn" ).bind( "click", option.onHeartClick );
	else $( "#favorBtn" ).hide();
	
	if( option.onPlaylistClick ) 
	{
		$( "#listBtn" ).bind( "click", option.onPlaylistClick );
		$( "#randomBtn" ).bind( "click", 
		function(e)
		{  
			if( playMode_TopPlayer.currentMode == playMode_TopPlayer.loopRandom )
			{
				playMode_TopPlayer.currentMode = playMode_TopPlayer.loopAll;
				changeStyle( "randomBtn", "randomOn", "randomOff" );
			}
			else
			{
				playMode_TopPlayer.currentMode = playMode_TopPlayer.loopRandom;
				changeStyle( "randomBtn", "randomOff", "randomOn" );
			}
			//alert(playMode_TopPlayer.currentMode);
			changeStyle( "singleBtn", "singleLoopOn", "singleLoopOff" );
		} );
		$( "#singleBtn" ).bind( "click", 
		function(e)
		{  
			if( playMode_TopPlayer.currentMode == playMode_TopPlayer.loopSingle )
			{
				playMode_TopPlayer.currentMode = playMode_TopPlayer.loopAll;
				changeStyle( "singleBtn", "singleLoopOn", "singleLoopOff" );
			}
			else
			{
				playMode_TopPlayer.currentMode = playMode_TopPlayer.loopSingle;
				changeStyle( "singleBtn", "singleLoopOff", "singleLoopOn" );
			}
			//alert(playMode_TopPlayer.currentMode);
			changeStyle( "randomBtn", "randomOn", "randomOff" );
		} );
	}
	else
	{
		$( "#listBtn" ).hide();
		$( "#randomBtn" ).hide();
		$( "#singleBtn" ).hide();
	}
	
	if( option.onNextClick ) $( "#nextBtn" ).bind( "click", option.onNextClick );
	else $( "#nextBtn" ).hide();
	
	if( option.onLastClick ) $( "#lastBtn" ).bind( "click", option.onLastClick );
	else
	{
		O( "playerMain" ).style.marginLeft = O( "lastBtn" ).offsetWidth + "px";
		$( "#lastBtn" ).hide();
	}
}


function addPlayer_TopPlayer()
{
	if( isAndroid || isIPhone || isIPad )
	{
		mediaPlayer = document.createElement( "audio" );
		mediaPlayer.setAttribute( "autoplay", "autoplay" );
		mediaPlayer.id = "mediaPlayer";
		mediaPlayer.style.width = "1px";
		mediaPlayer.style.height = "1px";
		O( "TopPlayer" ).appendChild( mediaPlayer );
		mediaPlayer.ontimeupdate = function(e){ playerOnCurrent( mediaPlayer.currentTime ); };
		$( "#mediaPlayer" ).bind( "playing", function(e){ playerOnState( "playing" ); } );
		$( "#mediaPlayer" ).bind( "pause", function(e){ playerOnState( "paused" ); } );
		$( "#mediaPlayer" ).bind( "ended", function(e){ playerOnState( "stopped" ); playerOnComplete(); } );
		
		/** 添加广告Player **/
		adPlayer = document.createElement( "audio" );
		adPlayer.setAttribute( "autoplay", "autoplay" );
		adPlayer.id = "adPlayer";
		adPlayer.style.width = "1px";
		adPlayer.style.height = "1px";
		O( "TopPlayer" ).appendChild( adPlayer );
		$( "#adPlayer" ).bind( "ended", function(e){ playerOnState( "stopped" ); playerOnComplete(); } );
		
		useFlash = false;
	}
	else
	{
		var d = document.createElement( "div" );
		d.id = "mediaPlayer";
		O( "TopPlayer" ).appendChild( d );
		swfobject.embedSWF( swfPath, "mediaPlayer", 1, 1, "11.1.0", "", {}, { wmode:"transparent", allowScriptAccess:"always" } );
		mediaPlayer = O( "mediaPlayer" );
		useFlash = true;
		
		/** 添加WindowsMediaPlayer **/
		var wd = document.createElement("div");
		wd.innerHTML = getWindowsMediaCode_TopPalyer();
		O( "TopPlayer" ).appendChild( wd );
		
		/** 添加广告Player **/
		var adiv = document.createElement( "div" );
		adiv.id = "adPlayer";
		O( "TopPlayer" ).appendChild( adiv );
		swfobject.embedSWF( swfPath, "adPlayer", 1, 1, "11.1.0", "", {}, { wmode:"transparent", allowScriptAccess:"always" } );
		adPlayer = O( "adPlayer" );
	}
	onPlayerReady();
}



function getWindowsMediaCode_TopPalyer()
{
	var res="";
	if( ( navigator.userAgent.indexOf("Firefox") > 0 ) || ( navigator.userAgent.indexOf("Chrome") > 0 ) )
	{
		res+= '<object id="' + topMediaPlayerId + '" data="" type="application/x-ms-wmp" width="1" height="1" >';
		res+= '<param name="autostart" value="true" />';
		res+= '<param name="volume" value="100" />';
		res+= '<param name="stretchToFit" value="-1" />';
		res+= '<param name="uiMode" value="None" />';
		res+= '<param name="EnableContextMenu" value="0" />';
		res+= '</object>';
	}
	else
	{
		res+='<object id="' + topMediaPlayerId + '" class="wmp" height="1" width="1" classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6">';
		res+='  <param name="AutoStart" value="true" />';
		res+='	<param name="volume" value="100" />';
		res+='  <param name="EnableContextMenu" value="0" />';
		//res+='  <param name="url" value="" />';
		//res+='  <param name="baseURL" value="" />';
		res+='  <param name="stretchToFit" value="-1" />';
		res+='  <param name="uiMode" value="None" />';
		res+='</object>';
	}
	
	return res;
}



///////////////////////////////////////////////////////////////////////


function onPlayerReady()
{
	createProgressBar_TopPlayer();
	
	if( isAndroid || isIPhone || isIPad )
	{	
		if( isAndroid ) createSoundBar_TopPlayer();
		else{ $( "#soundBar" ).hide(); $( "#soundBtn" ).hide(); }
		setInterval( function()
		{
			playerOnCurrent( mediaPlayer.currentTime );
		}, 1000 );
	}
	else
	{
		mediaPlayer = O( "mediaPlayer" );
		createSoundBar_TopPlayer();
	}
	
	$( "#pBtn" ).bind( "click", setPlayPause_TopPlayer );
	
	if( topOption.readyHandler ) topOption.readyHandler();
}


function createProgressBar_TopPlayer()
{
	var minT = 0;
	var maxT = proMax = O( "proBar" ).offsetWidth - O( "proBlock" ).offsetWidth;
	$( "#proBlock" ).bind( "mousedown", 
	function( ed )
	{
		if( isLive == true ) return;		
		proDrag = true;
		
		$( document ).bind( "mousemove", function( em )
		{
			var tx = em.pageX - $( "#proBlock" ).offset().left - $( "#proBlock" ).width() / 2;
			if( tx < minT ) tx = minT;
			if( tx > maxT ) tx = maxT;
			O( "proBlock" ).style.paddingLeft = tx + "px";
			O( "cur" ).innerHTML = formatSecond( tx / maxT * ( useFlash ? mediaPlayer.getDuration() : mediaPlayer.duration ) );
		} );
		
		$( document ).bind( "mouseup", function( eu )
		{
			$( document ).unbind( "mousemove" );
			$( document ).unbind( "mouseup" );
			
			var tx = eu.pageX - $( "#proBlock" ).offset().left - $( "#proBlock" ).width() / 2;
			if( tx < minT ) tx = minT;
			if( tx > maxT ) tx = maxT;
			var per = tx / maxT;
			setSeek_TopPlayer( per );
			
			proDrag = false;
		} );
	} );
	$( "#proBar" ).bind( "click", 
	function( event )
	{
		if( isLive ) return;
		if( event.currentTarget == O("proBar") )
		{
			var tx = event.pageX - $( "#proBlock" ).offset().left - $( "#proBlock" ).width() / 2;
			if( tx < minT ) tx = minT;
			if( tx > maxT ) tx = maxT;
			var per = tx / maxT;
			setSeek_TopPlayer( per );
		}
	} );
}


function createSoundBar_TopPlayer()
{
	var minT = 0;
	var maxT = O( "soundBar" ).offsetWidth - O( "soundBlock" ).offsetWidth;
	O( "soundBlock" ).style.paddingLeft = maxT + "px";
	$( "#soundBlock" ).bind( "mousedown", 
	function( ed )
	{
		ed.preventDefault();
		$( "#soundBlock" ).bind( "mousemove", function( em )
		{
			em.preventDefault();
			var tx = em.pageX -  $( "#soundBlock" ).offset().left - $( "#soundBlock" ).width() / 2;
			if( tx < minT ) tx = minT;
			if( tx > maxT ) tx = maxT;
			O( "soundBlock" ).style.paddingLeft = tx + "px";
		} );
		
		$( document ).bind( "mouseup", function( eu )
		{
			$( "#soundBlock" ).unbind( "mousemove" );
			$( document ).unbind( "mouseup" );
		} );
	} );
	$( "#soundBar" ).bind( "click", 
	function( event )
	{
		if( event.currentTarget == O("soundBar") )
		{
			var tx = event.pageX - $( "#soundBlock" ).offset().left - $( "#soundBlock" ).width() / 2;
			if( tx < minT ) tx = minT;
			if( tx > maxT ) tx = maxT;
			O( "soundBlock" ).style.paddingLeft = tx + "px";
			currentVol = tx / maxT;
			if( isMute == false )
				setVolume_TopPlayer( currentVol );
		}
	} );
	
	$( "#soundBtn" ).bind( "click", function()
	{ 
		if( isMute )
		{
			isMute = false;
			setVolume_TopPlayer( currentVol );
			changeStyle( "soundBtn", "muteBtn", "soundBtn" );
		}
		else
		{
			isMute = true;
			setVolume_TopPlayer( 0 );
			changeStyle( "soundBtn", "soundBtn", "muteBtn" );
		}
	} );
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function setToPlay_TopPlayer( data )
{
	playData = data;
	O("programNameDiv").innerHTML = isLive == true ? data.channelName : data.programName;
	
	/** 播放广告 **/
	startAds();
}


function setPath_TopPlayer( playURL )
{
	//playURL = "http://localhost:1935/vod/mp4:a1.m4a/playlist.m3u8";
	inited_TopPlayer = false;
	mediaPlayer = O( "mediaPlayer" );
	if( mediaPlayer && useFlash )
	{
		if( null != wmpInterval )
			clearInterval( wmpInterval );
			
		if( playURL.indexOf("findMaterialPlayUrlWithToken.jspa") > -1 ) setWMAPath_TopPlayer( playURL );
		if( playURL.indexOf("mms://") > -1 ) setWMAPath_TopPlayer( playURL );
		else if( mediaPlayer.setPath ) mediaPlayer.setPath( playURL );
	}
	else
	{
		mediaPlayer.src = playURL;
		mediaPlayer.play();
	}
}


function setWMAPath_TopPlayer( playURL )
{
	if( ( navigator.userAgent.indexOf("Firefox") > 0 ) || ( navigator.userAgent.indexOf("Chrome") > 0 ) )
		O( topMediaPlayerId ).data = playURL;
	else O( topMediaPlayerId ).url = playURL;
	
	//alert(playURL);
	wmpInterval = setInterval( 
	function()
	{
		var ws = O( topMediaPlayerId ).playState;
		
		switch( Number( ws ) )
		{
			case 1: playerOnState( "stopped" ); playerOnComplete(); break;
			case 2: playerOnState( "paused" ); break;
			case 3: playerOnState( "playing" ); break;
		}
		
		playerOnCurrent( O( topMediaPlayerId ).controls.currentPosition );
				
	}, 500 );
	
	//alert(O( topMediaPlayerId ).controls.play);
	
	//setTimeout( function(){ O( topMediaPlayerId ).controls.play(); }, 500 );
}


function setPlayPause_TopPlayer()
{
	/** 正在播放广告 **/
	if( isAding ) return;	
	
	if( useFlash )
	{
		if( null == wmpInterval )
		{
			if( mediaPlayer )
			{
				if( mediaPlayer.setPlay && O( "pBtn" ).className == "playBtn" )
					mediaPlayer.setPlay();
				else if( mediaPlayer.setPause && O( "pBtn" ).className == "pauseBtn" )
					mediaPlayer.setPause();
			}
		}
		else
		{
			if( O( "pBtn" ).className == "playBtn" )
				O(topMediaPlayerId).controls.play();
			else if( O( "pBtn" ).className == "pauseBtn" )
				O(topMediaPlayerId).controls.pause();
		}
	}
	else
	{
		if( mediaPlayer )
		{
			if( mediaPlayer.play && O( "pBtn" ).className == "playBtn" )
				mediaPlayer.play();
			else if( mediaPlayer.pause && O( "pBtn" ).className == "pauseBtn" )
				mediaPlayer.pause();
		}
	}
}


function setStop_TopPlayer( forceToStop )
{
	/** 正在播放广告 **/
	if( isAding && !forceToStop ) return;	

	if( forceToStop == true )
	{
		if( adPlayer ) 
		{
			if( adPlayer.pause ) adPlayer.pause();
			if( adPlayer.setPause ) adPlayer.setPause();
			if( adPlayer.controls && adPlayer.controls.pause )
				adPlayer.controls.pause();
		}
		//isAding = false;
		//return;
	}
	
	if( useFlash )
	{
		if( null == wmpInterval )
		{
			if( mediaPlayer && mediaPlayer.setPause )
				mediaPlayer.setPause();
		}
		else
			O(topMediaPlayerId).controls.pause();
	}
	else
		if( mediaPlayer ) mediaPlayer.pause();
}


function setSeek_TopPlayer( per )
{
	/** 正在播放广告 **/
	if( isAding ) return;	
	
	if( isLive == true ) return;
	
	if( per < 0 ) per = 0;
	if( per > 1 ) per = 1;
	
	if( useFlash )
	{
		if( null == wmpInterval )
		{
			if( mediaPlayer && mediaPlayer.seekTo )
				mediaPlayer.seekTo( per );
		}
		else
			O(topMediaPlayerId).controls.currentPosition = per * O(topMediaPlayerId).currentMedia.duration;
	}
	else
	{
		if( mediaPlayer && mediaPlayer.currentTime )
			mediaPlayer.currentTime = per * mediaPlayer.duration;
	}
}


function setVolume_TopPlayer( vol )
{
	if( vol < 0 ) vol = 0;
	if( vol > 1 ) vol = 1;
		
	if( useFlash )
	{
		if( null == wmpInterval )
		{
			if( mediaPlayer && mediaPlayer.setVolume )
				mediaPlayer.setVolume( vol );
		}
		else
			O(topMediaPlayerId).settings.volume = vol * 100;
	}
	else
	{
		if( mediaPlayer )
			mediaPlayer.volume = vol;
	}
}


function playerOnCurrent( cur )
{
	/** 正在播放广告 **/
	if( isAding ) return;	
	
	if( isLive == true ) O( "dur" ).innerHTML = formatSecond( 0 );
	else
	{
		var dur;
		if( null == wmpInterval ) dur = useFlash ? mediaPlayer.getDuration() : mediaPlayer.duration;
		else dur = O(topMediaPlayerId).currentMedia.duration;
		O( "dur" ).innerHTML = formatSecond( dur );
	}
	
	if( proDrag == false )
		O( "cur" ).innerHTML = formatSecond( cur );
	
	if( ( proDrag == false ) && dur > 0 )
		O( "proBlock" ).style.paddingLeft = cur / dur * proMax + "px";
	
	if( Math.floor( cur ) % 20 == 0 && Math.floor( cur ) > 0 )
		doCountDuration_TopPlayer( cur );
	
	if( Math.floor( cur ) == Number( playData.bfzTime ) && Math.floor( cur ) > 0 )
		checkHarfAd();
}


function playerOnState( sta )
{
	/** 正在播放广告 **/
	if( isAding ) return;	
	
	switch( sta )
	{
		case "playing":  checkInitCount_TopPlayer();
						 checkChangeStreamSeek();
						 O("pBtn").className = "pauseBtn";
						// O("cateNameDiv").innerHTML = "播放中"; 
						 break;
						 
		case "stopped":  O("pBtn").className = "playBtn";
						// O("cateNameDiv").innerHTML = "停止"; 
						 break;

		case "paused":  O("pBtn").className = "playBtn"; 
						//O("cateNameDiv").innerHTML = "暂停";
						break;
		
		default:
			O("pBtn").className = "playBtn"; break;
	}
}


function playerOnComplete()
{
	/** 正在播放广告 **/
	if( isAding )
	{
		onAdPlayComplete_TopPlayer();
		return;	
	}
	
	O("pBtn").className = "playBtn";
	
	if( null != wmpInterval ) clearInterval( wmpInterval );
	//O("cateNameDiv").innerHTML = "播放完毕";
	
	checkEndAd();
}



function finallyComplete()
{
	if( playMode_TopPlayer.currentMode == playMode_TopPlayer.loopSingle )
	{
		setToPlay_TopPlayer( playData );
		return;
	}
	if( topOption.completeHandler ) topOption.completeHandler( playMode_TopPlayer.currentMode );
}



function checkInitCount_TopPlayer()
{
	if( null != wmpInterval ) return;
	if( inited_TopPlayer == true ) return;
	inited_TopPlayer = true;
	var url;
	if( isLive == true )
		url = topOption.mmsURL + "/reportDataCollectMgr/sendLiveProgramData.jspa?playType=PC&channelId=" + channelId_TopPlayer + "&callback=?";
	else
		url = topOption.mmsURL + "/reportDataCollectMgr/sendVodProgramData.jspa?param=" + playData.param + "&callback=?";
		
	$.getJSON( url, function(data){} );		
}




function canCountDuration( flag )
{
	playMode_TopPlayer.countDuration = flag == true;
}



var lastDurationCountTime = 0;

function doCountDuration_TopPlayer( time )
{
	if( playMode_TopPlayer.countDuration == true )
	{
		var countTime = Math.floor( new Date().getTime() / 10000 );
		//document.getElementById("testInfo").innerHTML = (countTime);
		if( countTime > lastDurationCountTime )
			lastDurationCountTime = countTime;
		else
			return;
		if( isNaN( time ) ) time = 0;
		//var url = topOption.mmsURL + "/reportDataCollectMgr/sendDurationData.jspa?param=" + playData.param + "&time=" + Math.floor( time ) + "&callback=?";
		var url = topOption.mmsURL + "/reportDataCollectMgr/sendDurationData.jspa?param=" + playData.param + "&time=20&callback=?";
		$.getJSON( url, function(data){} );		
	}
}
















/////////////////////////////////////////////////////////////////////////////////////////////////////////////


		/**
		 *	{
				“channelName”:”频道名”,
				“description”:”简介”,
				“streams”:[
								{
									“streamName”:”标清”,
									“url”:”http://xxxx”
								},
								{
									“streamName”:”高清”,
									“url”:”http://xxxx”
								}
							]
			}
		 *
		**/
		function setLiveChannelId_TopPlayer( mmsURL, channelId, terminalType )
		{
			setStop_TopPlayer( true );
			topOption.terminalType = terminalType;
			topOption.mmsURL = mmsURL;
			channelId_TopPlayer = channelId;
			isLive = true;
			var url = topOption.mmsURL + "/videoPlay/getChannelPlayInfoJson.jspa" +
						"?channelId=" + channelId + 
						"&terminalType=PC" +
						"&location=" + escape( window.location.href ) + 
						"&callback=?";
			//url = "test/testLive.json";
			//url = "http://ttx.shinyv.com:8888/cbb/videoPlay/getChannelPlayInfoJson.jspa?channelId=12&terminalType=PC&location=http%3A//audio.shinyv.com/index.php%3Foption%3Ddefault%2Cradio&callback=?";
			
			$.getJSON( url, {}, setToPlay_TopPlayer );
		}
		
		
		/**
			{
				"programName":"机器猫",
				"description":"简介", 
				"param":"1,1,1,1,1,1",
				"streams":[
							{
								"streamName":"标清",
								"url":"http://xxxx/1.mp3"
							},
							{
								"streamName":"高清",
								"url":"http://xxxx/2.mp3"
							}
						]
			}
		**/
		function setVodId_TopPlayer( programId, programVideoId, adPolicyId )
		{
			setStop_TopPlayer( true );
			isLive = false;
			if( null == programVideoId ) programVideoId = 0;
			if( isNaN( programVideoId ) ) programVideoId = 0;
			
			var url = topOption.mmsURL + "/videoPlay/getVodProgramPlayUrlJson.jspa" +
						"?programId=" + programId + 
						"&programVideoId=" + programVideoId + 
						"&videoType=PC" +
						"&terminalType=" + topOption.terminalType +
						( window.location.href.indexOf("192.168.0.105:81") < 0 ? "&location=" + escape( window.location.href ) : "&location=" + escape( "http://3w.radio.cn" ) ) + 
						//"&location=" + escape( "http://3w.radio.cn" ) + 
						"&strategyId=" + adPolicyId +
						"&statistics=1" + 
						"&callback=?";
			//url = "test/testVod.json";
			//url = "http://192.168.0.115:8080/ttx//videoPlay/getVodProgramPlayUrlJson.jspa?programId=733006&programVideoId=838632&videoType=PC&terminalType=117111052&location=audio.shinyv.com&statistics=0&callback=?";
			//url = "http://192.168.0.130:8888/ttx/videoPlay/getVodProgramPlayUrlJson.jspa?programId=732996&programVideoId=838626&videoType=PC&terminalType=117111052&dflag=0&location=audio.shinyv.com&callback=?";
			$.getJSON( url, {}, setToPlay_TopPlayer);
		}
		
		
		function setTingTianXiaOldVodId_TopPlayer( programId, streamId, adPolicyId )
		{
			setStop_TopPlayer( true );
			isLive = false;
			if( null == streamId ) streamId = 0;
			if( isNaN( streamId ) ) streamId = 0;
			
			var url = topOption.mmsURL + "/videoPlay/getVodProgramPlayUrlJson.jspa" +
						"?programId=" + programId + 
						"&streamId=" + streamId + 
						"&videoType=PC" +
						"&strategyId=" + adPolicyId +
						"&location=" + escape( window.location.href ) + 
						"&statistics=1" + 
						"&callback=?";
			//url = "test/testVod.json";
			
			$.getJSON( url, {}, setToPlay_TopPlayer);
		}
		
		
		function setCaiBianBoVodId_TopPlayer( programId, cbb_date, encoderId )
		{
			setStop_TopPlayer( true );
			isLive = false;
			if( null == encoderId ) encoderId = 0;
			if( isNaN( encoderId ) ) encoderId = 0;
			
			var url = topOption.mmsURL + "/videoPlay/getVodProgramPlayUrlJson.jspa" +
						"?programId=" + programId + 
						"&date=" + cbb_date + 
						"&encoderId=" + encoderId + 
						"&videoType=PC" +
						"&terminalType=" + topOption.terminalType +
						"&location=" + escape( window.location.href ) + 
						"&statistics=1" + 
						"&callback=?";
			
			$.getJSON( url, {}, setToPlay_TopPlayer);
		}
		
		
		/** 判断点播使用哪个方法
		 *	mmsURL：播控地址
		 *	jspaURL：播控jspa地址，含有所需参数
		 *	flagDateStr：标示日期，根据日期判断哪个接口
		 *	playlistDateStr：当前节目单日期，与标示日期作比较，没有传递null
		 *	encoderId：编码器ID，采编播旧接口用，没有传递0
		 *	adPolicyId：广告策略ID
		 **/
		///function switchVodFunction_TopPlayer( mmsURL, jspaURL, flagDateStr, playlistDateStr, encoderId )
		function switchVodFunction_TopPlayer( mmsURL, jspaURL, encoderId, terminalType, cbb_date, adPolicyId )
		{
			setStop_TopPlayer( true );
			//setTimeout( function() {
				
				topOption.mmsURL = mmsURL;
				topOption.terminalType = terminalType;
				//alert(jspaURL+", "+flagDateStr+", "+playlistDateStr+", "+encoderId);
				var u = jspaURL.split("?");
				if( u.length > 1 )
				{
					var pl = u[1].split("&");
					var params = {};
					for( var i = 0; i < pl.length; i++ )
					{
						var par = pl[i].split("=");
						params[par[0]] = par[1];
					}
					
					if( params.programVideoId )
					{
						/** 新数据 **/
						setVodId_TopPlayer( params.programId, params.programVideoId, adPolicyId );
					}
					else if( encoderId > 0 )
					{
						/** 采编播旧数据 **/
						setCaiBianBoVodId_TopPlayer( params.programId, cbb_date, encoderId );
					}
					
					if( params.streamId )
					{
						/** 听天下旧数据 **/
						setTingTianXiaOldVodId_TopPlayer( params.programId, params.streamId, adPolicyId );
					}
					
					if( params.materialId )
					{
						/** MMS:...WMA播放地址，调用windows media player **/
						setPath_TopPlayer( jspaURL );
					}
					
				}
			//}, 3000 );
		}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		
		function switchVodId_TopPlayer( mmsURL, programId, programVideoId, terminalType, adPolicyId )
		{
			setStop_TopPlayer( true );
			topOption.mmsURL = mmsURL;
			topOption.terminalType = terminalType;
			//alert(jspaURL+", "+flagDateStr+", "+playlistDateStr+", "+encoderId);
			/** 新数据 **/
			setVodId_TopPlayer( programId, programVideoId, adPolicyId );
		}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////
		
		function switchOldId_TopPlayer( mmsURL, programId )
		{
			setStop_TopPlayer( true );
			topOption.mmsURL = mmsURL;
			isLive = false;
			if( null == encoderId ) encoderId = 0;
			if( isNaN( encoderId ) ) encoderId = 0;
			
			var url = topOption.mmsURL + "/videoPlay/findMaterialPlayUrlNew.jspa?programId=" + programId +
						"&callback=?";
			
			$.getJSON( url, {}, setToPlay_TopPlayer);
		}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/** 多码流列表 **/


var perBeforeChange = -1;

function createStreamList()
{
	perBeforeChange = -1;
	setStop_TopPlayer();
	O( "cur" ).innerHTML = O( "dur" ).innerHTML = "00:00";
	var streamName = $.cookie( "streamName_yangguang" );
	var index = -1;
	O("streamBox").innerHTML = "";
	
	for( var s = 0; s < playData.streams.length; s++ )
	{
		var div = document.createElement("div");
		div.id = "streamItem" + s;
		div.innerHTML = playData.streams[s].streamName;
		div.onclick = function()
		{
			playStream( Number( this.id.split("streamItem")[1] ) );
		};
		
		$("#streamBox").append(div);
		if( streamName == div.innerHTML ) index = s;
	}
	
	playStream( index );
}



function playStream( index )
{
	getPerBeforeChangeStream();
	
	if( index > -1 )
	{
		$.cookie( "streamName_yangguang", O("streamBox").childNodes[index].innerHTML );
		setPath_TopPlayer( playData.streams[ index ].url );
	}
	else
	{	
		$.cookie( "streamName_yangguang", O("streamBox").childNodes[0].innerHTML );
		setPath_TopPlayer( playData.streams[ 0 ].url );
	}
		
	var streamName = $.cookie( "streamName_yangguang" );
	
	for( var s = 0; s < O("streamBox").childNodes.length; s++ )
	{
		var div = O("streamBox").childNodes[s];
		if( streamName == div.innerHTML ) div.className = "streamItem_selected";
		else div.className = "streamItem_normal";
	}
}


function getPerBeforeChangeStream()
{
	var cur = getNumberFromString( "cur" );
	var dur = getNumberFromString( "dur" );
	if( dur > 0 )
		perBeforeChange = cur / dur;
	else
		perBeforeChange = -1;
}


function checkChangeStreamSeek()
{
	if( perBeforeChange > 0 )
		setSeek_TopPlayer( perBeforeChange );	
	perBeforeChange = -1;
}


function getNumberFromString( timeDiv )
{
	var curStr = O( timeDiv ).innerHTML;
	if( curStr == "" ) return 0;
	var l = curStr.split(":");
	if( l.length < 2 ) return 0;
	var m = Number( l[0] );
	if( isNaN( m ) ) return 0;
	var s = Number( l[1] );
	if( isNaN( s ) ) return 0;
	
	return m * 60 + s;
}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/** 播放广告 **/


var onAdCompleteFunction = null;


/** 前置 **/
function startAds()
{
	/** 多码流列表 **/
	onAdCompleteFunction = createStreamList;
	ads = playData.ads;
	harfAdChecked = false;
	doAds();
}


/** 片中 **/
function checkHarfAd()
{
	if( harfAdChecked == true ) return;
	harfAdChecked = true;
	onAdCompleteFunction = setPlayPause_TopPlayer;
	ads = playData.adsBFZ;
	if( ads && ads.length > 0 )
		setPlayPause_TopPlayer();
	else return;
	doAds();
}


/** 后置 **/
function checkEndAd()
{
	onAdCompleteFunction = finallyComplete;
	ads = playData.adsBFH;

	doAds();
}


/** 播放中 **/
function intervalAd()
{
	if( useFlash )
		mediaPlayer.setPause();
	else
		mediaPlayer.pause();
}






function doAds()
{
	adIndex = ( ads && ads.length > 0 ) ? 0 : -1;
	isAding = adIndex > -1;

	if( adIndex < 0 )
		onAdCompleteFunction();
	else
		setAd_TopPlayer( ads[ adIndex ].adURl );
}




/** 一条广告播放完毕 **/
function onAdPlayComplete_TopPlayer() 
{
	if( ++adIndex < ads.length )
		setAd_TopPlayer( ads[ adIndex ].adURl );
	else
	{
		adIndex = -1;
		ads = [];
		isAding = false;
		onAdCompleteFunction();
		onAdCompleteFunction = null;
	}
}



function setAd_TopPlayer( adURl )
{
	adPlayer = O( "adPlayer" );
	if( adPlayer && useFlash )
	{	//adURl = "http://localhost:81/aaa.m4a";
		if( adPlayer.setPath ) adPlayer.setPath( adURl );
	}
	else
	{
		adPlayer.src = adURl;
		adPlayer.play();
	}
}