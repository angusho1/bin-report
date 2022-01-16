import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-report-map',
  templateUrl: './report-map.component.html',
  styleUrls: ['./report-map.component.scss']
})
export class ReportMapComponent implements OnInit {
    zoom = 12
    center: google.maps.LatLngLiteral
    options: google.maps.MapOptions = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
    }
    markers: any = []

  
    ngOnInit() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    }

    addMarker() {
        this.markers.push({
          position: {
            lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
            lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
          },
          label: {
            color: 'red',
            text: 'Marker label ' + (this.markers.length + 1),
          },
          title: 'Marker title ' + (this.markers.length + 1),
          options: { animation: google.maps.Animation.BOUNCE },
        })
    }

}
