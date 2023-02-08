

let skills = document.createElement('div');
skills.style.width="100%";
skills.style.height="100vh";
skills.style.backgroundColor="#101820FF";
skills.style.fontFamily="arial";
skills.style.display="flex";
skills.style.flexDirection="column";
skills.setAttribute('id',"skills");
// skills.style.textAlign="center";
// skills.style.justifyContent="center";

function skillsHeading(text)
{
    let skillHeading = document.createElement('h1');
    skillHeading.innerHTML=text;
    skillHeading.style.color="#FEE715FF";
    skillHeading.style.fontSize="54px";
    skillHeading.style.textAlign="center";
    skillHeading.style.paddingTop="150px";
    return skillHeading;
}


function skillSection2(){
    let skillSection = document.createElement('div');
    skillSection.style.width="100%";
    skillSection.style.padding="100px 15px 0 15px";
    skillSection.style.display="flex";
    skillSection.style.textAlign="center";
    skillSection.style.justifyContent="space-between";

    var skillOne = document.createElement('div');
				  
    skillOne.style.width = "200px";
    skillOne.style.height = "200px";
    skillOne.innerHTML = "<img src='images/web-development.png' width='50%'><br><br><h3>Web Developement</h3><span style='font-size:11px;'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>";
    skillOne.style.color = "#FEE715FF";
    skillOne.style.paddingRight="5px";
    skillOne.style.fontFamily = "calibri";

    

     var skillTwo = document.createElement('div');
    skillTwo.style.width = "200px";
    skillTwo.style.height = "200px";
   skillTwo.innerHTML = "<img src='images/app-development.png' width='50%'><br><br><h3>APP Development</h3><span style='font-size:11px;'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>";
    skillTwo.style.color = "#FEE715FF";
    skillOne.style.paddingRight="5px";
    skillTwo.style.fontFamily = "calibri";

     var skillThree = document.createElement('div');
    skillThree.style.width = "200px";
    skillThree.style.height = "200px";
    skillThree.innerHTML = "<img src='images/system-design.png' width='50%'><br><br><h3>System Design</h3><span style='font-size:11px;'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>";
    skillThree.style.color = "#FEE715FF";
    skillOne.style.paddingRight="5px";
    skillThree.style.fontFamily = "calibri";


    skillSection.appendChild(skillOne);
    skillSection.appendChild(skillTwo);
    skillSection.appendChild(skillThree);

    return skillSection;
}



let skillHead = skillsHeading("My Skills");
skills.appendChild(skillHead);

let skillSectionSec=skillSection2();
skills.appendChild(skillSectionSec);

document.body.append(skills);