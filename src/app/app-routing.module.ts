import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeWarningComponent } from './recipes/recipe-warning/recipe-warning.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeWarningComponent, pathMatch: 'full' },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

} 