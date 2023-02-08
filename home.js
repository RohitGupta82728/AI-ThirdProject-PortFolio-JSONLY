//Hex codes: Beige #DDC3A5, Black-brown #201E20, Tan #E0A96D

let home = document.createElement('div');
home.style.width="100%";
home.style.height="100vh";
home.style.background="url(https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1060&t=st=1675806030~exp=1675806630~hmac=d116bcda5f047b417cc7b32e172d2515a58dfd564f0961fdb395b9f3dc0e04e3)";
home.setAttribute('id',"home");
home.style.display="flex";
home.style.flexDirection="column";
home.style.alignItems="center";
home.style.justifyContent="center";


let profileImage = document.createElement('img');
profileImage.src = "images/profileImage.png";
profileImage.style.backgroundColor="black";
profileImage.style.width="250px";
profileImage.style.height="250px";
profileImage.style.objectFit="contain";
profileImage.style.borderRadius="50%";
profileImage.style.marginBottom="50px";



let profileIntro = document.createElement('h1');
profileIntro.innerHTML="<h2>Hi' its me <span style='color:#F2AA4CFF;'>Rohit Gupta</span><br><h1> Internee At AIThinker's</h1></h2>"
profileIntro.style.paddingTop="10px";
profileIntro.style.textAlign="center";


home.appendChild(profileImage);
home.appendChild(profileIntro);

document.body.append(home);