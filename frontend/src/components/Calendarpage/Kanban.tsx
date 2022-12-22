import React from "react";
import { useState } from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { kanbanData, kanbanGrid } from "../../lib/KanbanData/kanbanData";
import PropertyPane from "./Propertypane";
import KanbanDialogFormTemplate from "./Formtemplate";
import { KanbanDataModel } from "../../interface/kanbanDataModel";

export default function Kanban() {
  let kanbanObj;

  const [count, setCount] = useState(0);

  function dialogTemplate(props: KanbanDataModel): JSX.Element {
    return <KanbanDialogFormTemplate {...props} />;
  }

  function columnTemplate(props: { [key: string]: string }) {
    return (
        <div className="header-template-wrap">
          <div className={"header-icon e-icons " + props.keyField}></div>
          <div className="header-text">{props.headerText}</div>
          <ButtonComponent id="column" className="e-btn" onClick={deletecolumn}>
            Delete Column
          </ButtonComponent>
        </div>
    );
  }

  function addcolumn() {
    // Let users add a column
    kanbanObj.addColumn({ headerText: "Done", keyField: "Close" + count });
    setCount(count + 1);
  }
  function deletecolumn() {
    // Let users delete a column
    kanbanObj.deleteColumn({ headerText: "Done", keyField: "Close" + count });
    setCount(count + 1);
  }
  const addCard = () => {
    const cardIds = kanbanObj.kanbanData.map((obj: any) =>
      parseInt(obj.Id.replace("Task ", ""), 10)
    );
    const cardCount = Math.max.apply(Math, cardIds) + 1;
    const cardDetails = {
      Id: "Task " + cardCount,
      Status: "Open",
      Priority: "Normal",
      Assignee: "Andrew Fuller",
      Estimate: 0,
      Tags: "",
      Summary: "",
    };
    kanbanObj.openDialog("Add", cardDetails);
  };

  return (
    <div className="kanban-overview">
      <div className="w-full">
        <KanbanComponent
          id="kanban"
          keyField="Status"
          enablePersistence={false}
          dataSource={kanbanData}
          ref={(kanban) => {
            kanbanObj = kanban;
          }}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
          dialogSettings={{ template: dialogTemplate }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {kanbanGrid.map((item) => (
              <ColumnDirective
                key={item.id}
                {...item}
                template={columnTemplate}
              />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
      <div className="Property-section">
        <PropertyPane title="properties">
          <ButtonComponent id="column" className="e-btn" onClick={addcolumn}>
            Add Column
          </ButtonComponent>
        </PropertyPane>
      </div>
    </div>
  );
}
