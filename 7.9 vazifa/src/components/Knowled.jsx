function Knowled() {
  return (
    <div style={{ marginTop: "15px" }}>
      <h3>3.Знания и навыки</h3>
      <p>3.1.Какими языками Вы владеете?</p>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="title-td">Язык</td>
            <td className="title-td">разговорный</td>
            <td className="title-td">письмо</td>
            <td className="title-td">чтение</td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Узбекский</td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Русский</td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Английский</td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td style={{ padding: "10px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt">
        3.2. Степень владения ПК? (варианты ответов: - не знаю, - слабо, -
        средне, - хорошо, - в совершенстве)
      </p>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="title-td">MS Word</td>
            <td style={{ padding: "14px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td className="title-td">1C:</td>
            <td style={{ padding: "14px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="title-td">MS Excel</td>
            <td style={{ padding: "14px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td className="title-td">Интернет:</td>
            <td style={{ padding: "14px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="title-td">Power Point</td>
            <td style={{ padding: "14px" }}>
              <select style={{ padding: " 5px" }}>
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
            <td className="title-td"></td>
            <td style={{ padding: "14px" }}>
              <select
                style={{ padding: "5px", textAlign: "center" }}
              >
                <option>я знаю</option>
                <option>Я не знаю</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Knowled;
