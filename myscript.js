let myContainer = document.getElementById("container");

posts.forEach((element) => {
    console.log(element);
    let myPost = document.createElement("div");
    let myPostHeader = document.createElement("div");
    let myPostMeta = document.createElement("div");
    let myPostMetaIcon = document.createElement("div");

    let myImg = document.createElement("img");
    myImg.src = element.author.image;
    

    myPost.classList.add("post");
    myContainer.append(myPost);
    myPostHeader.classList.add("post__header");
    myPost.append(myPostHeader);
    myPostMeta.classList.add("post-meta");
    myPostHeader.append(myPostMeta);
    myPostMetaIcon.classList.add("post-meta__icon");
    myPostMeta.append(myPostMetaIcon);
    myPostMetaIcon.append(myImg);
});


