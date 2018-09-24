function myFunc()
{
  let dummy= document.getElementById("dummy");
  let bredvalue =document.getElementById("br").value;
  let bbluevalue =document.getElementById("bb").value;
  let bgreenvalue =document.getElementById("bg").value;
  let bwidthvalue =document.getElementById("w").value;
  let gredvalue =document.getElementById("gr").value;
  let gbluevalue =document.getElementById("gb").value;
  let ggreenvalue =document.getElementById("gg").value;

  dummy.style.borderColor = "rgb(" + bredvalue + "," + bbluevalue + "," + bgreenvalue + ")";
  dummy.style.borderWidth =bwidthvalue;
  dummy.style.backgroundColor = "rgb(" + gredvalue + "," + gbluevalue + "," + ggreenvalue + ")";
}