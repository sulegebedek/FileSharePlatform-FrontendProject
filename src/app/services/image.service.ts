import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  imgUrl = "https://localhost:44346/api/carimages"

  getImagesbyCar(carId: number): Observable<ListResponseModel<CarImage>> {
    let fullPath = this.imgUrl + "/getbycarid?id=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(fullPath);
  }

  addCarImage(carId:number, file:File):Observable<BaseResponseModel> {
    let fullpath = this.imgUrl + "/add";

    const formData: FormData = new FormData();
    formData.append('CarId', carId.toString());
    formData.append('Image', file);

    return this.httpClient.post<BaseResponseModel>(fullpath, formData, {reportProgress:true, responseType:"json"});
  }

}
