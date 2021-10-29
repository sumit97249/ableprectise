import {
  NgModule,
  ɵflushModuleScopingQueueAsMuchAsPossible
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  PostComponent
} from './demo/pages/post/post.component';
import {
  UsersComponent
} from './demo/pages/users/users.component';
import {
  AdminComponent
} from './theme/layout/admin/admin.component';
import {
  SignupComponent
} from './auth/auth/signup/signup.component';
import {
  AuthComponent
} from './theme/layout/auth/auth.component';
import {
  SigninComponent
} from './auth/auth/signin/signin.component';
import {
  AuthGuard
} from './guard/auth.guard';
import {
  HomeGuard
} from './guard/home.guard';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [{
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'posts-page',
        component: PostComponent
      },
      {
        path: 'user-list',
        component: UsersComponent
      },

      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
    ]
  },
  {
    path: 'authantication',
    component: AuthComponent,
    canActivate: [HomeGuard],
    children: [{
        path: 'singin',
        component: SigninComponent
      },
      {
        path: 'singup',
        component: SignupComponent
      },
      {
        path: 'authantication',
        loadChildren: () => import('./auth/auth/auth.module').then(module => module.AuthModule)
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
