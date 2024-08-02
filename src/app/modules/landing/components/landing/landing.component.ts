import { Component, OnInit, NgZone, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MenuComponent, NgClass, MatCardModule, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  ngZone = inject(NgZone);
  
  typedText = '';
  text = 'A1 Hospital';
  i = 0;
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.typeText();
    });

  }

  typeText(): void {
    if (this.i < this.text.length) {
      this.ngZone.run(() => {
        this.typedText += this.text[this.i];
      });
      this.i++;
      setTimeout(() => {
        this.typeText();
      }, 100);
    } else {
      setTimeout(() => {
        this.eraseText();
      }, 1000);
    }
  }

  eraseText(): void {
    if (this.i != 0) {
      this.ngZone.run(() => {
        this.typedText = this.typedText.substring(0, this.typedText.length - 1);
      });
      this.i--;
      setTimeout(() => {
        this.eraseText();
      }, 100);
    } else {
      setTimeout(() => {
        this.typeText();
      }, 1000);
    }
  }
}