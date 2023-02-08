const navBar = document.createElement('nav');
navBar.style.width = "100%";
navBar.style.height = "60px";
navBar.style.background = "linear-gradient(#e66465, #9198e5)";
navBar.style.display ="flex";
navBar.style.justifyContent="space-between";
navBar.style.flexWrap="wrap";
navBar.style.position="fixed";


function headerSection1(){
    let section1 = document.createElement('section');
    section1.setAttribute('id',"logo");
    
    let item = document.createElement('a');
    item.innerHTML = "<h1>PortFolio</h1>";
    item.style.color = "#fff";
    
    item.style.fontFamily ="monoto";
    // item.style.padding = "2px";
    item.style.fontSize="2.4rem";
    item.style.textAlign ="start";
    item.style.cursor ="pointer";
    item.href = "#home";
    item.style.textDecoration="none";
    section1.appendChild(item);
    return section1;
}

let firtElement = headerSection1();
firtElement.style.padding=" 2px 5px";
navBar.appendChild(firtElement);




function navBarItems(text){
    let item = document.createElement('a');
    item.innerText = text;
    if(text=="About")
    {
        item.href="#about";
    }
    else if(text=="Skills"){
        item.href="#skills"
    }
    else{
    item.href ="#contact";
    }
    item.style.textDecoration ="none";
    item.style.color="#000";
    item.style.fontSize="1.7em";
    item.style.margin = "15px";
    return item;
}

function headerSection2(){
    let section2 = document.createElement('section');
    section2.style.paddingTop ="15px";
    section2.style.paddingRight="15px";
    

    let about = navBarItems('About');
    let skills = navBarItems('Skills');
    let contactUs = navBarItems('Contact');

    section2.appendChild(about);
    section2.appendChild(skills);
    section2.appendChild(contactUs);

    return section2;
}

let secondElement = headerSection2();
navBar.appendChild(secondElement);

document.body.append(navBar);