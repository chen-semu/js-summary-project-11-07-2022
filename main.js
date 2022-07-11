let basicApi = `https://my-json-server.typicode.com/Jeck99/fake-server/`;
async function forApi() {
  try {
    return await fetch(`${basicApi}devices`).then((result) => result.json());
  } catch (error) {}
}

// let theNum=0
function returnPhonesDivs() {
loading.innerHTML=`<img src="/pics/loading_gif.gif" class="img-fluid" alt="">
`
setTimeout(()=>{
  try {
    // forApi().then((res) => res.forEach((item) => console.log(item)));
    forApi().then((res) =>
      res.forEach(
        (item, index) =>
          (main_devices_web.innerHTML += `<div class="divs_phones" id="div_tab${index}"> ${runOnObject(
            item
          )}<button class="btn btn-warning" onclick="deleteDiv(div_tab${index})">delete object</button></div>`)
      )
    );
  } catch (error) {}
finally{
  loading.innerHTML=""
}
},2500)
}
forApi().then((res) => console.log(res));

let counter = 0;
function runOnObject(device) {


  let stringOfKeys = ``;
  for (let i in device) {
    if (i == "picture") {
      stringOfKeys = `<img class="img_for_tabs" src="../pics/phone_pic.jpg">
      ${stringOfKeys}`;
    } else if (i == "id") {
    }else if (i == "price"){
      stringOfKeys += `<p id="p_for_line_${i + counter}">
      Lowest ${i}: ${device[i]}$
      </p><p id="p_for_highest_${i + counter}">highest ${i}: ${parseInt(device[i])+8}$`;
    }
     else {
      stringOfKeys += `<p id="p_for_line_${i + counter}">
      ${i}: ${device[i]}
      </p>`;
    }
  }
  //   stringOfKeys += `<br>`;
  counter++;
  return stringOfKeys;
}
// returnPhonesDivs();

function deleteDiv(ThisDiv) {
  ThisDiv.style.display = "none";

}



function saveUsersAtTable() {
  usersTable.innerHTML += `<tr>
      <td>${inpt_FName.value}</td>
      <td>${inpt_LName.value}</td>
      <td>${inpt_Age.value}</td>
      <td>${inpt_Tel.value}</td>
      <td>${inpt_Pic.value}</td>
    </tr>`;
    inpt_FName.value=""
    inpt_LName.value=""
    inpt_Age.value=""
    inpt_Tel.value=""
    inpt_Pic.value=""
}
async function forUsersApi() {
  try {
    return await fetch(`${basicApi}users`).then((res) => res.json());
  } catch (error) {}
}
function printUsersToTable() {
  forUsersApi().then((res) => console.log(res));
  forUsersApi().then((res) =>
    res.forEach((item) => {
      usersTable.innerHTML += `<tr>
  <td>${item.name.first}</td>
  <td>${item.name.last}</td>
  <td>${item.age}</td>
  <td>${item.phone}</td>
  <td><img src="${item.picture}"></td>
</tr>`;
    })
  );
}
// }
printUsersToTable();
function newObject() {
    
    let newMovieObject = {
      brand: tab_brand.value,
      color: tab_phoneColor.value,
      ceatedAt:new Date,
      isAvailable: tab_phoneAvailability.value,
      picture: tab_img.value,
      price: tab_price.value,
      ram: tab_ram.value,
    };
    pushNewObjectToApiArray(newMovieObject)
  } 

async function pushNewObjectToApiArray(obj) {
  try {
    await fetch(`${basicApi}devices`, {
      method: `POST`,
      body: JSON.stringify(obj),
      headers: { "content-type": "application/json" },
    }).then(response=>response.json());
  } catch (error) {}
}
function sendMsgToEmail() {
  btn_email.innerHTML=`<a href=https://mail.google.com/mail/u/0/?fs=1&to=${inp_Email.value}&su=${inp_Name.value}&body=${the_message.value+inp_Phone.value}&bcc=&tf=cm" target=_blank>click to send</a>`
}
