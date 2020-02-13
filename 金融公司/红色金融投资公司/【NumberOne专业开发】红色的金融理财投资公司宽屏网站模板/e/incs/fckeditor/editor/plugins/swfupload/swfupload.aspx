<%@ Page Language="C#" %>
<% @ Import NameSpace="System.IO"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script runat="server">
string userFilesPath;
protected void Page_Load(object sender, EventArgs e)
   {
      userFilesPath ="/e/upload/s0/fck/image/";
       if(Request.Cookies["site"]!=null)
             {
               if(IsNum(Request.Cookies["site"].Value))
                 {
                 userFilesPath="/e/upload/s"+Request.Cookies["site"].Value+"/fck/image/";
                 }
              }
        else if(Request.Cookies["SiteId"]!=null)
              {
               if(IsNum(Request.Cookies["SiteId"].Value))
                 {
                  userFilesPath="/e/upload/s"+Request.Cookies["SiteId"].Value+"/fck/image/";
                 }
              }
      DateTime Dt=DateTime.Now;
      userFilesPath+=Dt.ToString("yyyy")+"/"+Dt.ToString("MM")+"/";
      if(!Directory.Exists(Server.MapPath(userFilesPath)))
        {
          Directory.CreateDirectory(Server.MapPath(userFilesPath));
        }
      if(!userFilesPath.EndsWith("/"))
      userFilesPath += "/";
      userFilesPath+=Dt.ToString("ddHHmmss")+"_";
      hdFilePath.Value=userFilesPath;
    }
private bool IsNum(string str)
 {
  if(string.IsNullOrEmpty(str)){return false;}
  string str1="0123456789";
  for(int i=0;i<str.Length;i++)
   {
    if(str1.IndexOf(str[i])==-1)
     {
       return false;
     }
   }
  return true;
 }
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>upload picture</title>
    <link href="default.css" rel="stylesheet" type="text/css" />

    <script type="text/javascript" src="/e/js/jquery.min.js"></script>

    <script type="text/javascript" src="js/swfupload.js"></script>

    <script type="text/javascript" src="js/handlers.js"></script>

    <script type="text/javascript" src="js/swfupload.queue.js"></script>

    <script type="text/javascript" src="js/fileprogress.js"></script>

    <script type="text/javascript">
        var dialog = window.parent;
        var oEditor = dialog.InnerDialogLoaded();
        var FCKLang = oEditor.FCKLang;
        var swfu;
        window.onload = function() {
            var settings = {
                // Backend Settings
                upload_url: "Upload_Pic.aspx",
                post_params : {
                   "ASPSESSID" : "<%=Session.SessionID %>"
                },
                post_params: {
                   "ImagePath" : "<%=userFilesPath%>"

            },

            // File Upload Settings
            use_query_string:true,
            file_size_limit: "10 MB",
            file_types: "*.jpg;*.bmp;*.png;*.gif",
            file_types_description: "JPG Images",
            //file_upload_limit:"3",  // Zero means unlimited
            file_queue_limit: "20",
            // Event Handler Settings - these functions as defined in Handlers.js
            //  The handlers are not part of SWFUpload but are part of my website and control how
            //  my website reacts to the SWFUpload events.
            //file_dialog_start_handler : fileDialogStart,
            file_queued_handler: fileQueued,
            file_queue_error_handler: fileQueueError,
            file_dialog_complete_handler: fileDialogComplete,
            upload_start_handler: uploadStart,
            upload_progress_handler: uploadProgress,
            upload_error_handler: uploadError,
            upload_success_handler: uploadSuccess,
            upload_complete_handler: uploadComplete,


            // Button settings
            button_image_url: "images/XPButtonNoText_160x22.png",
            button_placeholder_id: "spanButtonPlaceholder1",
            button_width: "65",
            button_height: "29",
            button_text: "选择",
            button_text_style: ".theFont { font-size: 16; }",
            button_text_top_padding: 3,
            button_text_left_padding: 12,

            // Flash Settings
            flash_url: "js/swfupload.swf", // Relative to this file

            custom_settings: {
                //upload_target : "divFileProgressContainer"
                progressTarget: "fsUploadProgress1",
                cancelButtonId: "btnCancel1"
            },

            // Debug Settings
            debug: false
        };
        swfu = new SWFUpload(settings);

    }
    function uploadPhotosClick() {
        //swfu.addPostParam('UserCategoryID',$('#photoUserCategory option:selected').val());
        swfu.startUpload();
    }
    </script>

</head>
<body>
    <form id="form1" runat="server">
    <div style="width: 300px;">
        <div class="fieldset flash" id="fsUploadProgress1">
        </div>
        <div style="padding-left: 5px;">
            <span id="spanButtonPlaceholder1"></span>
            <input type="button" value="Start Upload" onclick="uploadPhotosClick();" style="margin-left: 2px;
                font-size: 8pt; height: 29px;" />
            <input id="btnCancel1" type="button" value="Cancel Uploads" onclick="cancelQueue(swfu);"
                disabled="disabled" style="margin-left: 2px;
                font-size: 8pt; height: 29px;" />
        </div>
        &nbsp;<input id="hdFileName" name="hdFileName" type="hidden" value="" /><asp:HiddenField
            ID="hdFilePath" runat="server" Value="" />
    </div>
    </form>
</body>
<script type="text/javascript">
    var dialog = window.parent;
    dialog.SetOkButton(true);

    function Ok() {
        SetEditorContents();
        return true;
    }
    function SetEditorContents() {
        var fileList = document.getElementById("hdFileName").value;
        fileList = fileList.substr(0, fileList.length - 1);
        var filePath = document.getElementById("hdFilePath").value;
        var strs = fileList.split(',');
        var html = "";
        for (i = 0; i < strs.length; i++) {

            html += "<img src=" + filePath + strs[i] + "\>";

        }

        var Editor = window.parent.InnerDialogLoaded().FCK;
        Editor.InsertHtml(html);
    }

    function test() {
        var s = document.getElementById("hdFileName").value;
        alert(s)
    }
</script>
</html>
