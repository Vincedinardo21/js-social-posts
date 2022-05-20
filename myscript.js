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
    let myPostMetaTime = document.createElement("div");
    myPostMetaTime.append(element.created);

    // Icona
    let myImg = document.createElement("img");
    myImg.src = element.media;

    // Testo
   let myPostText = document.createElement("div");
   myPostText.classList.add("post__text");
   myPostText.append(element.content);

    // Immagine
    let myPostImage = document.createElement("div");
    myPostImage.classList.add("post__image");
    let myImgBig = document.createElement("img");
    myImgBig.src = element.author.image;

    // Creo la concatenazione di div
    myPost.classList.add("post");
    myContainer.append(myPost);
    myPostHeader.classList.add("post__header");

    myPost.append(myPostHeader);
    myPost.append(myPostText);
    myPost.append(myPostImage);
    myPostImage.append(myImgBig);

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


