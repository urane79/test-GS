var sss = SpreadsheetApp.openById('1sWwME-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');  //id spreadsheet
var sh1 = sss.getSheetByName('Sheet1');


function simpan01(cid,tid){
 var y = sh1.getLastRow()                       //cari baris paling bawah
  for(var i=1;i<y+1;i++){
    var value = sh1.getRange("A"+i).getValue(); //baca semua kolom A
    if(value == cid){                           //apakah item yg dicari ada di kolom A
      var cr = i;
      console.log("oke") 
    }
  }

  if(cr == undefined) {
    console.log("nooooooooooo");
  }else{
    var ex = sss.getRange("B"+cr).getValue();
    var sx = sss.getRange("C"+cr).getValue();
    var ha = "Kode "+cid+"\n"+ex+"\n\n"+sx
      sendText(tid,ha)
    return ha

  }  
  sendText(tid,"Maaf, Kode yang dimasukkan tidak dikenali...!!!")
  return
}///////

