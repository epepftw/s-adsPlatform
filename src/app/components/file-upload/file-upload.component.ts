import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as filestack from 'filestack-js';
import { UploadFileService } from 'src/app/services/uploadFile/upload-file.service';
import { UPLOADED_FILE } from 'src/app/types/Filestack.types';
import { environment } from 'src/environments/environment';


@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
	filestack_client: any;

	constructor(
		private _upload: UploadFileService
	) {
		this.filestack_client = filestack.init(environment.filestackAPI)
	}

	ngOnInit(): void {
	}

	uploadContents() {
		const filestack_options = {
			accept: [
				'image/jpg',
				'image/jpeg',
				'image/png',
				'video/mp4'
			],
			maxFiles: 5,
			onFileSelected: (e) => {
				console.log(e);
			},
			onUploadDone: (res: any) => {
				console.log(res);

				const uploaded_file = [];
				
				res.filesUploaded.map(
					(i: UPLOADED_FILE) => {
						uploaded_file.push({
							filename: i.filename,
							url: i.url,
							uploaded_by: 'Efraim Gabuat'
						})
					}
				)

				this.saveUploadedFileInfo(uploaded_file);
			}
		}

		this.filestack_client.picker(filestack_options).open();
	}

	saveUploadedFileInfo(data) {
		this._upload.save_uploaded_file_info(data).subscribe(
			data => {
				console.log(data)
			}, 
			error => {
				console.log('Error', error)
			}
		)
	}
}
