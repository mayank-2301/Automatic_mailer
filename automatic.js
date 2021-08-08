
// Code to be copied for the automatic mailer to work.


function myFunction() 
{
  var ss=SpreadsheetApp.getActive().getSheetByName("Mailer");
  
  var counta=ss.getRange(1,6).getValue();
  var today_date=ss.getRange(1,8).getValue();
  var today_month=ss.getRange(1,9).getValue();
  for(var i=2;i<=counta;i++)
  {
    var b_date=ss.getRange(i,4).getValue();
    var b_month=ss.getRange(i,5).getValue();
    if(b_date==today_date && b_month==today_month)
    {
      
      var name=ss.getRange(i,1).getDisplayValue();
      var email=ss.getRange(i,2).getDisplayValue();
      var subject="Happy Birthday " + name ;
      var message="";
      message+="Dear  " + name ;
      message+="<br>";
      message+="Greetings,";
      message+="<br>";
      message+="<br>";
      message+="<br>";
      message+="A very happy birthday to you,";
      message+="<br>";
      message+="I wish you happiness , joy , laughter and joy for the coming year , so gear up for another milestone in your life , refule!";
      message+="<br>";
      message+="<br>";
      message+="Regards";
      message+="<br>";
      message+="From Mayank.";

      MailApp.sendEmail({to:email,subject: subject, htmlBody: message});
    }
  }
}
