import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
 
  dangerMessage: boolean = false;

  filterColor: number;
  filterBrand: number;

  filterForm: FormGroup;

  images: CarImage[];
  dataLoaded = false;
  basePath = "https://localhost:44350/";
  filterText: string;

  constructor( private activatedRoute: ActivatedRoute, private toastrService:ToastrService,  private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    })

  }

  getBothOfFilter(filterBrand:number, filterColor:number) {
    filterBrand = this.filterBrand;
    filterColor = this.filterColor;
 
}
}