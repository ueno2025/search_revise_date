// 大株主を表形式で表示する関数
export async function create_table(company) {
    const table = document.createElement("table");
    table.classList.add("shareholders");

    // ヘッダー行(見出し)
    const headerRow = document.createElement("tr");
    const headers = ["株主名", "住所", "持株数", "持株比率"]

    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // データ行
    company["大株主"].forEach(element => {
        const tr = document.createElement("tr");

        headers.forEach(key => {
            const td = document.createElement("td");
            if (key == "株主名") {
                td.innerHTML = `<a href=https://ueno2025.github.io/reverse_shareholder/?keyword=${element[key]} target="_blank" rel="noopener noreferrer">${element[key]}</a>`
            } else {
                td.textContent = element[key];
            }

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    document.getElementById("result").appendChild(table);
}