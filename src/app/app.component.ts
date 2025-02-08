import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  title = 'Assesment3';
  isLogedIn : boolean;

  closeModal() {
    this.closeBtn.nativeElement.click();
  }

  constructor(private router: Router,private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.data$
      .subscribe(res => {    
        debugger;   
        this.isLogedIn = res;
      });
  }

  onLogout() {
    this.sharedService.setData(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
