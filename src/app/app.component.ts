import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   slideIndex = 1;

   ngOnInit() {
     this.showDivs(this.slideIndex);

   }
  
   plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  
   currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }
  
   showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " w3-red";
  }
 


}
