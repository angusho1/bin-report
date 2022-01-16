import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { APIService } from 'src/app/API.service';
import { API, graphqlOperation } from 'aws-amplify';

@Component({
  selector: 'app-add-bin',
  templateUrl: './add-bin.component.html',
  styleUrls: ['./add-bin.component.scss']
})
export class AddBinComponent implements OnInit {
  binId: string;
  coords: any;
  binName = new FormControl('');
  binType: string = 'garbage';
  formTitle: string;
  
  constructor(private route: ActivatedRoute,
              private locationService: LocationService,
              private apiService: APIService) { }

  ngOnInit(): void {
    this.binId = this.route.snapshot.params['binId'];
    this.formTitle = `Update Bin (ID ${this.binId})`;
    this.locationService.getPosition().then(res => {
      this.coords = res;   
    });
  }

  async submitForm() {
    const query = `query MyQuery {
      listDisposalBins {
        items {
          id
          binId
        }
      }
    }`;

    const res: any = await API.graphql(graphqlOperation(query, { binId: this.binId }));
    const bin = res.data.listDisposalBins.items.find((bin: any) => bin.binId === this.binId);

    const input = {
      id: bin.id,
      binId: this.binId,
      name: this.binName.value,
      type: this.binType,
      hits: 0,
      location: [this.coords.lat, this.coords.lng],
      dateOfInit: new Date().toISOString()
    }
    
    this.apiService.UpdateDisposalBin(input)
      .then(res => console.log('success'))
      .catch(e => console.log(e));
  }
}
