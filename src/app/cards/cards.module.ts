import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';




@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
   CardRoxoComponent,
   // CardRoxoButtonComponent,
    //CardButtonComponent

  ],
})
export class CardsModule { }
