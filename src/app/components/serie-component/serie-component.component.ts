import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-component',
  templateUrl: './serie-component.component.html',
  styleUrls: ['./serie-component.component.css'],
})
export class SerieComponentComponent implements OnInit {
  navTab = 'série';

  epreuveList = [
    {
      id: 1,
      title: 'Jour 1',
      nbEp: '09',
      type: 'Spécialités',
    },
    {
      id: 2,
      title: 'Jour 2',
      nbEp: '08',
      type: 'Spécialités',
    },
  ];
  epreuveListName = 'épreuve';

  spList = [
    {
      id: 1,
      title: 'Réanimation',
      nbEp: '10',
      type: 'sujets',
    },
    {
      id: 2,
      title: 'Endocrinologie',
      nbEp: '06',
      type: 'Sujets',
    },
    {
      id: 3,
      title: 'Urologie',
      nbEp: '04',
      type: 'Sujets',
    },
    {
      id: 4,
      title: 'Pédiatrie',
      nbEp: '03',
      type: 'Sujets',
    },
    {
      id: 5,
      title: 'Nephrologie',
      nbEp: '04',
      type: 'Sujets',
    },
    {
      id: 6,
      title: 'Infectieux',
      nbEp: '02',
      type: 'Sujets',
    },
  ];
  spName = 'spécilaité';

  sujetList = [
    {
      id: 1,
      title: 'ACC',
      code: '526Q',
    },
    {
      id: 1,
      title: 'ACC',
      code: '526Q',
    },
    {
      id: 1,
      title: 'ACC',
      code: '526Q',
    },
    {
      id: 1,
      title: 'ACC',
      code: '526Q',
    },
  ];
  sujetName = 'Sujet';

  serieList = [
    {
      id: 2,
      title: '2020',
      code: '556Q',
    },
    {
      id: 3,
      title: '2019',
      code: '880Q',
    },
    {
      id: 4,
      title: '2018',
      code: '178Q',
    },
    {
      id: 5,
      title: '2017',
      code: '178Q',
    },
  ];
  serieName = 'Série';

  facList = [
    {
      id: 1,
      title: 'Tous les sources',
      code: '80Q',
    },
    {
      id: 2,
      title: 'F.M.Monastir',
      code: '20Q',
    },
    {
      id: 3,
      title: 'F.M.Sfax',
      code: '20Q',
    },
    {
      id: 4,
      title: 'F.M.Sousse',
      code: '20Q',
    },
    {
      id: 5,
      title: 'F.M.Tunis',
      code: '20Q',
    },
  ];
  facName = 'faculté';

  showComp = {
    showSp: false,
    showSj: false,
    showSer: false,
    showFac: false,
    final: false,
  };

  constructor() {}

  ngOnInit(): void {}

  receiveEvent(showComp: string) {
    switch (showComp) {
      case '1':
        this.showComp.showSp = true;
        break;
      case '2':
        this.showComp.showSj = true;
        break;
      case '3':
        this.showComp.showSer = true;
        break;
      case '4':
        this.showComp.showFac = true;
        break;
      case '5':
        this.showComp.final = true;
        break;

      default:
        break;
    }
  }
}
