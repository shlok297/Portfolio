import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './about/education/education.component';
import { SkillsComponent } from './about/skills/skills.component';
import { ProjectsComponent } from './about/projects/projects.component';
import { ActivitiesComponent } from './about/activities/activities.component';
import { ExperienceComponent } from './about/experience/experience.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      ResumeComponent,
      ContactComponent,
      AboutComponent,
      EducationComponent,
      SkillsComponent,
      ProjectsComponent,
      ActivitiesComponent,
      ExperienceComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         { path: '', component: HomeComponent},
         { path: 'home', component: HomeComponent},
         {
            path: 'about',
            component: AboutComponent,
            children: [
               { path: 'education', component: EducationComponent},
               { path: 'skills', component: SkillsComponent},
               { path: 'projects', component: ProjectsComponent},
               { path: 'activities', component: ActivitiesComponent},
            ]
         },
         { path: 'resume', component: ResumeComponent},
         { path: 'contact', component: ContactComponent},
         // { path: 'about/', component: ExperienceComponent},
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
