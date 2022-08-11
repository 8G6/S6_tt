
function id(d){
    return document.getElementById(d);
  }
function ifs(val,d){
    if((parseFloat(val)-parseInt(val))==0){
        return ((0<val)?((val)+d+S(val)):"")
    }
    else{
        return ((0<val)?((val.toFixed(2))+d+S(val)):"0")
    }
}
function S(s){
    if(s==1 || s==0){return " "}
    else if(s>1){return "s "}
    else{return ""}
  }
function std(seconds){
    var mel  = Math.floor(seconds / (24*60*60*365*1000));
    seconds -= mel    * (24*60*60*365*1000);  
    var cent  = Math.floor(seconds / (24*60*60*365*100));
    seconds -= cent    * (24*60*60*365*100);  
    var dec  = Math.floor(seconds / (24*60*60*365*10));
    seconds -= dec   * (24*60*60*365*10);  
    var years  = Math.floor(seconds / (24*60*60*365));
    seconds -= years    * (24*60*60*365);
    var months = Math.floor(seconds / (24*60*60*30));
    seconds -= months    * (24*60*60*30);
    var weeks  = Math.floor(seconds / (60*60*24*7));
    seconds -= weeks    * (60*60*24*7);
    var days   = Math.floor(seconds / (24*60*60));
    seconds -= days    * (24*60*60);
    var hours  = Math.floor(seconds / (60*60));
    seconds -= hours   * (60*60);
    var minutes= Math.floor(seconds / (60));
    seconds -= minutes * (60);
  
    if((seconds*10**9)<10000){
        return ifs(seconds*10**9," nanosecond") 
    }
  
    // else if((seconds*10**6)<1000){
    //    return ifs(seconds*1000," microsecond")
    // }
  
    // else if((seconds*1000)<1000){
    //    return ifs(seconds*100," millisecond")
    // }
  
    else{
       return ifs(mel," Millennium")+ifs(cent," century")+ifs(dec," decade")+ifs(years," year")+ifs(months," month")+ifs(weeks," week")+ifs(days," day")+ifs(hours," hour")+ifs(minutes," minute")+ifs(seconds," second")
    }
  
  }

function main(){
    let A=new Date("Augest 12, 2022 00:00:00").getTime();
    let B=new Date("Augest 16, 2022 00:00:00").getTime();
    let C=new Date("Augest 20, 2022 00:00:00").getTime();
    let D=new Date("Augest 24, 2022 00:00:00").getTime();
    let E=new Date("Augest 27, 2022 00:00:00").getTime();
    let F=new Date("September 1, 2022 00:00:00").getTime();
    let a=[A,B,C,D,E,F]
    let now=new Date().getTime()
    t = []
    days = []
    
    for(i=0;i<6;i++){
        t.push(((a[i]-now))/1000)
        days.push(parseInt(t[i]/(24*60*60)))
        id(`s${i+1}`).innerHTML=t[i]>0 ? std(t[i]) : 'exam over'
    }
    for(i=0;i<6;i++){
        id(`g${i+1}`).innerHTML=i==0 ? 'no previous exam' : days[i]-days[i-1]
    }
    

}
let timer=setInterval(main,1)