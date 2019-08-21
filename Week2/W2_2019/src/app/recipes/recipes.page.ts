import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { AlertController } from '@ionic/angular';
import { create } from 'domain';
import { Options } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {



  // recipes: Recipe[] = [
  //   {
  //     id: 'r1',
  //     title: 'Gado-gado',
  //     imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
  //     ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
  //   }
  // ];

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  clickEventHandler(recipeId) {
    console.log(this.recipesService.getRecipe(recipeId));
  }

  hapus(recipeId) {
    this.recipesService.deleteRecipe(recipeId);
    alert("Object dengan ID: " + recipeId + " berhasil dihapus di console!");
    console.log("Resep dengan ID: " + recipeId + "dihapus");
  }

}
