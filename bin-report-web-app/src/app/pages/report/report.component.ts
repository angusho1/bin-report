import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API, graphqlOperation } from 'aws-amplify';
import { APIService } from 'src/app/API.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  binId: string;
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
    private apiService: APIService) { }

  ngOnInit(): void {
    this.binId = this.route.snapshot.params['binId'];
    this.submitReport();
  }

  async submitReport() {
    const query = `query MyQuery {
      listDisposalBins {
        items {
          id
          binId
          hits
        }
      }
    }`;

    const res: any = await API.graphql(graphqlOperation(query, { binId: this.binId }));
    const bin = res.data.listDisposalBins.items.find((bin: any) => bin.binId === this.binId);

    const input = {
      id: bin.id,
      hits: bin.hits + 1
    }

    this.apiService.UpdateDisposalBin(input)
      .then(res => console.log('success'))
      .catch(e => console.log(e));
    
    this.apiService.CreateBinRecord({
      binId: this.binId,
      date: new Date().toISOString(),
      action: 'report'
    });

    this.loading = false;
  }

}
