import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CunstomJsonService } from 'src/app/service/cunstom-json.service';

@Component({
  selector: 'app-display-costom-json-reslt',
  templateUrl: './display-costom-json-reslt.component.html',
  styleUrls: ['./display-costom-json-reslt.component.css']
})
export class DisplayCostomJsonResltComponent implements OnInit {

  fileString: string = '';

  JsonString: String = '';
  data: String = '';

  constructor(
    private route: ActivatedRoute,
    private cunstomJsonService: CunstomJsonService
  ) { }

  ngOnInit(): void {
    const fileId = this.route.snapshot.paramMap.get('id');
    this.readContent();
  }




  readContent(): void {
    const jsonId = this.route.snapshot.paramMap.get('id');
    console.log(jsonId);

    this.cunstomJsonService.getCustomJsonsbyId(jsonId).subscribe(value=>{

      // this.fileString = "{ 'Values': '" +  atob(value.content); + "'}"
      this.fileString = `{"name":[${(value.content)}]}`
      this.JsonString = JSON.parse(this.fileString);
      this.data = this.JsonString;
      console.log(value);

      console.log(this.fileString);
    });

}

get code() {
  return JSON.stringify(this.data, null, 2);
}

set code(v) {
  try {
    this.data = JSON.parse(v);
  } catch (e) {
    console.log('error occored while you were typing the JSON');
  }
}
}
