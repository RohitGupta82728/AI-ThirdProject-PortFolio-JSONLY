//Powdered Sugar (#F1F4FFFF) and Silver (#A2A2A1FF)



let contactUS = document.createElement('div');
contactUS.style.width="100%";
contactUS.style.height="100vh";
contactUS.style.backgroundColor="#F1F4FFFF";
contactUS.style.fontFamily="arial";
contactUS.setAttribute('id',"contact");


function contactUSHeading(text){
    let heading = document.createElement('h1');
    heading.innerHTML = text;
    heading.style.fontSize="48px";
    heading.style.paddingTop="70px";
    heading.style.textAlign = "center";
    return heading;
}

function container(){
    let contactContainer = document.createElement('div');
    contactContainer.style.width="100%";
    contactContainer.style.display="flex";
    contactContainer.style.flexDirection="column";
    contactContainer.style.justifyContent="space-evenly";
    contactContainer.style.paddingTop="50px";
    contactContainer.style.alignItems="center";
    
    let inputName = document.createElement('input');
    inputName.setAttribute('type',"text");
    inputName.style.width="360px";
    inputName.style.marginTop="10px";
    inputName.style.padding="10px";
    inputName.style.border ="none";
    inputName.style.borderRadius ="5px";
    inputName.placeholder ="Name";
    inputName.required='true';

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('type',"mail");
    inputEmail.style.width="360px";
    inputEmail.style.marginTop="10px";
    inputEmail.style.padding="10px";
    inputEmail.style.border ="none";
    inputEmail.style.borderRadius ="5px";
    inputEmail.placeholder ="Email";
    inputEmail.required='true';

    let inputSubject = document.createElement('input');
    inputSubject.setAttribute('type',"text");
    inputSubject.style.width="360px";
    inputSubject.style.marginTop="10px";
    inputSubject.style.padding="10px";
    inputSubject.style.border ="none";
    inputSubject.style.borderRadius ="5px";
    inputSubject.placeholder ="Subject";
    inputSubject.required='true';

    let inputProject = document.createElement('textarea');
    inputProject.style.width="360px";
    inputProject.style.height="100px";
    inputProject.style.resize="none";
    inputProject.style.marginTop="10px";
    inputProject.style.padding="10px";
    inputProject.style.border ="none";
    inputProject.style.borderRadius ="5px";
    inputProject.placeholder ="Project Details";
    inputProject.required='true';

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('type',"submit");
    submitBtn.innerText = "Submit";
    submitBtn.style.width="100px";
    submitBtn.style.marginTop ="10px";
    submitBtn.style.backgroundColor="#2BAE66FF";
    submitBtn.style.color="#fff";
    submitBtn.style.border="none";
    submitBtn.style.padding="5px 10px";
    submitBtn.style.cursor ="pointer";
    submitBtn.style.letterSpacing="2px";
    submitBtn.style.borderRadius="5px";

    submitBtn.addEventListener('click',()=>{
        if(inputName.value==""||inputEmail.value==""||inputSubject.value==""||inputProject.value==""){
            alert("Please Enter All Details");
        }
        else{
            alert("Thanks i'll contact you soon")
            inputName.value="";
            inputEmail.value="";
            inputSubject.value="";
            inputProject.value="";

        }
    })


    contactContainer.appendChild(inputName);
    contactContainer.appendChild(inputEmail);
    contactContainer.appendChild(inputSubject);
    contactContainer.appendChild(inputProject);
    contactContainer.appendChild(submitBtn);
    return contactContainer;
}


let contactHeading = contactUSHeading("Contact Me");
contactUS.appendChild(contactHeading);

let containerItems = container();
contactUS.appendChild(containerItems);

document.body.append(contactUS);