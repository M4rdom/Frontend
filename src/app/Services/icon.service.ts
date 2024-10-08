import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import path from 'path';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private maticonRegistry: MatIconRegistry, 
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    const icons = [
      { name: 'github-black', path: 'assets/icons/github-black.svg' },
      { name: 'github-white', path: 'assets/icons/github-white.svg' },
      { name: 'angular', path: 'assets/icons/angular.svg' },
      { name: 'docker', path: 'assets/icons/docker.svg' },
      { name: 'docker-circle', path: 'assets/icons/docker-circle.svg' },
      { name: 'nginx', path: 'assets/icons/nginx.svg' },
      { name: 'icecream',path : 'assets/icons/icecream.svg'},
      { name: 'apache',path : 'assets/icons/apache.svg'},
      { name: 'apache_alternative',path : 'assets/icons/apache_alternative.svg'},
      { name: 'unknowndice',path : 'assets/icons/unknowndice.svg'},
      // Agrega más íconos aquí
      { name:'copy-to-clipboard',path : 'assets/icons/copy-to-clipboard.svg'},
      { name:'download',path : 'assets/icons/download.svg'},
      { name:'paste-from-clipboard',path : 'assets/icons/paste-from-clipboard.svg'},
      
    ];

    icons.forEach(icon => {
      this.maticonRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }




  iconCalculatorSidenav(templateName:string):string{
    if (templateName.toLowerCase().includes('docker')) {
      return 'docker';
    } else if (templateName.toLowerCase().includes('nginx')) {
      return 'nginx';
    } else if (templateName.toLowerCase().includes('git')) {
      return 'github-black';
    } else if (templateName.toLowerCase().includes('apache')) {
      return 'apache';
    }else if (templateName.toLowerCase().includes('icecream')) {
      return 'icecream';
    }else if (!templateName) {
      return '';
    }
    return 'unknowndice';
  }

  iconCalculator1(templateName:string):string{
    if (templateName.toLowerCase().includes('docker')) {
      return 'docker';
    } else if (templateName.toLowerCase().includes('nginx')) {
      return 'nginx';
    } else if (templateName.toLowerCase().includes('git')) {
      return 'github-black';
    } else if (templateName.toLowerCase().includes('apache')) {
      return 'apache_alternative';
    }else if (templateName.toLowerCase().includes('icecream')) {
      return 'icecream';
    }else if (!templateName) {
      return '';
    }
    return 'unknowndice';
  }
}
