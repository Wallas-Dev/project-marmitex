# Marmitex

Esse projeto foi criado em [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

Para rodar o projeto é necessario execultar "npm install" para as dependencias e "ng Server"

## Comandos para usar:

Uso de variaveis no template:

- {{variavel}}

Transferir valores do input:

- Ngmodel
- function($event)
- atributo na tag ex:(<input type="text" #atributteInput/>)

Transferir variaveis entre componentes:

- Pai para filho: @Input
- Filho para pai: @Output

Condicionais do Angular (Property Binding):

- ngIf
- ngFor
- ngElse
- ngClick

Recursos para o form:

- ngForm ex(#form="ngForm")
- ngSubmmit ex((ngSubmit)="addFood(form)")
