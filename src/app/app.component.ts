import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Structure/header/header.component";
import { SidebarComponent } from "./Structure/sidebar/sidebar.component";

import { ConfigurationService } from './Services/configuration.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Frontend';
  constructor(
    private configurationService: ConfigurationService
  ) {
  }

  ngOnInit(): void {
    this.configurationService.LoadAvailableTemplates();
  }

}
