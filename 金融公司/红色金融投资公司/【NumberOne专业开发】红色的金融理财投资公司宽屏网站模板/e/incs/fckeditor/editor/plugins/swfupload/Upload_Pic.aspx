<%@ Page Language="C#" %>
<% @ Import NameSpace="PageAdmin"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script language="c#" runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
      if(Request.Cookies["Master"]==null)
        {
          Response.StatusCode = 401;
          Response.Write("Unauthorized");
          Response.End();
        }
      else
        {
         Master_Valicate Master=new Master_Valicate();
         Master.Master_Check();//限制管理员使用，避免被恶意伪造提交。
        }
        try
        {
            HttpPostedFile postedFile = Request.Files["Filedata"];
            string userFilesPath=Request.QueryString["ImagePath"];
            string fileName = postedFile.FileName;
            string FN=fileName.ToLower();
            if(userFilesPath.IndexOf("/e/upload/")==0 && userFilesPath.IndexOf(".")<0)
             {
              if(FN.IndexOf(";")>0 || FN.IndexOf(",")>0 || FN.IndexOf(" ")>0 || FN.IndexOf(".as")>0 || FN.IndexOf(".php")>0)
              {
               Response.StatusCode = 500;
               Response.Write("SWFUpload.UPLOAD_ERROR.SECURITY_ERROR");
               Response.End();
              }
              else
               {
                if(System.IO.File.Exists(Server.MapPath("~/"+userFilesPath + fileName)))
                {
                 string ex = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.')).ToLower();
                 fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + new Random().Next(100, 999).ToString() + ex; 
                }
                postedFile.SaveAs(Server.MapPath("~/" +userFilesPath + fileName));
                Response.StatusCode = 200;
              }
            }
        }
        catch 
        {
            Response.StatusCode = 500;
            Response.Write("An error occured");
            Response.End();
        }
        finally
        {
          Response.End();
        }
    }
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>无标题页</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
</body>
</html>