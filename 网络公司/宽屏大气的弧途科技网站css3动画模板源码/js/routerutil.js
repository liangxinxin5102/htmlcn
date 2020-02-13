	
var ROUTER_ACCOUNT_SURVEY = '/survey/survey';//概况

var ROUTER_YUNDITUI_CLOUND = '/yunditui/Clound';//首页

var ROUTER_CONTENT_FORM = '/content/form';//修改密码

var ROUTER_CONTENT_BUSINESS = '/content/business';//修改公司名称

var ROUTER_SURVEY_PEOPLELIST = '/survey/peopleList';//推广人数

var ROUTER_ABNORMAL_SUBMITAUDIT = '/abnormal/submitAudit';//审核页面

var ROUTER_ABNORMAL_AUDITSUCCESS = '/abnormal/auditSuccess';//审核通过页面

var ROUTER_BODY_BODYINDEX = '/body/bodyIndex';//主页面

var ROUTER_BODY_BODYINDEX_EMPLOY = '/body/bodyIndex?index=employ'; //主页面并待处理

var ROUTER_BODY_BODYINDEX_ADMINISTRATION = '/body/bodyIndex?index=administration'; //兼职管理/
 
var ROUTER_BODY_BODYINDEX_ADMINISTRATION_NOTASSJOB = '/body/bodyIndex?index=administration&action=/partJob/notPassJob'; //审核不通过兼职
 
var ROUTER_BODY_BODYINDEX_ADMINISTRATION_ING = '/body/bodyIndex?index=administration&action=/partJob/recruitJobList'; //在招兼职

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_STORP = '/body/bodyIndex?index=administration&action=/partJob/storpJobList'; //暂停兼职

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_FINISH = '/body/bodyIndex?index=administration&action=/partJob/finishJobList'; //结束兼职

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_RELEASE = '/body/bodyIndex?index=administration&action=/release/releaseJob'; //发布兼职

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_RUBLISHINGSUCCESS = '/body/bodyIndex?index=administration&action=/release/rublishingSuccess'; //发布成功

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYEMPLOY = '/body/bodyIndex?index=administration&action=/companyReport/companyEmploy'; //公司待录取

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYWORK = '/body/bodyIndex?index=administration&action=/companyReport/companyWork'; //公司待工作

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYSETTLEMENT = '/body/bodyIndex?index=administration&action=/companyReport/companySettlement'; //公司待结算

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYEVALUATE = '/body/bodyIndex?index=administration&action=/companyReport/companyEvaluate'; //公司待评价

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYFINISHORFAILURE = '/body/bodyIndex?index=administration&action=/companyReport/companyFinishorFailure'; //公司已完成

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_COMPANYABORD = '/body/bodyIndex?index=administration&action=/companyReport/companyAbord'; //公司录取失败

var ROUTER_BODY_BODYINDEX_ADMINISTRATION_APPLYADMISSION = '/body/bodyIndex?index=administration&action=/companyReport/applyAdmission'; //兼职待录取

var ROUTER_ACCOUHTMANAGE_CHANGEPWD = '/accountManage/changePwd'; //修改密码

var ROUTER_ACCOUHTMANAGE_CHANGEMANAGER = '/accountManage/changeManager'; //更换负责人

var ROUTER_BODY_COMPANY = '/body/company';//公司风采

var ROUTER_ALIPAYHTML_ALIPAYINDEX = '/alipayHtml/alipayIndex';//青团宝

var ROUTER_LARGECUSTOMER_LARGECUSTOMER = '/largeCustomer/largeCustomer'; //大客户

var ROUTER_NOTLARGE_APPLYLARGEINDEX = '/notLarge/applyLargeIndex';//申请大客户

var ROUTER_NOTLARGE_NOTLARGEINDEX = '/notLarge/notLargeIndex';//不是大客户

var ROUTER_LARGECUSTOMER_EVALUATEFEEDBACK = '/largeCustomer/evaluateFeedback';//大客户评价反馈

var ROUTER_LARGECUSTOMER_DATASTATISTICS = '/largeCustomer/dataStatistics';//大客户数据统计

var ROUTER_CALLTOOL_CALLTOOLINDEX = '/callTool/callToolIndex';//打款工具


function pc_router(url) {
	window.location.href = url;
}