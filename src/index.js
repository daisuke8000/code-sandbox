import "./styles.css";

const onClickAdd = () =>{
    // テキストボックスの値を取得し、初期化する。
    const inputText = document.getElementById("add-text").value;
    createIncompleteList(inputText);
}

const removeFunc = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
    document.getElementById("add-text").value = "";
    // divの生成
    const div = document.createElement("div");
    div.className = "list-row";
    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの生成
    const button1 = document.createElement("button");
    button1.innerText = "OK";
    button1.addEventListener("click", () => {
        // 親要素から削除
        removeFunc(button1.parentNode);
        // 親要素を取得
        const addtarget = button1.parentNode;
        // 最初の子ノードのテキストを取得
        const text = addtarget.firstElementChild.innerText;
        // 親ノード以下を初期化
        addtarget.textContent = null;
        // liタグ生成、取得下テキストを渡す。
        const addli = document.createElement("li");
        addli.innerText = text;
        // buttonタグ生成
        const returnButton = document.createElement("button");
        // returnBtn
        returnButton.innerText = "return";
        returnButton.addEventListener('click', () => {
            const rtnTarget = returnButton.parentNode;
            document.getElementById("complete-list").removeChild(rtnTarget);
            const rtnText = rtnTarget.firstElementChild.innerText;
            createIncompleteList(rtnText);
            // rtnTarget.textContent = null;
            // const rtnli = document.createElement("li");
            // rtnli.innerText = rtnText;
            // rtnTarget.appendChild(rtnli);
            // rtnTarget.appendChild(button1);
            // rtnTarget.appendChild(button2);
            // document.getElementById("incomplete-list").appendChild(rtnTarget);
        });
        // 完了リストに追加
        addtarget.appendChild(addli);
        addtarget.appendChild(returnButton);
        document.getElementById("complete-list").appendChild(addtarget);
    });
    const button2 = document.createElement("button");
    button2.innerText = "DELETE";
    button2.addEventListener("click", () => {
        removeFunc(button2.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(button1);
    div.appendChild(button2);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);

}


document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());