function DarkModeToggle(){
    let body = document.body;
    body.classList.toggle("light");
}

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true
  });