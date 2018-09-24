function myFunc()
{

  var x=document.getElementById("first name").value;
  var y=document.getElementById("last name").value;
  if(x!=y)
  {
    alert("the passwords entered don't match ");
  }
  else if(x.length<8 || y.length<8)
  {
    alert("the passwords are not at least 8 characters long");
  }
  else
  {
    alert("the passwords match");
  }
}