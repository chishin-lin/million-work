let listData = document.querySelector("tbody");
let add = document.getElementById("submit");
let num = 0;
add.addEventListener("click", (e) => {
  e.preventDefault;
  let nameElement = document.getElementById("name");
  let name = nameElement.value;
  let phoneElement = document.getElementById("phone");
  let phone = phoneElement.value;
  let emailElement = document.getElementById("email");
  let email = emailElement.value;

  if (name === "") {
    //當todoText無輸入字樣送出將顯示提醒：Please enter some text
    alert("請輸入姓名！");
    return; //return 表達式會終止主函式執行
  }

  let data = document.createElement("tr");
  data.classList.add("data");
  //number
  let numTd = document.createElement("td");
  numTd.innerText = num + 1;
  num += 1;
  data.appendChild(numTd);
  //name,phone,email
  let nameTd = document.createElement("td");
  nameTd.innerText = name;
  let phoneTd = document.createElement("td");
  phoneTd.innerText = phone;
  let emailTd = document.createElement("td");
  emailTd.innerText = email;
  data.appendChild(nameTd);
  data.appendChild(phoneTd);
  data.appendChild(emailTd);

  //edit button
  let editElement = document.createElement("td");
  editElement.classList.add("edit"); //加入class標籤
  editElement.innerHTML = '<img src="./icons8-edit-30.png" alt="edit">';
  //toggo做開關
  editElement.addEventListener("click", (e) => {
    let btnElement = e.target.parentElement;
    // let data = btnElement.querySelectorAll("td");
    let name = data[1];
    let phone = data[2];
    let email = data[3];

    if (
      editElement.innerHTML === '<img src="./icons8-edit-30.png" alt="edit">'
    ) {
      editElement.innerHTML = '<img src="./icons8-tick-box-24.png" alt="">';
      name.innerHTML = `<input id="name" type="text" value="name" name="後端位置" />`;
    } else {
      editElement.innerHTML = '<img src="./icons8-edit-30.png" alt="edit">';
    }

    // name.innerHTML = '<input id="name" type="text" name="後端位置" />';
  });

  data.appendChild(editElement);

  //delete button
  let deleButton = document.createElement("td");
  deleButton.classList.add("dele"); //加入class標籤
  deleButton.innerHTML = '<img src="./icons8-trash-can-24.png" alt="trash">';
  deleButton.addEventListener("click", (e) => {
    // let deleBtn = e.target.parentElement; ->會有bug
    let deleBtn = e.currentTarget.parentElement; //綁定在父層
    deleBtn.remove();
  });
  data.appendChild(deleButton);

  nameElement.value = "";
  phoneElement.value = "";
  emailElement.value = "";
  listData.appendChild(data);
});
