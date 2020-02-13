(function($) {

    var dateShow = function(options, object) {



        var adYear = new Date().getFullYear();

        var adMonth = new Date().getMonth() + 1;

        var adDay = new Date().getDate();


        var dYear = adYear;
        var dMonth = adMonth;
        var dDay = adDay;



        var settings = $.extend({}, $.fn.dateShow.defaults, options);



        var oBject = object,
        oYear = oBject.find( settings.objYear ),
        oMounth =  oBject.find( settings.objMounth ),
        oDay =  oBject.find( settings.objDay ),
        oPrev = oBject.find( settings.oprPrev ),
        oNext = oBject.find( settings.oprNext ),
        sYear =settings.sYear ;



        cMonth();



        cDay(dMonth, dYear);


        // console.log(adMonth,dayNum,adDay);

        // get html year

        oYear.text(dYear);



        // get html act mounth

        $( settings.objMounth ).each(function(){

            $(this).children("li").eq(dMonth - 1).addClass("act").siblings("li").removeClass("act");

        })

        // get html act day

        $( settings.objDay ).each(function(){

            $(this).children("li").eq(dDay - 1).addClass("act").siblings("li").removeClass("act");

        })


        // (settings.objBack)(newtimestamp());
        //(settings.monthBack)(newtimestamp());



        //changeYear - prev

        oPrev.on("click", function() {

            var auglerYear =  parseInt( oYear.text()) - 1;

              // console.log( oYear.text() );

            // dYear = parseInt( oYear.text()) - 1;
            
            console.log( sYear +"+++++"+ auglerYear );

            if( auglerYear >= sYear ){
                dYear = auglerYear;

                dMonth = 1;


                 $(settings.objYear).text( dYear );
                 cMonth();
                 cDay(dMonth, dYear );

            }else{

                return false;
            }

           



            
            // (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));
            // settings.yearBackPrev( dYear,dMonth,dDay );

            // (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));


        });



        //changeYear - next

        oNext.on("click", function() {



            dYear = parseInt( oYear.text()) + 1;
            dMonth = 1;

            $(settings.objYear).text(dYear);



            cMonth();



            cDay(dMonth, dYear);

            // (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));
            // settings.yearBackNext( dYear,dMonth,dDay );

            // (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));



        })



        // changeMounth
        

            oMounth.on("click","li",function(){

                dMonth = $(this).index() +1;

                $( settings.objMounth ).each(function(){

                    $(this).children("li").eq( dMonth-1 ).addClass('act').siblings("li").removeClass("act");

                })


                // $(this).addClass('act').siblings("li").removeClass("act");

                cDay(dMonth, dYear);
                

                // console.log(dYear);
                (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));

               


            })



       /* $(document).on("click",settings.objMounth + " li",function(obj){

            dMonth = $(this).index() +1;

            $( settings.objMounth ).each(function(){

                $(this).children("li").eq( dMonth-1 ).addClass('act').siblings("li").removeClass("act");

            })


            // $(this).addClass('act').siblings("li").removeClass("act");

            cDay(dMonth, dYear);
            
            //settings.monthBack( dYear,dMonth,dDay );
           


        })*/





        // changeDate

        oDay.on("click","li",function(obj){

            dDay = $(this).index();

            $(settings.objDay).each(function(){

                $(this).children("li").eq( dDay ).addClass('act').siblings("li").removeClass("act");

            })
           

            dDay  = parseInt( $(this).text() );

            (settings.objBack)(newtimestamp(dYear,dMonth,dDay));

        });

        

        //settings.obj;

        

        function newtimestamp(dYear,dMonth,dDay){

            var y = parseInt(dYear);

            var m = parseInt(dMonth);

            var d = parseInt(dDay);

            // console.log( dDay );

            var t = new Date(y,m,d).getTime();

            // console.log(y+"-"+m+"-"+d);

            return {'d':y+'-'+m+'-'+d,'t':get_unix_time(y+'-'+m+'-'+d)};

            

        }

        

        function get_unix_time(time1){

            var newstr = time1.replace(/-/g,'/'); 

            var date =  new Date(newstr); 

            var time_str = date.getTime().toString();

            return time_str.substr(0, 10);

        }

        // contribuild mounth

        function cMonth() {


            var mounthNum = 12;


            $(settings.objMounth).each(function(){

                $(this).html("");

                for (var m = 0; m < mounthNum; m++) {

                    $(this).append('<li>' + settings.mounthArry[m] +'<span>' + (m + 1)  + '</span></li>');

                }

                $(this).children("li:eq(0)").addClass("act").siblings("li").removeClass("act");

            });



            (settings.monthBack)(newtimestamp(dYear,dMonth,dDay));


        }





        // contribuild day

        function cDay(month, year) {



            var dayNum = 30;



            switch (month) {

                case 1:

                    dayNum = 31;

                    break;

                case 2:

                    //more or less year

                    if ( (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) ) {

                        dayNum = 29;

                    } else {

                        dayNum = 28;

                    }

                    break;

                case 3:

                    dayNum = 31;

                    break;

                case 5:

                    dayNum = 31;

                    break;

                case 7:

                    dayNum = 31;

                    break;

                case 8:

                    dayNum = 31;

                    break;

                case 10:

                    dayNum = 31;

                    break;

                case 12:

                    dayNum = 31;

                    break;

                default:

                    dayNum = 30;

                    break;

            }

            dDay = dayNum;

            $(settings.objDay).each(function(){

                //reset day
                $(this).html("");

                //add day
                for (var d = 0; d < dayNum; d++) {

                    $(this).append('<li>' + (d + 1) + '</li>');

                }

                //add day statu
                // if( dYear == adYear && dMonth == adMonth ){

                //     oDay.children("li:eq("+ dDay +")").addClass("act").siblings("li").removeClass("act");
                    
                // }else{


                    $(this).children("li:eq(0)").addClass("act").siblings("li").removeClass("act");

                // }

            });

            

            



            

            


            


        }



    }



    $.fn.dateShow = function (oInit) {

        return this.each(function () {

            return dateShow(oInit, $(this));

        });

    };



    // plugin defaults

    $.fn.dateShow.defaults = {

        sYear : 2016,
        objYear : ".year",

        objMounth : ".mounth",

        objDay : ".day",

        oprNext : $(".next"),

        oprPrev : $(".prev"),

        objBack : function(dt){},
        monthBack : function(dt){},

        // monthBack : function(year,mounth,day){},
        // yearBackPrev : function(year,mounth,day){},
        // yearBackNext : function(year,mounth,day){},

        mounthArry : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    };



}(jQuery));