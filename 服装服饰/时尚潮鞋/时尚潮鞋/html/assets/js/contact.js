/* Contact Form Script */

if($("#point").length>0 && $('#contact-map').length){
	var map = new BMap.Map("contact-map");
    var xpoints = $("#point").val().split(',');
    var point = new BMap.Point(xpoints[0], xpoints[1]);
    map.centerAndZoom(point, 15);
    map.setMapStyle({style:'grayscale'});
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
}

    $('#sendingbtn').hide();
    $(document).ready(function() { 
        var options = { 
            beforeSubmit:  before,
            success:       success, 
            error: _error,

            url:       document.URL+"/status:go",
            type:      "post",
            resetForm: false
        }; 
        $('#myform').ajaxForm(options); 
        console.log($('#myform'));
    });
    
    function _error(xhr, status, error){
        alert('发送失败，请稍后再试。')
    }
    function before(formData, jqForm, options){
        if(!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test($('#email').val())){
            alert("请输入正确邮箱");
            return false;
        }
        if($("#name").val().length<1){
            alert("请输入名字");
            return false;
        }
        if($("#message").val().length<1){
            alert("请输内容");
            return false;
        }
      $('#sendbtn').hide();
      $('#sendingbtn').show();
      return true;
    }
    function success(responseText, statusText, xhr, $form){
        var result = JSON.parse(responseText);
        if(result.response=='success'){
              $('#sendbtn').show();
              $('#sendingbtn').hide();
              alert('发送成功，我们将很快与您联系。')
          }else{
                $('#sendbtn').show();
              $('#sendingbtn').hide();
              alert('发送失败，请稍后再试。')
          }
    }