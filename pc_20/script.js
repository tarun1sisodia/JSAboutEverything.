// PC 20 JavaScript file
console.log("Hello from PC 20!");

// Your code here

const requestUrl = 'https://api.github.com/users/tarun1coco11';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (this.readyState === 4) {
        // const data = this.responseText; //how to fetch the data. by default string
        // console.log(typeof data); //by default we are getting String type of data. 

        const data = JSON.parse(this.responseText); //Converting the Data into JSON.
        console.log(data); //Print whole json

        console.log(data.following);
        const avatar = data.avatar_url;
        console.log(avatar);
        const imge = document.createElement("div");
        const img = document.createElement('img');
        img.setAttribute('src', avatar);
        imge.appendChild(img);
        document.body.appendChild(imge);


        const Text = document.createElement('p');
        Text.textContent = data.following;
        imge.appendChild(Text)  

    }
}

xhr.send();
