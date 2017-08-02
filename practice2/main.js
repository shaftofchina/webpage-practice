window.onload = function(){
     var List=document.getElementById("menu");
     var section=List.getElementsByTagName("li");
     var oDiv=document.getElementById("box5");
     var aDiv=oDiv.getElementsByTagName("ul");
     for(var i = 0;i<section.length;i++){
        section[i].index = i+1;
        section[i].onmouseover = function(){
          for(var k = 0; k < section.length; k++){
            section[k].className="titleName";
          }
          this.className="titleName active";
          for(var j = 1; j　< aDiv.length; j++){
            aDiv[j].className="hide";
          }
          aDiv[this.index].className = "show";
        }
      }
    }

    setInterval(change,5000);
    var array = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/0.png");
    var index=0;
    function change(){
      var obj = document.getElementById("pictureHolder");
      if(index == array.length-1)
      {
        index = 0;
      }
      else {
        index += 1;
      }
      obj.src=array[index];
    }

    setInterval(changead,10000);
    var arrays = new Array("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
    var count = 0;
    function changead(){
      var obj = document.getElementById("adPic");
      if(count == arrays.length-1)
      {
        count = 0;
      }
      else {
        count += 1;
      }
      obj.src=arrays[count];
    }
