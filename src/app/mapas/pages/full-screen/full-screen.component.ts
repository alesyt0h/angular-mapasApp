import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa {
      width: 100%;
      height: 100%;
    }
  `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    

    // La linea comentada se encuentra ahora en el app.component.ts para que sea ejecutada antes de que renderize ningun otro componente o página, mas que nada para evitar tener que ir poniendo esta linea en todas las paginas que necesitemos un mapa
    //
    // (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.1900952760339223,41.43003069213161 ],
      zoom: 17
    });
  }

}
