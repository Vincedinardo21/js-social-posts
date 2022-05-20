let myContainer = document.getElementById("container");

posts.forEach((element) => {
    console.log(element);
    let myPost = document.createElement("div");
    let myPostHeader = document.createElement("div");
    let myPostMeta = document.createElement("div");

    let myPostMetaIcon = document.createElement("div");

    // Meta Data Div
    let myPostMetaData = document.createElement("div");
    // Nome autore e time
    let authorName = document.createElement("div");
    authorName.append(element.author.name);
    //let myPostMetaAuthor = document.createElement("div");
    let myPostMetaTime = document.createElement("div");

    // Creo l'immagine
    let myImg = document.createElement("img");
    myImg.src = element.media;
   
    // Creo la concatenazione di div
    myPost.classList.add("post");
    myContainer.append(myPost);
    myPostHeader.classList.add("post__header");
    myPost.append(myPostHeader);
    myPostMeta.classList.add("post-meta");
    myPostHeader.append(myPostMeta);
    myPostMetaIcon.classList.add("post-meta__icon");
 
    myPostMeta.append(myPostMetaIcon);
    myPostMetaData.classList.add("post-meta__data");
    myPostMeta.append(myPostMetaData);
    authorName.classList.add("post-meta__author");
    myPostMetaData.append(authorName);
    myPostMetaData.append(myPostMetaTime);
    

    myImg.classList.add("profile-pic");
    myPostMetaIcon.append(myImg);
});


