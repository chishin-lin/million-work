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
    //當name無輸入字樣送出將顯示提醒
    alert("請輸入姓名！");
    return;
  }

  let data = document.createElement("tr");
  data.classList.add("data");

  //number->將編號而外按照順序排列，但此處的no.是id因此作廢
  /*let numTd = document.createElement("td");
    for (let i = 1; i <= data.querySelectorAll().length; i++) {
      numTd.innerText = i;
    }*/

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
  let isEdit = true;
  editElement.innerHTML = '<img src="./icons8-edit-30.png" alt="edit">';
  //toggo做開關
  editElement.addEventListener("click", (e) => {
    let btnElement = e.currentTarget.parentElement.querySelectorAll("td");
    let name = btnElement[1];
    let phone = btnElement[2];
    let email = btnElement[3];

    if (isEdit) {
      /*原定做成一個編輯表單，編輯完成送出，表格在做接收
      console出來表格不會顯示在畫面，感覺多此一舉
      let editForm = document.createElement("form");

      let editName = document.createElement("input");
      editName.innerHTML = `<input id="editName" type="text" value=${name.innerText}>`;
      let editPhone = document.createElement("input");
      editPhone.innerHTML = phone;
      let editEmail = document.createElement("input");
      editEmail.iinnerHTML = email;

      editForm.appendChild(editName);
      editForm.appendChild(editPhone);
      editForm.appendChild(editEmail);
      listData.appendChild(editForm);
      console.log(listData);*/

      editElement.innerHTML = '<img src="./icons8-tick-box-24.png" alt="">';

      name.innerHTML = `<input id="editName" type="text" value=${name.innerText}>`;
      phone.innerHTML = `<input id="editPhone" type="text" value=${phone.innerText}>`;
      email.innerHTML = `<input id="editEmail" type="email" value=${email.innerText}>`;

      isEdit = false;
    } else {
      editElement.innerHTML = '<img src="./icons8-edit-30.png" alt="edit">';

      let nameEdit = document.getElementById("editName").value;
      name.innerHTML = nameEdit;
      let phoneEdit = document.getElementById("editPhone").value;
      phone.innerHTML = phoneEdit;
      let emailEdit = document.getElementById("editEmail").value;
      email.innerHTML = emailEdit;
      isEdit = true;
    }
  });

  data.appendChild(editElement);

  //delete button
  let delButton = document.createElement("td");
  delButton.classList.add("del"); //加入class標籤
  delButton.innerHTML = '<img src="./icons8-trash-can-24.png" alt="trash">';
  delButton.addEventListener("click", (e) => {
    // let delBtn = e.target.parentElement; ->會有bug
    let delAll = e.currentTarget.parentElement; //綁定在父層
    delAll.remove();
  });
  data.appendChild(delButton);

  nameElement.value = "";
  phoneElement.value = "";
  emailElement.value = "";
  listData.appendChild(data);
});
