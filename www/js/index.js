document.addEventListener("deviceready", onDeviceReady, false);

document.getElementById('myButton').addEventListener('click', inventory, false);

function onDeviceReady(){
	nfc.addNdefListener(onNfc
			, function(){ 
					//alert("succes");
				} //Listener Success
			, function(error){
				alert("fail");
				}//Listener Fail
			);
}

function onNfc(nfcEvent){
    //alert("read nfc");
    /*var tag = nfcEvent.tag;

    alert(tag);	*/
	var tag = nfcEvent.tag;
	var tagId = nfc.bytesToHexString(tag.id);	
	alert(tagId);
}

function inventory(){
   alert("ok");
}