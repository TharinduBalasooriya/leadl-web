import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import {  FileUploadService} from '../../service/file-upload.service';

@Component({
  selector: 'app-upload-script',
  templateUrl: './upload-script.component.html',
  styleUrls: ['./upload-script.component.css']
})
export class UploadScriptComponent implements OnInit {


    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: any = null; // Variable to store file
    fileId :string|null = ''
  constructor(private fileUploadService: FileUploadService,private route: ActivatedRoute,private router:Router) {
    Auth.currentAuthenticatedUser().then().catch(err=>{
      this.router.navigate(['login']);
    })
   }

  ngOnInit(){

    this.fileId = this.route.snapshot.paramMap.get('id');


  }

  onChange(event:any) {
    this.file = event.target.files[0];
  }

          onUpload() {
            this.loading = !this.loading;
            console.log(this.file);
            this.fileUploadService.upload(this.file,this.fileId).subscribe(
                // (event: any) => {
                //     //
                //     alert(event);
                //     console.log(event);
                // }
                result =>{
                  //console.log(JSON.parse(result))
                  alert('Uploaded Successfully')
                }
            );
}


}
