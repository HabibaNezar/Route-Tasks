var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var formInput = [];

// regex

var siteNameRegex = /^.{3,}$/;
var emailRegex = /^(ftp|http|https):\/\/[^ "]+$/;

if (localStorage.getItem("formInput") != null) {
  formInput = JSON.parse(localStorage.getItem("formInput"));
  displaySiteInfomation();
}

function addToArray() {
  if (
    isValid(siteNameRegex, siteNameInput) &&
    isValid(emailRegex, siteUrlInput)
  ) {
    // object carry form inputs
    var siteInformation = {
      siteName: siteNameInput.value,
      siteUrl: siteUrlInput.value,
    };
    formInput.push(siteInformation);
    localStorage.setItem("formInput", JSON.stringify(formInput));
    displaySiteInfomation();
    resetForm();
    console.log(formInput);
  }
}

function displaySiteInfomation() {
  var displayContent = ``;
  for (var i = 0; i < formInput.length; i++) {
    displayContent += `<div class="col-3">
                <div>
                    <p>${i + 1}</p>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <p>${formInput[i].siteName}</p>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <a class="linkk " href="${
                      formInput[i].siteUrl
                    }" target="_blank">
                        <button class="btn visit-button">Visit</button>
                    </a>
                </div>
            </div>
            <div class="col-3">
                <div>
                    <button onclick=" DeleteSite(${i})" class="btn delete-button text-white">Delete</button>
                </div>
            </div>
            <hr class="border-top border-black border-1 m-1">`;
  }
  formContainer.innerHTML = displayContent;
}

function DeleteSite(index) {
  formInput.splice(index, 1);
  localStorage.setItem("formInput", JSON.stringify(formInput));
  displaySiteInfomation();
}

function resetForm() {
  siteNameInput.value = null;
  siteUrlInput.value = null;
  siteNameInput.classList.remove("is-valid");
  siteUrlInput.classList.remove("is-valid");
}

function isValid(regex, element) {
  if (regex.test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    return false;
  }
}
