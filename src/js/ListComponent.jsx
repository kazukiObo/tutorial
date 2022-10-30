import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Checkbox from "@mui/material/Checkbox";


export default function ListComponent(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="todo">
      <table border="1">
        <tr>
          <th>to do 項目</th>
          <th>チェックボックス</th>
          <th>削除</th>
        </tr>
        {props.todoItems.map((todoItem) => {
          if (props.filterStatus === 1 && todoItem.c === false) {
            return false;
          }
          if (props.filterStatus === 2 && todoItem.c === true) {
            return false;
          }
          return (
            <tr>
              {/* <li key={todoItem.id}> */}
              <td className="title">{todoItem.t}</td>
              <td className="checkbox">
                <Checkbox
                  {...label}
                  color="secondary"
                  checked={todoItem.c}
                  onChange={(e) => {
                    props.upd(todoItem.id);
                  }}
                  icon={<TaskAltIcon />}
                  checkedIcon={<TaskAltIcon />}
                />
              </td>
              <td className="button">
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) => {
                    e.preventDefault();
                    props.remove(todoItem.id);
                  }}
                >
                  削除
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
