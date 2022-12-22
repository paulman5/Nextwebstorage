import React from "react";
import { extend } from "@syncfusion/ej2/base";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { KanbanDataModel } from "../../interface/kanbanDataModel";

export default function KanbanDialogFormTemplate(props: KanbanDataModel) {
  let assigneeData: string[] = [
    "Nancy Davloio",
    "Andrew Fuller",
    "Janet Leverling",
    "Steven walker",
    "Robert King",
    "Margaret hamilt",
    "Michael Suyama",
  ];
  let statusData: string[] = ["Open", "InProgress", "Testing", "Close"];
  let priorityData: string[] = [
    "Low",
    "Normal",
    "Critical",
    "Release Breaker",
    "High",
  ];
  let tagsHtmlAttributes = { name: "Tags" };
  const [state, setState] = React.useState(extend({}, {}, props, true));

  function onChange(args: any): void {
    let key: string = args.target.name;
    let value: string = args.target.value;
    setState({ [key]: value });
  }
  let data: KanbanDataModel = state;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="e-label">ID</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <input
                  id="Id"
                  name="Id"
                  type="text"
                  className="e-field"
                  value={data.Id}
                  disabled
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="e-label">Status</td>
            <td>
              <DropDownListComponent
                id="Status"
                name="Status"
                dataSource={statusData}
                className="e-field"
                placeholder="Status"
                value={data.Status}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Assignee</td>
            <td>
              <DropDownListComponent
                id="Assignee"
                name="Assignee"
                className="e-field"
                dataSource={assigneeData}
                placeholder="Assignee"
                value={data.Assignee}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Priority</td>
            <td>
              <DropDownListComponent
                type="text"
                name="Priority"
                id="Priority"
                popupHeight="300px"
                className="e-field"
                value={data.Priority}
                dataSource={priorityData}
                placeholder="Priority"
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-label">Summary</td>
            <td>
              <div className="e-float-input e-control-wrapper">
                <textarea
                  name="Summary"
                  className="e-field"
                  value={data.Summary}
                  onChange={onChange}
                ></textarea>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
