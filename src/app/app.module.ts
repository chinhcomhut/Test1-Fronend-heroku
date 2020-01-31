import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule
} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {GettingStartedComponent} from './gettingstarted/gettingstarted.component';
import {HttpClientModule} from '@angular/common/http';
// import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {ListComponent} from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { httpInterceptorProviders} from './auth/auth-interceptor';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadAvatarComponent } from './component/upload/upload-avatar/upload-avatar.component';
import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';

import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { CreateSongComponent } from './component/songManager/create-song/create-song.component';
import { TitlePageComponent } from './component/layout/title-page/title-page.component';
import { MenuLeftComponent } from './component/layout/menu-left/menu-left.component';
import { ContentComponent } from './component/layout/content/content.component';
import { DetailSongComponent } from './component/songManager/detail-song/detail-song.component';
import { AboutUsComponent } from './component/layout/about-us/about-us.component';
import { CarouselComponent } from './component/layout/carousel/carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/layout/header/header.component';
import { NotGuardComponent } from './component/layout/not-guard/not-guard.component';
import { SearchComponent } from './component/layout/search/search.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ListSongComponent } from './component/songManager/list-song/list-song.component';
import { AllListSongComponent } from './component/songManager/all-list-song/all-list-song.component';
import { UpdatesingerComponent } from './component/singerManager/updatesinger/updatesinger.component';
import { SingeraddsongComponent } from './component/singerManager/singeraddsong/singeraddsong.component';
import { ListSingerUserComponent } from './component/singerManager/list-singer-user/list-singer-user.component';
import { ListSingerComponent } from './component/singerManager/list-singer/list-singer.component';
import { CarouselListSingerComponent } from './component/singerManager/carousel-list-singer/carousel-list-singer.component';
import { CreateSingerComponent } from './component/singerManager/create-singer/create-singer.component';
import { DetailSingerComponent } from './component/singerManager/detail-singer/detail-singer.component';
import { AddsongComponent } from './component/playlistManager/addsong/addsong.component';
import { CreatePlaylistComponent } from './component/playlistManager/create-playlist/create-playlist.component';
import { ListPlaylistComponent } from './component/playlistManager/list-playlist/list-playlist.component';
import { PlaylistComponent } from './component/playlistManager/playlist/playlist.component';
import { UpdatePlaylistComponent } from './component/playlistManager/update-playlist/update-playlist.component';
import {AuthGuard} from './services/userManager/auth.guard';
import {AuthService} from './auth/auth.service';
import {MatSortModule} from '@angular/material/sort';
import {NgxAudioPlayerModule} from '../../projects/ngx-audio-player/src/lib/ngx-audio-player.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SortPipe } from './component/layout/content/sort.pipe';
import { ChangePassComponent } from './component/userManager/change-pass/change-pass.component';
import { PlayerComponent } from './component/player/player.component';
import { DetailPlayerComponent } from './component/songManager/detail-player/detail-player.component';
import {MatButtonModule} from '@angular/material/button';
import { UpdateSongComponent } from './component/songManager/update-song/update-song.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'guide/getting-started', component: GettingStartedComponent, data: {title: 'Getting Started'}},
    {path: 'list', component: ListComponent},
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'uploadfile',
        component: UploadFileComponent
    },
    {
        path: 'createmusic',
        component: CreateSongComponent, canActivate: [AuthGuard]
    },
    {path: 'home/song/play/:id', component: DetailSongComponent},
    {path: 'changepass', component: ChangePassComponent},
    {path: 'listPlayer/:id', component: DetailPlayerComponent},
    {path: 'create-playlist', component: CreatePlaylistComponent, canActivate: [AuthGuard]},
    {path: 'list-playlist', component: ListPlaylistComponent, canActivate: [AuthGuard]},
    {path: 'add-song/:id', component: AddsongComponent, canActivate: [AuthGuard]},
    {path: 'update-playlist/:id', component: UpdatePlaylistComponent, canActivate: [AuthGuard]},
    {path: 'my-playlist/:id', component: PlaylistComponent},
    {path: 'create-singer', component: CreateSingerComponent, canActivate: [AuthGuard]},
    {path: 'detail-singer/:id', component: DetailSingerComponent},
    {path: 'list-singer', component: ListSingerComponent},
    {path: 'error404', component: NotGuardComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'list-song', component: ListSongComponent, canActivate: [AuthGuard]},
    {path: 'list-singer-users', component: ListSingerUserComponent, canActivate: [AuthGuard]},
    {path: 'update-song/:id', component: UpdateSongComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        // tslint:disable-next-line:max-line-length
        AppComponent, HomeComponent, GettingStartedComponent, ListComponent, LoginComponent, RegisterComponent,
        // tslint:disable-next-line:max-line-length
        UserComponent, PmComponent, AdminComponent, UploadAvatarComponent, UploadFileComponent, CreateSongComponent, TitlePageComponent, MenuLeftComponent, ContentComponent, DetailSongComponent, AboutUsComponent, CarouselComponent, HeaderComponent, NotGuardComponent, SearchComponent, FooterComponent, ListSongComponent, AllListSongComponent, UpdatesingerComponent, SingeraddsongComponent, ListSingerUserComponent, ListSingerComponent, CarouselListSingerComponent, CreateSingerComponent, DetailSingerComponent, AddsongComponent, CreatePlaylistComponent, ListPlaylistComponent, PlaylistComponent, UpdatePlaylistComponent, SortPipe, ChangePassComponent, PlayerComponent, DetailPlayerComponent, UpdateSongComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule, FontAwesomeModule,
        MatCardModule, MatToolbarModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule,
        BrowserAnimationsModule, ShareButtonsModule,
        NgxAudioPlayerModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig), NgbCarouselModule, MatSortModule, NgxAudioPlayerModule, DragDropModule, MatButtonModule,
    ],
    entryComponents: [UserComponent],
    providers: [httpInterceptorProviders, AuthGuard, AuthService],
    bootstrap: [AppComponent, UserComponent]
})
export class AppModule {
    constructor() {
        library.add(faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn);
    }
}
