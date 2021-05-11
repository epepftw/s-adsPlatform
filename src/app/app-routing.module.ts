import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }