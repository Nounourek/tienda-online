import { Component } from '@angular/core';
import { GraphicPrimeraCajaComponent } from "../../control-pnael-tabs/graphic-primera-caja/graphic-primera-caja.component";
import { GraphicSegundaCajaComponent } from "../../control-pnael-tabs/graphic-segunda-caja/graphic-segunda-caja.component";

@Component({
  selector: 'app-graphics',
  imports: [GraphicPrimeraCajaComponent, GraphicSegundaCajaComponent],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}


