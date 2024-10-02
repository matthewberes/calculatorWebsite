import { Routes } from '@angular/router';
import { AreaComponent } from './area/area.component';
import { FractionsComponent } from './fractions/fractions.component';
import { HomeComponent } from './home/home.component';
import { MeanComponent } from './mean/mean.component';
import { MedianComponent } from './median/median.component';
import { ModeComponent } from './mode/mode.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mean', component: MeanComponent },
    { path: 'median', component: MedianComponent },
    { path: 'mode', component: ModeComponent },
    { path: 'fractions', component: FractionsComponent },
    { path: 'area', component: AreaComponent }
];
