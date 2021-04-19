import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../models/baseResponseModel';
import { Files } from '../models/files';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) { }

  imgUrl = "https://localhost:44358/api/sharedFile"

  

  addSharedFile(Id:number, file:File):Observable<BaseResponseModel> {
    let fullpath = this.imgUrl + "/add";

    const formData: FormData = new FormData();
    formData.append('Id', Id.toString());
    formData.append('sharedFile', file);

    return this.httpClient.post<BaseResponseModel>(fullpath, formData, {reportProgress:true, responseType:"json"});
  }

}
