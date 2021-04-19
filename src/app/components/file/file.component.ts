import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Files } from 'src/app/models/files';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
 
  dangerMessage: boolean = false;
  filterForm: FormGroup;

  files: Files[];
  dataLoaded = false;
  basePath = "https://localhost:44358/";
  filterText: string;

  constructor( private activatedRoute: ActivatedRoute, private toastrService:ToastrService,  private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    })

  }

}