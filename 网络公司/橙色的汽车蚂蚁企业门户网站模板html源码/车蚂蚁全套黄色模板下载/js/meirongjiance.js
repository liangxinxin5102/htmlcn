// JavaScript Document
$(function(){
	$(".used li").click(function(){
		if($(".allinfo").length>=1){
			$(this).toggleClass("cur");
			}
		})
	$(".sign li").click(function(){
		if($(".allinfo").length>=1){
			$(this).addClass("cur").siblings().removeClass("cur");
			}
		})
	$("#rechoose").click(function(){
		$(this).toggleClass("up");
		$(this).parents(".phy_meirong").toggleClass("allinfo");
		var obj = $(".phy_meirong");
		obj.find(".whenbuy").toggleClass("hide");
		obj.find(".miles_write").toggleClass("hide");
		obj.find(".buytime_write").toggleClass("hide");
		obj.find(".phy_btn").toggleClass("hide");
		obj.find(".phy_right li").not(".cur").toggleClass("hide");
		if($(this).html().indexOf("展开详情")>=0){
			$(this).html("收起工具浏览商城");
			}
			else{
				$(this).html("展开详情重新选择并检测");
				};
	})
	$(".result-list > em").click(function(){
		$(this).parents(".result-list").toggleClass("cur");	
		$(this).parents(".phy_result_li").MathTotalPrice();
	})
	$(".phy_result_li").MathTotalPrice();

	$(".begin-phy").click(function(){
	var mrid = '';
		$(".used li[class=cur]").each(function(){
			var midarr = this.id.split("_");
			mrid += ',' + midarr[1];
		})
		$(".sign li[class=cur]").each(function(){
			var midarr = this.id.split("_");
			mrid += ',' + midarr[1];
		})
		$("#mrpid").val(mrid);
		$("#mrjc").submit();
	})
})
$.fn.extend({
	MathTotalPrice : function(){
		return $(this).each(function(index, element) {
            var result = $(this).find(".result-total em"),eles = $(this).find(".result-array > .cur"),
			total = 0;
			eles.each(function() {
                total += Number($(this).find(".price em").text());
            });
			result.html(total.toFixed(2));			
        });
	}
})

function addToCartModify(goodsId, parentId)
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var formBuy      = document.forms['ECS_FORMBUY'];
  var quick		   = 0;
  // 检查是否有商品规格 
  if (formBuy)
  {
    spec_arr = getSelectedAttributes(formBuy);
    if (formBuy.elements['number'])
    {
      number = formBuy.elements['number'].value;
    }
	quick = 1;
  }
  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goodsId;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
	return goods;
}

/**
 * 购买，批量加入购物车
 * @param	string
 */
function goumai(buyCategory)
{
	// 获取该类别中所有选中的商品
	var selectGoods = $("#" + buyCategory + " li.cur");
	var count = 0;
	selectGoods.each(function(){
		var id = $(this).attr("id"),goods = addToCartModify(id);
		$.ajax({
		    url:"flow.php?step=add_to_cart",
		    async:true,
		    data:'goods=' +_JSON.stringify(goods),
		    type:"POST",
		    timeout: 10000,
			success: function(data){
				data = $.parseJSON(data);
				if(data.error ==0 || (data.error ==1 && data.goods_id ==id) ){
					count++;
				}
				if(count == selectGoods.length){
					window.location.href="/flow.php";
				}
			}
		});
	});
}
