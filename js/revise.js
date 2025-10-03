// 業績修正日を表示させる関数
export async function render_rivise(company) {
    const resultDiv = document.getElementById("result");
    const h3 = document.createElement("h3");
    h3.innerHTML = `業績修正日(2014年3月3日以降)`
    resultDiv.appendChild(h3);
    console.log(company)
    if(company["業績修正日"].length === 0) {
        const p = document.createElement("p");
        p.className = "p-size";
        p.innerHTML = `0件です。`
        resultDiv.appendChild(p);
    }

    const ul = document.createElement("ul");
    company["業績修正日"].forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);
    })
    resultDiv.appendChild(ul);

}