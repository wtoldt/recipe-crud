# Recipe CRUD App
This app provides basic Create, Read, Update, and Delete functionality for recipes.
It is intended as a developer project to become familiar with CRUD patterns and interfaces.

## [wtoldt.github.io/recipe-crud](https://wtoldt.github.io/recipe-crud)

### Clone and run
Based on the create-react-app, simply clone and `npm install` and `npm run` to run the application.

## Project Road map
### Create
Route: _/create_

The create page will allow users to create new recipes and save them to the app. The UI will have a form which represents the recipe, an input for each property. The form must be validated in order for the app to save the recipe. The UI will save the recipe via API, or some mock api that persists to storage. TBD.

The create page could be it's own page, with a distinct route, or it could be a modal displayed on the list view.

Technologies used in create page:
* forms (maybe use [react-hook-form](https://react-hook-form.com/))
  * validation
  * form state (error, isDirty, isTouched, etc)
* HTML & CSS
  * assembling a form in html and all that entails
  * create with [material-ui](https://mui.com/) components for pizazz
* POST API - write api that persists the recipe to storage

### Read (and List)
There will be a couple pages that perform the read function of the CRUD app - single page view and list view.
#### List view
Route: _/_ or _/list_

This is the central point for the app, listing the available recipes plus providing buttons to:
* Search/filter the recipes
* View individual recipes (the single page recipe view)
* Delete recipes
* Edit recipes

Technologies used in list page:
* [table component](https://mui.com/components/tables/#sorting-amp-selecting) which lists the recipes, provides pagination, sorting, search, and filtering functionalities. Each row represents a recipe and links to the single page view as well as buttons to edit/delete the recipe.
* GET API - read only api that gets a list of recipes. Pagination, filtering, and search are accomplished in the query parameters.

#### Single page view
Route: _/\<recipeID\>_

This page is the most detailed view of a recipe in the app, providing description, ingredients list, instructions, and anything else needed to understand and cook the recipe. The recipe id in the route determines which recipe to show, and the page will need to GET the recipe on mount.

Technologies used in single page view:
* HTML & CSS
  * Lay out all the recipe info with HTML, and style it with CSS.
* GET API - read only api that will get a single recipe.

## Update
Route: _/\<recipeID\>/edit_

This page will allow the user to edit recipes that are already in the system. The recipe to edit will come from the recipe id in the route. The page will have the same form as the create page, and the initial values will come from the recipe. Like the create page, the form will need to be valid before the update is performed.

The update page will be accessible via a button on the read views:
* List view
  * Edit button on the recipe row. Clicking it navigates to the update page
* Single page view
  * Edit button/link exposed somewhere on the page.

Technologies used in update page:
* Forms (same as create)
* HTML & CSS (same as create)
* PUT API - used to persist the changes to the recipe

## Delete
_No route for delete_

Delete does not require it's own page, and is accomplished via actions exposed on the read views.

* List view
  * Each row will have a delete button. Clicking the delete button first shows a confirmation dialog (Are you sure you want to delete this recipe?), and upon confirmation will use the DELETE API to delete the single recipe.
* Single page view
  * Exposes a delete and edit button somewhere on the page. Clicking the delete button first shows a confirmation dialog, and upon confirmation will use the DELETE API to delete the single recipe.

Technologies used for delete functionality:
* [Dialog component](https://mui.com/components/dialogs/#basic-dialog)
* DELETE API - write api which deletes a single recipe

