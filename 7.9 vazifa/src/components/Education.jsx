import React from "react";

function Education() {
  return (
    <div style={{marginTop: "15px"}}>
      <span className="fw">2.Образование</span>
      <table className="table">
        <thead>
          <tr>
            <th className="title-td">Год поступления</th>
            <th className="title-td">Год окончания</th>
            <th className="title-td">
              Название учебного заведения Факультет (отделение), город
            </th>
            <th className="title-td">Специальность, квалификация</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
            <td>
              <input required></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">Специализированные тренинги, стажировки, курсы и семинары, аспирантура, спец. школа и т.д.</td>
            <td colSpan={2}>
              <input required></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Education;
