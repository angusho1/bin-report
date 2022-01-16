import { Component, OnInit, ViewChild} from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { BinService } from 'src/app/services/bin.service';



@Component({
  selector: 'app-report-map',
  templateUrl: './report-map.component.html',
  styleUrls: ['./report-map.component.scss']
})
export class ReportMapComponent implements OnInit {
    @ViewChild("mapMarker",{static: false}) public mapMarker: any;
    @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
    
    constructor(private binService: BinService){}
    
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
    // marker_info: any = []

  
    ngOnInit() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
          this.addMarker();
      })
    }

    addMarker() {
        this.binService.addAllMarkers().then(
            // res => console.log(res[0].hits)


            res => this.markers = res.map(
                (marker:any) => {
                    return {
                        position: {
                            lat: marker.location[0],
                            lng: marker.location[1]
                        }, 
                        label: {
                            color: 'black',
                            text: marker.binId
                        }
                    }
                }
            )
        )
    }

    resetCounter() {
        // this.binService.binHitReset()
        console.log(this)
    }

    click() {
        console.log(this.mapMarker)

    }

}
