import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { RecipeApiService } from '../_services/recipe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15em',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '60em',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['undo', 'redo'],
      ['subscript', 'superscript'],
      ['fontName', 'customClasses'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      ['toggleEditorMode']
    ]
  };

  recipeForm: FormGroup;
  selectedFile: File;

  constructor(protected formBuilder: FormBuilder,
    private recipeService: RecipeApiService) { 
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      portion: ['', Validators.required],
      total_iron: ['', Validators.required]
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(){
    console.log(this.recipeForm);
    console.log(this.selectedFile);
    let dataToSend = {
      name: this.recipeForm.controls.name.value,
      description: this.recipeForm.controls.description.value,
      ingredients: this.recipeForm.controls.ingredients.value,
      duration: this.recipeForm.controls.duration.value,
      portion: this.recipeForm.controls.portion.value,
      total_iron: this.recipeForm.controls.total_iron.value,
    }
    console.log(dataToSend)
    this.recipeService.createRecipe(dataToSend).subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
