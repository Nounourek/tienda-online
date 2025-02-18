/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {Chart, DoughnutController, Legend, PieController, Tooltip, ArcElement, LineController, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//Linea de configuracion de graficos
  Chart.register(ArcElement, PieController, DoughnutController, Legend, Tooltip, LineController, LineElement, PointElement)
