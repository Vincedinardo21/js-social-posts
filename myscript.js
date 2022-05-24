// let myContainer = document.getElementById("container");

// posts.forEach((element) => {
//     console.log(element);
//     let myPost = document.createElement("div");
//     let myPostHeader = document.createElement("div");
//     let myPostMeta = document.createElement("div");

//     let myPostMetaIcon = document.createElement("div");

//     // Meta Data Div
//     let myPostMetaData = document.createElement("div");
//     // Nome autore e time
//     let authorName = document.createElement("div");
//     authorName.append(element.author.name);
//     let myPostMetaTime = document.createElement("div");
//     myPostMetaTime.append(element.created);

//     // Icona
//     let myImg = document.createElement("img");
//     myImg.src = element.media;

//     // Testo
//    let myPostText = document.createElement("div");
//    myPostText.classList.add("post__text");
//    myPostText.append(element.content);

//     // Immagine
//     let myPostImage = document.createElement("div");
//     myPostImage.classList.add("post__image");
//     let myImgBig = document.createElement("img");
//     myImgBig.src = element.author.image;

//     // Creo la concatenazione di div
//     myPost.classList.add("post");
//     myContainer.append(myPost);
//     myPostHeader.classList.add("post__header");

//     myPost.append(myPostHeader);
//     myPost.append(myPostText);
//     myPost.append(myPostImage);
//     myPostImage.append(myImgBig);

//     myPostMeta.classList.add("post-meta");
//     myPostHeader.append(myPostMeta);
//     myPostMetaIcon.classList.add("post-meta__icon");
 
//     myPostMeta.append(myPostMetaIcon);
//     myPostMetaData.classList.add("post-meta__data");
//     myPostMeta.append(myPostMetaData);
//     authorName.classList.add("post-meta__author");
//     myPostMetaData.append(authorName);
//     myPostMetaData.append(myPostMetaTime);
    

//     myImg.classList.add("profile-pic");
//     myPostMetaIcon.append(myImg);
// });

// Versione corretta
let myContainer = document.getElementById("container");

posts.forEach((element) => {
    myContainer.innerHTML += 
    `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${element.media}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${element.author.name}</div>
                <div class="post-meta__time">${element.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${element.content}</div>
    <div class="post__image">
        <img src="${element.author.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
            </div>
        </div> 
    </div>            
</div>`
});

// Like cliccando sul bottone
let likeButton = document.querySelectorAll(".js-like-button");

likeButton.forEach((button, index) => {
    button.addEventListener("click", 
    function(newelement){
        newelement.preventDefault();
        button.classList.toggle("like-button--liked");
        if(button.classList.contains("like-button--liked")){
            posts[index].likes++;
        } else {
            posts[index].likes--;
        }
        
        let likeCount = document.getElementById("like-counter-" + posts[index].id);
        likeCount.innerText = posts[index].likes;
    }
    );
});

