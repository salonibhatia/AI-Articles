 for(let post of articles){
       let postHTML= `
           <div class="post">
                        <img src="${post.image}">
                          <h3> ${post.title}</h3>
                         <p> ${post.description}</p>
                          <a href="${post.link}">
                           Read more... </a>
       </div>
     `;
      $(".container").append(postHTML);
}
      function listView(){
        $(".container").addClass("list-view");
        $(".active").removeClass("active");
        $(event.currentTarget).addClass("active");
      }
      
       function gridView(){
        $(".container").removeClass("list-view");
           $(".active").removeClass("active");
        $(event.currentTarget).addClass("active");
      }
