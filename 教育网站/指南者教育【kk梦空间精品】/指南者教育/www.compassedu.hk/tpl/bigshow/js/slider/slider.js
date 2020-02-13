$(function(){
          var tLen = 0, 
              vNum = 4, 
              mNum = 1, 
              mTime = 500, 
              iShow = $(".show .itemshow ul"),
              iItems = $(".show .itemshow ul li"),
              mLen = iItems.eq(0).width() * mNum, 
              cLen = (iItems.length - vNum) * iItems.eq(0).width(); 

          iShow.css({width:iItems.length*iItems.eq(0).width()+'px'});
          //下一张
          $(".show .next").on({
            click:function(){
                if(tLen < cLen){
                  if((cLen - tLen) > mLen){
                    iShow.animate({left:"-=" + mLen + "px"}, mTime);
                    tLen += mLen;
                  }else{
                    iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
                    tLen += (cLen - tLen);
                  }
                }
            }
          });
          //上一张
          $(".show .prev").on({
            click:function () {
              if(tLen > 0){
                if(tLen > mLen){
                  iShow.animate({left: "+=" + mLen + "px"}, mTime);
                  tLen -= mLen;
                }else{
                  iShow.animate({left: "+=" + tLen + "px"}, mTime);
                  tLen = 0;
                }
              }
            }
          })
        });