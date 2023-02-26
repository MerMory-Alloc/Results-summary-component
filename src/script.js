
let thems_list=document.querySelectorAll(".theme");
let theme_title;
let theme_result;

fetch('../data.json')
    .then((response) => response.json())
    .then((json) => {
      for(let i=0;i<thems_list.length;i++){
        theme_title=thems_list[i].querySelector(".theme_title");
        theme_result=thems_list[i].querySelector(".note");
        theme_image=thems_list[i].querySelector(".icon");

        theme_title.innerHTML = json[i].category ;
        theme_result.innerHTML=json[i].score;
        theme_image.src=json[i].icon;
      }

    });
