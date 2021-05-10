import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UPLOADED_FILE } from 'src/app/types/Filestack.types';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class UploadFileService {

	constructor(private _http: HttpClient) { }

	save_uploaded_file_info(data) {
		return this._http.post(`${environment.base_uri}${environment.save_uploaded_file}`, data);
	}

}
