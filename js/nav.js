
const tabs=Array.from(document.querySelectorAll(".page a"))
const attr= document.querySelector("section")
const currentId= attr.getAttribute("id")

        switch(currentId)
        {
            case "Home":
                tabs[0].classList.add("active2");
                break;
            case "About":
                tabs[1].classList.add("active2");
            break;
            case "contact":
                
            break;
        }   
    

var cartona=""
cartona+=`<nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top pt-3 navbar navbar-default navbar-static-top custom">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="../images/main logo.png" alt="" width="25" height="30" class="d-inline-block ms-5 align-text-top">
    </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav justify-content-between me-5 position-absolute">
      <li class="nav-item page ">
        <a class="nav-link " aria-current="page" href="../html/index.html" id="Home">Home</a>
      </li>
      <li class="nav-item page">
        <a class="nav-link" href="../html/About.html" id="About">About</a>
      </li>
      <li class="nav-item page">
        <a class="nav-link" href="../html/Product.html" id="Products">Products</a>
      </li>
      <li class="nav-item page">
        <a class="nav-link" href="../html/Help.html" id="Help">Help</a>
      </li>
      <li class="nav-item page">
        <a class="nav-link" href="../html/login.html" id="login">login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../html/signUp.html">
            <img src="../images/Join icon.png"width="25" height="20" alt="">
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="../html/buy.html">
            <img src="../images/cart icon.png"width="30" height="20" alt="">
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../images/England flag.png" width="30" height="18" alt="">
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="#"><img src="../images/England flag.png" width="40" height="24" alt=""></a></li>
          <li><a class="dropdown-item" href="#"><img src="../images/England flag.png" width="40" height="24" alt=""></a></li>
          <li><a class="dropdown-item" href="#"><img src="../images/England flag.png" width="40" height="24" alt=""></a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>    `
document.getElementById("nav").innerHTML=cartona

