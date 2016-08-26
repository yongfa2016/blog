window.onload=function(){
    function Tab(id){
      this.tab=document.getElementById(id);
      this.ul=this.tab.getElementsByTagName('ul')[0];
      this.ol=this.tab.getElementsByTagName('ol')[0];
      this.lis=this.ul.getElementsByTagName('li');
      this.olis=this.ol.getElementsByTagName('li');
      this.nowIndex=0;
    }
    Tab.prototype.init=function(){
      this.lis[0].style.display='block';
      this.addEvent();
      this.autoPlay();
    }
    Tab.prototype.show=function(obj){
        for(var i=0;i<this.olis.length;i++){
            this.lis[i].style.display='none';
        }
        this.lis[obj.index].style.display='block';
    }
    Tab.prototype.addEvent=function(){
      var that=this;
        for(var i=0;i<this.olis.length;i++){
          this.olis[i].index=i;
          this.olis[i].onclick=function(){
            that.show(this);
          }
        }
    }
    Tab.prototype.autoPlay=function(){
      var that=this;
      setInterval(function(){
        if(that.nowIndex==4){
          that.nowIndex=0;
        }else{
          that.nowIndex++;
        }
        that.show(that.olis[that.nowIndex]);
      },2000)
    }

    var myTab=new Tab('container');
    myTab.init();

}
