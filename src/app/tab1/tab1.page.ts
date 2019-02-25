import { Component } from '@angular/core';
import { IBeacon } from '@ionic-native/ibeacon/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

//Documentation: https://ionicframework.com/docs/native/ibeacon/
//More Documentation: https://ionicframework.com/docs/native/ibeacon/

export class Tab1Page {


	constructor(private ibeacon: IBeacon) {
		console.log("we hit constructor!");
		this.ibeacon.requestAlwaysAuthorization();
		let delegate = this.ibeacon.Delegate();
		delegate.didRangeBeaconsInRegion()
		  .subscribe(
		    data => console.log('didRangeBeaconsInRegion: ', data),
		    error => console.error()
		  );
		delegate.didStartMonitoringForRegion()
		  .subscribe(
		    data => console.log('didStartMonitoringForRegion: ', data),
		    error => console.error()
		  );
		delegate.didEnterRegion()
		  .subscribe(
		    data => {
		      console.log('didEnterRegion: ', data);
		      console.log('We Found Beacon!')
		    }
		  );

		let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon','2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');

		this.ibeacon.startMonitoringForRegion(beaconRegion)
		  .then(
		    () => console.log('Native layer received the request to monitoring'),
		    error => console.error('Native layer failed to begin monitoring: ', error)
		  );
	 }


}