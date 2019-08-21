import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://asset.kompas.com/crop/0x0:800x400/780x390/data/photo/2018/06/14/961696686.jpg',
      ingredients: ['Beras', 'Daun Ketupat', 'Air']
    },
    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://previews.123rf.com/images/mizina/mizina1706/mizina170600118/80005462-pizza-margherita-on-black-stone-background-homemade-pizza-margarita-with-tomatoes-basil-and-mozzarel.jpg',
      ingredients: ['Tepung Roti', 'Saus', 'Daun Bawang']
    }
  ];

  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return this.recipes.find(r => r.id == recipeId)
  }

  deleteRecipe(recipeId: string) {
    var find_recipe = this.recipes.find(r => r.id == recipeId);
    var idx = this.recipes.indexOf(find_recipe);

    if (idx !== -1) {
      return this.recipes.splice(idx, 1);
    }

  }


}
