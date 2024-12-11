const done =document.getElementById("done");
const taskInput = document.getElementById("task");

done.addEventListener("click" , function() {
    let task =document.getElementById("task").value;
    if (!task.trim()) {
        confirm("未入力です。")
    }
    else {
        let list = document.getElementById("list");
        let li =document.createElement("li");
        
        // チェックボックスの作成
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        
        // タスクテキストのspan要素作成
        let taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.className ="taskContent";
        
        // li要素に追加
        li.appendChild(checkbox);
        li.appendChild(taskText);
        list.appendChild(li);
        
        // 入力欄をクリア
        document.getElementById("task").value = "タスク追加";
        
        // チェックボックスにイベントリスナーを追加
        checkbox.addEventListener("click", handleCheckboxClick);
    }
});

// クリック時にデフォルトテキストを消去
taskInput.addEventListener("focus", function() {
    if (taskInput.value === "タスク追加") {
        taskInput.value = "";
    }
});

// フォーカスが外れた時に空欄なら「タスク追加」を表示
taskInput.addEventListener("blur", function() {
    if (taskInput.value.trim() === "") {
        taskInput.value = "タスク追加";
    }
});

// チェックボックスのクリックイベントを監視する関数
function handleCheckboxClick(e) {
    const taskText = e.target.nextElementSibling; // チェックボックスの隣のspan要素
    if (e.target.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}
