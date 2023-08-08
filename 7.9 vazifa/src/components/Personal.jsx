import React from "react";
import getText, { words } from "../getText";

function Personal() {
  return (
    <div>
      <span className="secondary-text">1.Личные данные</span>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td colSpan={2} className="title-td">
              {getText(words.fio)}
            </td>
            <td colSpan={2}>
              <input required type="text" />
            </td>
          </tr>
          <tr>
            <td className="title-td">Дата рождения:</td>
            <td>
              <input required type="text" />
            </td>
            <td className="title-td">Место рождения:</td>
            <td>
              <input required type="text" />
            </td>
          </tr>
          <tr>
            <td className="title-td">Гражданство:</td>
            <td>
              <input required type="text" />
            </td>
            <td className="title-td">Национальность:</td>
            <td>
              <input required type="text" />
            </td>
          </tr>
          <tr>
            <td className="title-td">Контактные телефоны:</td>
            <td>
              <label htmlFor="dom">
              Домашний:
                <input id="dom" type="text" />
              </label>
            </td>
            <td>
              <label htmlFor="mob">
              Мобильный:
                <input required
                 id="dom" type="text" />
              </label>
            </td>
            <td>
              <label htmlFor="rob">
              Рабочий:
                <input id="dom" type="text" />
              </label>
            </td>
          </tr>
          <tr>
            <td className="title-td">E-mail:</td>
            <td>
              <input type="text" />
            </td>
            <td className="title-td">Другие контакты</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">Место регистрации (прописки)</td>
            <td colSpan={2}>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="title-td">Место жительства (фактическое)</td>
            <td colSpan={2}>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Personal;
