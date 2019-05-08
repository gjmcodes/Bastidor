import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Vendas',
      url: '/sales/sale-customer-data',
      icon: 'list'
    },
    {
      title: 'Formas de Pagamento',
      url: '/payment-type/create',
      icon: 'list'
    },
    {
      title: 'Clientes',
      url: '/customer/create-customer',
      icon: 'list'
    },
    {
      title: 'Precificação',
      url: '/pricing/configurations',
      icon: 'list'
    },
    {
      title: 'Estoque',
      url: '/stock/stock-index',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
