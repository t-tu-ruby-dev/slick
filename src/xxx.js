import { Grid, Data } from "slickgrid-es6";

function WorkGrid() {
  const module = this;
  const GRID_ID = "#work-grid";

  const dataView = new Data.DataView();
  const options = {
    editable: false,
    enableAddRow: false,
    enableColumnReorder: false,
    enableCellNavigation: true,
  };
  const columns = [
    { id: "a", name: "a", field: "a" },
    { id: "b", name: "b", field: "b" },
    { id: "c", name: "c", field: "c" },
    { id: "d", name: "d", field: "d" },
  ];

  module.initGird = function () {
    new Grid(GRID_ID, dataView, columns, options);
  };

  module.setItems = function () {
    dataView.setItems([
      { id: "1", a: "1", b: "1", c: "1", d: "1" },
      { id: "2", a: "2", b: "2", c: "2", d: "2" },
      { id: "3", a: "3", b: "3", c: "3", d: "3" },
      { id: "4", a: "4", b: "4", c: "4", d: "4" },
    ]);
  };
}

export default new WorkGrid();
