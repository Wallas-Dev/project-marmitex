import { Component } from "@angular/core";
import { Digester } from "../digester.model";

@Component({
    selector: 'app-list-digester',
    templateUrl: './list-digester.component.html',
})
export class ListDigesterComponent {
    digesters: Digester[] = [
        new Digester('Churrasco', 'Churrasco de Picanha', 'https://cms-cdn.saipos.com/assets/2023/05/03/Marmitex-Instagram---SAIPOS---Sistema-para-Restaurante-2_uid_6452c36d288e1.jpg'),
        new Digester('Churrasco', 'Churrasco de Picanha', 'https://cms-cdn.saipos.com/assets/2023/05/03/Marmitex-Instagram---SAIPOS---Sistema-para-Restaurante-2_uid_6452c36d288e1.jpg')
    ]
}