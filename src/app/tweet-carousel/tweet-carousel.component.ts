import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-carousel',
  imports: [NgFor],
  templateUrl: './tweet-carousel.component.html',
  styleUrl: './tweet-carousel.component.scss'
})
export class TweetCarouselComponent {
  tweets=[
    { content: "🔥 ¡Acabo de terminar una sesión de código intensa! Es hora de un descanso. #VidaDeDesarrollador", date: "10 de febrero de 2024" },
    { content: "Angular + Bootstrap = ¡Interfaz de usuario fluida! 🚀 #DesarrolloWeb", date: "8 de febrero de 2024" },
    { content: "Depuración: El arte de preguntar '¿por qué?' mil veces. 🤯", date: "5 de febrero de 2024" }
  ]
  

}
