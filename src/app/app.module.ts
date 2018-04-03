import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ServerlistComponent } from './serverlist/serverlist.component';
import { Parc1Component } from './parc1/parc1.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { CockpitComponent } from './module-test/cockpit/cockpit.component';
import { ServerElementComponent } from './module-test/server-element/server-element.component';
import { DirTestComponent } from './dir-test/dir-test.component';
import {DirTestDirective} from './dir-test/dir-test.directive';
import {DirTestTwoDirective} from './dir-test/dir-test-two-directive';
import {DirTestUnlessDirective} from './dir-test/dir-test-unless.directive';
import {DropdownDirective} from './shared/dropdown.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DataBindingComponent,
    ServerlistComponent,
    Parc1Component,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ModuleTestComponent,
    CockpitComponent,
    ServerElementComponent,
    DirTestComponent,
    DirTestDirective,
    DirTestTwoDirective,
    DirTestUnlessDirective,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
