import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

//Documentation: https://ionicframework.com/docs/native/ibeacon/
//More Documentation: https://ionicframework.com/docs/native/ibeacon/

export class Tab1Page {

	constructor(private ibeacon: IBeacon) {

		var PROXIMIIO_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImYyZmU3Mzk0LWQ2NmEtNGRmMC1hNzliLTIzMjI5NWNjZWQ0NiIsInR5cGUiOiJhcHBsaWNhdGlvbiIsImFwcGxpY2F0aW9uX2lkIjoiODA4NmM5NmYtZDdjMi00NjM4LWFhY2UtNWFlODRmMTFmYTk3In0.bXmoSUeao6YbxtsWrQ4eupNhpX-dTv_hEprcYX_HV2A';
		function initProximiio() {
		    proximiio.setToken(PROXIMIIO_TOKEN);
		    proximiio.setDebugOutput(true, null, null);

		    proximiio.setOutputTriggerCallback(function (output) {
		      // Your code here
		    });

		    proximiio.setGeofenceTriggerCallback(function(enter, geofence) {
		      // Your code here
		    });

		    proximiio.setPositionChangeCallback(function(coords) {
		      // Your code here, for example:
		      //document.getElementById("position-latitude").innerHTML = coords.coordinates.lat;
		      //document.getElementById("position-longitude").innerHTML = coords.coordinates.lon;
		      //document.getElementById("position-accuracy").innerHTML = coords.accuracy;
		    });
		},
		// console.log("we hit constructor!");
		// // Dictionary of beacons.
		// var beacons = {};
		// // Timer that displays list of beacons.
		// var timer = null;
		// // This calls onDeviceReady when Cordova has loaded everything.
		// document.addEventListener('deviceready', this.onDeviceReady(), false);
		// // Add back button listener (for Android).
		// document.addEventListener('backbutton', this.onBackButtonDown(), false);



			// this.ibeacon.requestAlwaysAuthorization();
			// let delegate = this.ibeacon.Delegate(); 
			// delegate.didRangeBeaconsInRegion()
			//   .subscribe(
			//     data => console.log('didRangeBeaconsInRegion: ', data),
			//     error => console.error()
			//   );

		// delegate.didStartMonitoringForRegion()
		//   .subscribe(
		//     data => console.log('didStartMonitoringForRegion: ', data),
		//     error => console.error()
		//   );
		// delegate.didEnterRegion()
		//   .subscribe(
		//     data => {
		//       console.log('didEnterRegion: ', data);
		//       console.log('We Found Beacon!')
		//     }
		//   );

		// let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');

		// this.ibeacon.startMonitoringForRegion(beaconRegion)
		//   .then(
		//     () => console.log('Native layer received the request to monitoring'),
		//     error => console.error('Native layer failed to begin monitoring: ', error)
		//   );
	 }



		onDeviceReady()
		{
			// Start tracking beacons!
			setTimeout(this.startScan(), 500);
			// Timer that refreshes the display.
			timer = setInterval(this.updateBeaconList(), 500);
		}

		onBackButtonDown()
		{
			evothings.eddystone.stopScan();
			navigator.app.exitApp();
		}
		startScan()
		{
			this.showMessage('Scan in progress.');
			evothings.eddystone.startScan(
				function(beacon)
				{
					// Update beacon data.
					beacon.timeStamp = Date.now();
					beacons[beacon.address] = beacon;
				},
				function(error)
				{
					this.showMessage('Eddystone scan error: ' + error);
				});
		}

		// Map the RSSI value to a value between 1 and 100.
		// mapBeaconRSSI(rssi){
		// 	if (rssi >= 0) return 1; // Unknown RSSI maps to 1.
		// 	if (rssi < -100) return 100; // Max RSSI
		// 	return 100 + rssi;
		// }
		// getSortedBeaconList(beacons){
		// 	var beaconList = [];
		// 	for (var key in beacons)
		// 	{
		// 		beaconList.push(beacons[key]);
		// 	}
		// 	beaconList.sort(function(beacon1, beacon2)
		// 	{
		// 		return mapBeaconRSSI(beacon1.rssi) < mapBeaconRSSI(beacon2.rssi);
		// 	});
		// 	return beaconList;
		// }
		// updateBeaconList(){
		// 	removeOldBeacons();
		// 	displayBeacons();
		// }
		// removeOldBeacons(){
		// 	var timeNow = Date.now();
		// 	for (var key in beacons)
		// 	{
		// 		// Only show beacons updated during the last 60 seconds.
		// 		var beacon = beacons[key];
		// 		if (beacon.timeStamp + 60000 < timeNow)
		// 		{
		// 			delete beacons[key];
		// 		}
		// 	}
		// }
		//  displayBeacons(){
		// 	var html = '';
		// 	var sortedList = getSortedBeaconList(beacons);
		// 	for (var i = 0; i < sortedList.length; ++i)
		// 	{
		// 		var beacon = sortedList[i];
		// 		var htmlBeacon =
		// 			'<p>'
		// 			+	htmlBeaconName(beacon)
		// 			+	htmlBeaconURL(beacon)
		// 			+	htmlBeaconNID(beacon)
		// 			+	htmlBeaconBID(beacon)
		// 			+	htmlBeaconEID(beacon)
		// 			+	htmlBeaconVoltage(beacon)
		// 			+	htmlBeaconTemperature(beacon)
		// 			+	htmlBeaconRSSI(beacon)
		// 			+ '</p>';
		// 		html += htmlBeacon
		// 	}
		// 	document.querySelector('#found-beacons').innerHTML = html;
		// }
		// htmlBeaconName(beacon){
		// 	var name = beacon.name || 'no name';
		// 	return '<strong>' + name + '</strong><br/>';
		// }
		// htmlBeaconURL(beacon){
		// 	return beacon.url ?
		// 		'URL: ' + beacon.url + '<br/>' :  '';
		// }
		// htmlBeaconURL(beacon){
		// 	return beacon.url ?
		// 		'URL: ' + beacon.url + '<br/>' :  '';
		// }
		// htmlBeaconNID(beacon){
		// 	return beacon.nid ?
		// 		'NID: ' + uint8ArrayToString(beacon.nid) + '<br/>' :  '';
		// }
		// htmlBeaconBID(beacon){
		// 	return beacon.bid ?
		// 		'BID: ' + uint8ArrayToString(beacon.bid) + '<br/>' :  '';
		// }
		// htmlBeaconEID(beacon){
		// 	return beacon.eid ?
		// 		'EID: ' + uint8ArrayToString(beacon.eid) + '<br/>' :  '';
		// }
		// htmlBeaconVoltage(beacon){
		// 	return beacon.voltage ?
		// 		'Voltage: ' + beacon.voltage + '<br/>' :  '';
		// }
		// htmlBeaconTemperature(beacon){
		// 	return beacon.temperature && beacon.temperature != 0x8000 ?
		// 		'Temperature: ' + beacon.temperature + '<br/>' :  '';
		// }
		// htmlBeaconRSSI(beacon){
		// 	return beacon.rssi ?
		// 		'RSSI: ' + beacon.rssi + '<br/>' :  '';
		// }
		// uint8ArrayToString(uint8Array){
		// 	function format(x)
		// 	{
		// 		var hex = x.toString(16);
		// 		return hex.length < 2 ? '0' + hex : hex;
		// 	}
		// 	var result = '';
		// 	for (var i = 0; i < uint8Array.length; ++i)
		// 	{
		// 		result += format(uint8Array[i]) + ' ';
		// 	}
		// 	return result;
		// }
		//  showMessage(text){
		// 	console.log(text);
		// }
		



}