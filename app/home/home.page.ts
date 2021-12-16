import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isConnected : boolean
  constructor(public network: Network, public connectionService: ConnectionService, public platform: Platform) {
    if (this.platform.is("android")) {




      this.network.onDisconnect().subscribe(() => {
        this.isConnected = false;
      });


      this.network.onConnect().subscribe(() => {
        this.isConnected = true;

        setTimeout(() => {
          if (this.network.type === 'wifi') {
          }
        }, 3000);
      });




    }
    else {
      this.connectionService.monitor().subscribe(currentState => {
       this.isConnected=currentState
      });

    }

  }

}
