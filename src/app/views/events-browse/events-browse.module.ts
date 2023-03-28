import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EventsBrowseComponent } from './events-browse.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailComponent } from '../event-detail/event-detail.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CategoryCardComponent } from './category-card/category-card.component';
import { AccountComponent } from './account/account.component';
import { CategoryBarComponent } from './category-bar/category-bar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [EventsBrowseComponent, EventDetailComponent, CategoryCardComponent, AccountComponent, CategoryBarComponent, DropdownComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatChipsModule
  ],
  exports: [MatCardModule]
})
export class EventsBrowseModule { }
