import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  logout() : void{
    this.authenticationService.logout();
    this.router.navigate(['/admin/login']);
  }
  
}
