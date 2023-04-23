import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AccountComponent } from './components/account/account.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CategoryBarComponent } from './components/category-bar/category-bar.component';

@NgModule({
  declarations: [NavBarComponent, ProfileCardComponent, AccountComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [ NavBarComponent, MatIconModule, MatToolbarModule, AccountComponent]
})
export class SharedModule { }
