var photo = new Array()
var i=0;
photo[0]='first.jpg';
photo[1]='second.jpg';
photo[2]='third.jpg';
photo[3]='fourth.jpg';
photo[4]='fifth.jpg';


//previous fucntion
function myFunc()
{
  if(i>0)
  {
    i=i-1;
  }
  else
  {
    i=photo.length-1;
  }
  document.getElementById("current").src=photo[i];
}

//next function
function myFunc2()
{
  if(i<photo.length-1)
  {
    i=i+1;
  }
  else
  {
    i=0;
  }
  document.getElementById("current").src=photo[i];
}
