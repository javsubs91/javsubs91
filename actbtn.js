var pcmload = {
    isMobile:function(){
        if(/Android|webOS|iPhone|Windows Phone|iPod|iPad|BlackBerry|SymbianOS/i.test(navigator.userAgent)){
            return true;
        }
        return false;
    },
    load:function(data="",ident="pc"){
        if(ident == "pc"){
            if(!pcmload.isMobile()){
                document.write(atob(data));
            }
        }else{
            if(pcmload.isMobile()){
                document.write(atob(data));
            }
        }
    }
};
