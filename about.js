
let about = document.createElement('div');
about.style.width="100%";
about.style.height="100vh";
about.style.display="flex";
about.style.textAlign="center";
about.style.flexDirection="column";
about.style.justifyContent="center";
about.style.background = "#fcf6f5ff";
about.style.marginTop="0px";
about.setAttribute('id',"about");



let heading = document.createElement('h1');
heading.innerHTML = "About Me";
heading.style.fontSize="3rem";
heading.style.paddingTop ="40px";
heading.style.textAlign ="center";
heading.style.color="#2BAE66FF";




let content = document.createElement('p');
content.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
content.style.fontSize = "16px";//1.10rem
content.style.fontFamily = "arial";
content.style.padding="15px 20px 20px 20px";
content.style.lineHeight ="1.25rem";
content.style.wordSpacing="wrap";
content.style.textAlign="center";
content.style.overflow="hidden";


function btn(text,urls){
    let btn = document.createElement('a');
    btn.innerText = text;
    btn.style.width="180px";
    btn.style.height="40px";
    btn.style.textAlign ="center";
    btn.style.padding = "10px 5px";
    btn.href = urls;
    btn.style.fontSize="1rem";
    btn.style.marginTop="12px";
    btn.style.backgroundColor="#2BAE66FF";
    btn.style.color="#fff";
    btn.style.cursor ="pointer";
    btn.style.borderRadius ="5px";
    
    btn.style.textDecoration ="none";
    btn.target ="blank";
    return btn;
}

function buttonDiv(){
    let div = document.createElement('section');
    div.style.color="#fcf6f5ff";
    div.style.display="flex";
    // div.style.flexDirection="column";
    div.style.flexWrap="wrap";
    div.style.justifyContent="space-evenly";
    // div.style.justifyContent="center";
    // div.style.alignItems="center";
    div.style.marginTop="10px";

   
    let linkedBtn = btn("CheckOut My LinkedIn","https://www.linkedin.com/feed/");
    let gitBtn = btn("CheckOut My Git","https://github.com/");
   
    let resume = btn("My Resume","files/Rohit's Resume.pdf");

    div.appendChild(linkedBtn);
    div.appendChild(gitBtn);
    div.appendChild(resume);
    return div;
}

let btns= buttonDiv();





about.appendChild(heading);
about.appendChild(content);
about.appendChild(btns);


document.body.append(about);





















/*errors*/

 // let linkedBtn = document.createElement('button');
    // linkedBtn.innerHTML = "<a>CheckOut My LinkedIn</a>";
    // linkedBtn.style.padding="5px 10px";
    // linkedBtn.style.backgroundColor="#2BAE66FF";
    // linkedBtn.style.fontSize="1rem";
    // linkedBtn.style.color="#fcf6f5ff";

    // linkedBtn.style.cursor="pointer";
    // linkedBtn.style.border="none";
    // linkedBtn.style.borderRadius="5px";

      // let gitBtn = document.createElement('button');
    // gitBtn.innerText = "CheckOut My Git ";
    // gitBtn.style.padding="5px 10px";
    // gitBtn.style.backgroundColor="#2BAE66FF";
    // gitBtn.style.fontSize="1rem";
    // gitBtn.style.color="#fcf6f5ff";

    // gitBtn.style.cursor="pointer";
    // gitBtn.style.border="none";
    // gitBtn.style.borderRadius="5px";