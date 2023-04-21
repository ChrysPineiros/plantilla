import { Component, Input, enableProdMode } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const getOrderDay = function (rowData: any): number {
  return (new Date(rowData.OrderDate)).getDay();
};

@Component({
  selector: 'cne-grid-filter-sorting',
  templateUrl: './cne-grid-filter-sorting.component.html',
  styleUrls: ['./cne-grid-filter-sorting.component.scss']
})
export class CneGridFilterSortingComponent {
  @Input()
  dataSource: any;

  filterValue: Array<any>;

  customOperations: Array<any>;

  popupPosition: any;

  saleAmountHeaderFilter: any;

  @Input()
  columns: any;

  constructor() {
    this.popupPosition = {
      of: window, at: 'top', my: 'top', offset: { y: 10 },
    };
    this.filterValue = [
      ['Employee', '=', 'Clark Morgan'],
      'and',
      ['OrderDate', 'weekends'],
    ];
    this.customOperations = [{
      name: 'weekends',
      caption: 'Weekends',
      dataTypes: ['date'],
      icon: 'check',
      hasValue: false,
      calculateFilterExpression() {
        return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
      },
    }];

    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
  }

  onInitialized(e: any) {
    e.component.columnOption('SaleAmount', {
      editorOptions: {
        format: 'currency',
        showClearButton: true,
      },
    });
  }
}
