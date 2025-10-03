import {create_table} from './create_table.js';

export async function render_data(company, input_word) {

    // 完全一致
    if (company.type == "exact") {
        display(company.data);
    }
    // 部分一致 
    else {
        const listDiv = document.getElementById("candidates");
        console.log(company)
        
        if (company.data.length === 0) {
            listDiv.innerHTML = `<p>「${input_word}」に一致する候補は0件でした。</p>`;
            return;
        } else {
            listDiv.innerHTML = `<p>「${input_word}」に一致する候補:</p><ul></ul>`;
        }

        const ul = document.querySelector("ul");
        company.data.forEach(c => {
            const li = document.createElement("li");
            li.textContent = `証券コード: ${c["証券コード"]} - ${c["企業名"]} (${c["業種"]}) `;
            
            const btn = document.createElement("button");
            btn.textContent = "確認";
            btn.addEventListener("click", () => display(c));

            li.appendChild(btn);
            ul.appendChild(li);
        });
    }

}



async function display(company) {
    const listDiv = document.getElementById("candidates");
    listDiv.innerHTML = ""; // 候補リストを削除

    const resultDiv = document.getElementById("result");
    const header = document.createElement("p");
    header.classList.add("header")
    header.innerHTML = `
        証券コード: ${company["証券コード"]}<br>
        企業名: ${company["企業名"]}<br>
        業種: ${company["業種"]}<br>
        `;
    resultDiv.appendChild(header);
    create_table(company);

    // URLの?code=を証券コードに置き換える
    const newUrl = `${window.location.pathname}?code=${company["証券コード"]}`;
    window.history.pushState({companyCode: company["証券コード"]}, "", newUrl);
}