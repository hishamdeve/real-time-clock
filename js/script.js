function udateClock() {
    var now=new Date();
    var dayname=now.getDay(),
        mon=now.getMonth(),
        dnum=now.getDate(),
        ye=now.getFullYear(),
        hou=now.getHours(),
        min=now.getMinutes(),
        sec=now.getSeconds(),
        pe='AM';
    if(hou==0){
        hou=12;
    }
    if(hou>12){
        hou=hou-12;
        pe='PM';
    }
    Number.prototype.pad=function (digits) {
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
  }

    var month=['January','February','March','April',
        'May','June','July','August','September','October',
        'November','December'];
    var week=['Saturday','Sunday','Monday','Tuesday',
            'Wednesday','Thursday','Friday'];
    var ids=['dayname','month','daynum','year'
        ,'hour','minutes','seconds','period'];
    var values=[week[dayname],month[mon]
    ,dnum.pad(2),ye,hou.pad(2),min.pad(2),sec.pad(2),pe];

    for(var i=0 ;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.
        nodeValue=values[i];
    }
}
function initClock() {
    udateClock();
    window.setInterval('udateClock()',1000);
}

// analog clock //
const deg =6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
    let day = new Date();
    let hh= day.getHours() *30;
    let mm = day.getMinutes() *deg;
    let ss = day.getSeconds() *deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

// btn //
function digitOnly() {
    var digit =document.getElementById('digit');
    digit.style.display='none';
    var analog =document.getElementById('analog');
    analog.style.display=' flex';
    
    document.getElementById('btn').innerHTML='Digit Type';
 }
 function analogOnly() {
    var analog =document.getElementById('analog');
    analog.style.display='none';
    var digit =document.getElementById('digit');
    digit.style.display='';
    document.getElementById('btn').innerHTML='Analog Type';
    
 }




