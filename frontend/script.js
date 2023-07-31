function createCard(obj) {
  return `
    <div class="card">
        <div class="cardImgContainer">
            <img src="${obj.image}" alt="" />
        </div>
        <div class="cardInfoContainer">
            <div class="ratingContainer">
                <span class="rating">${obj.rating} <img src="./images/rating.png" alt="" /></span>
                <span class="cardReviews">${obj.reviews} reviews</span>
            </div>
            <p class="title">${obj.name}</p>
            <div class="priceContainer">
                <span>₹${obj.discountedPrice}</span>
                <span>₹${obj.price}</span>
                <span>${obj.discount}% off</span>
            </div>
            <div class="premiumContainer">
                <img src="./images/star.png" width="18px" alt="" />
                    <span>₹${obj.premiumPrice}</span>
                <span>for Premium Member</span>
            </div>
            <div class="addToCartBtnContainer" data-id="${obj._id}" onClick="addToCart(this)">
                <span>Add To Cart</span>
            </div>
        </div>
    </div>
    `;
}

function priceSlashShow() {
  let arr = [
    {
      _id: "63f7c2fd7517d84229ed86b7",
      name: "MuscleBlaze Ayurveda for Performance - MuscleHerb with",
      price: 299,
      image:
        "https://img8.hkrtcdn.com/13504/prd_1350387-MuscleBlaze-Ayurveda-for-Performance-MuscleHerb-with-Ashwagandha-Shatavari-Safed-Musli-30-tablets-Unflavoured_o.jpg",
      rating: 4.8,
      reviews: 983,
      discount: 26,
      discountedPrice: 247,
      premiumPrice: 237,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86bd",
      name: "MB Fuel One Caffeine- 0.16 lb Fruit Punch",
      price: 335,
      image:
        "https://img4.hkrtcdn.com/12570/prd_1256973-MB-Fuel-One-Caffeine-75-g-Fruit-Punch_o.jpg",
      rating: 4.6,
      reviews: 312,
      discount: 21,
      discountedPrice: 272,
      premiumPrice: 262,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86b6",
      name: "MuscleBlaze Ayurveda for Performance - MuscleHerb with",
      price: 449,
      image:
        "https://img6.hkrtcdn.com/13504/prd_1350365-MuscleBlaze-Ayurveda-for-Performance-MuscleHerb-with-Ashwagandha-Shatavari-Safed-Musli-60-tablets-Unflavoured_o.jpg",
      rating: 4.8,
      reviews: 226,
      discount: 9,
      discountedPrice: 413,
      premiumPrice: 393,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86be",
      name: "bGREEN Pre-sports Endurance Mix by MuscleBlaze- 0.55 lb Stra",
      price: 532,
      image:
        "https://img2.hkrtcdn.com/14830/prd_1482931-bGREEN-UpBeet-Pre-Workout-by-MuscleBlaze-0.55-lb-Strawberry_o.jpg",
      rating: 3.8,
      reviews: 792,
      discount: 28,
      discountedPrice: 392,
      premiumPrice: 377,
      __v: 0,
    },
  ];

  arr.forEach((element) => {
    element.name = element.name.substring(0, 60);
    priceSlashBox.innerHTML = priceSlashBox.innerHTML + createCard(element);
  });
}
priceSlashShow();
function topDeals() {
  let arr = [
    {
      _id: "63f7c2fd7517d84229ed86c5",
      name: "MuscleBlaze Test Pro (Natural Testosterone Booster)- 60 caps",
      price: 849,
      image:
        "https://img6.hkrtcdn.com/6362/prd_636155-MuscleBlaze-Test-Pro-Natural-Testosterone-Booster-60-capsules-Unflavoured_o.jpg",
      rating: 4.8,
      reviews: 857,
      discount: 28,
      discountedPrice: 625,
      premiumPrice: 595,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86ad",
      name: "MuscleBlaze L-Carnitine L-Tartrate- 120 capsules Unflavoured",
      price: 1175,
      image:
        "https://img2.hkrtcdn.com/10242/prd_1024161-MuscleBlaze-LCarnitine-LTartrate-120-capsules-Unflavoured_o.jpg",
      rating: 4.7,
      reviews: 707,
      discount: 28,
      discountedPrice: 867,
      premiumPrice: 827,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86be",
      name: "bGREEN Pre-sports Endurance Mix by MuscleBlaze- 0.55 lb Stra",
      price: 532,
      image:
        "https://img2.hkrtcdn.com/14830/prd_1482931-bGREEN-UpBeet-Pre-Workout-by-MuscleBlaze-0.55-lb-Strawberry_o.jpg",
      rating: 3.8,
      reviews: 792,
      discount: 28,
      discountedPrice: 392,
      premiumPrice: 377,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86aa",
      name: "HealthKart 100% Plant Based Protein- Cardamom 2.2 lb",
      price: 999,
      image: "https://img10.hkrtcdn.com/2413/prd_241239_c_s.jpg",
      rating: 4.2,
      reviews: 757,
      discount: 28,
      discountedPrice: 747,
      premiumPrice: 712,
      __v: 0,
    },
  ];
  arr.forEach((element) => {
    element.name = element.name.substring(0, 60);
    top_deals.innerHTML = top_deals.innerHTML + createCard(element);
  });
}
topDeals();
function pickDayshow() {
  let arr = [
    {
      _id: "63f7c2fd7517d84229ed86a7",
      name: "MB Fuel One Whey Protein Immunity+- 2.2 lb Chocolate",
      price: 5699,
      image:
        "https://img6.hkrtcdn.com/14889/prd_1488805-MB-Fuel-One-Whey-Protein-Immunity-8.8-lb-Chocolate_c_s.jpg",
      rating: 4.5,
      reviews: 119,
      discount: 23,
      discountedPrice: 4411,
      premiumPrice: 4191,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86a3",
      name: "Isopure Zero Carb Protein Powder- 3 lb Cookies & Cream",
      price: 5709,
      image:
        "https://img2.hkrtcdn.com/12608/prd_1260761-Isopure-Zero-Carb-Protein-Powder-3-lb-Cookies-Cream_c_s.jpg",
      rating: 4.5,
      reviews: 130,
      discount: 17,
      discountedPrice: 4740,
      premiumPrice: 4505,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86ae",
      name: "MuscleBlaze BCAA Gold 8:1:1- 0.99 lb 30 Servings Raspberry L",
      price: 1949,
      image:
        "https://img10.hkrtcdn.com/9815/prd_981429-MuscleBlaze-BCAA-Gold-811-0.99-lb-Raspberry-Lemonade_o.jpg",
      rating: 4.6,
      reviews: 142,
      discount: 18,
      discountedPrice: 1607,
      premiumPrice: 1527,
      __v: 0,
    },
    {
      _id: "63f7c2fd7517d84229ed86a6",
      name: "HealthKart 100% Plant Based Protein- Cardamom 2.2 lb",
      price: 999,
      image:
        "https://img2.hkrtcdn.com/13488/prd_1348781-MB-Fuel-One-Whey-Protein-Immunity-2.2-lb-Chocolate_c_s.jpg",
      rating: 4.2,
      reviews: 211,
      discount: 25,
      discountedPrice: 774,
      premiumPrice: 739,
      __v: 0,
    },
  ];
  arr.forEach((element) => {
    element.name = element.name.substring(0, 60);
    pick_of_the_day.innerHTML = pick_of_the_day.innerHTML + createCard(element);
  });
}
pickDayshow();
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
let toastMixin = Swal.mixin({
  toast: true,
  icon: "success",
  title: "General Title",
  position: "top-right",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function showCartCount() {
  let cart_count = document.getElementById("cart_count");
  cart_count.innerText = JSON.parse(localStorage.getItem("cart")).length || 0;
}
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
if (localStorage.getItem("token") != null) {
  let loginBtn = document.querySelector("#login_container > button");
  loginBtn.innerText = "Logout";
  loginBtn.setAttribute("onclick", "logoutUser()");
  showCartCount();
}

function showLogin() {
  let wrapper = document.querySelector(".wrapper-container");
  wrapper.style.display = "flex";
}

function hideLogin() {
  let wrapper = document.querySelector(".wrapper-container");
  wrapper.style.display = "none";
}

// signup working fine

function signupUser(e) {
  e.preventDefault();
  let obj = document.querySelectorAll(".signup input");
  const payload = {
    name: obj[0].value,
    email: obj[1].value,
    password: obj[2].value,
  };
  if (payload.name && payload.email && payload.password) {
    fetch("https://healthkartapi.onrender.com/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        toastMixin.fire({
          animation: true,
          title: res.msg,
        });
        obj[0].value = "";
        obj[1].value = "";
        obj[2].value = "";
        hideLogin();
      })
      .catch((err) => alert("Something went wrong"));
  }
}
//login is also working fine but check once for setCart Count
function loginUser(e) {
  e.preventDefault();
  let obj = document.querySelectorAll(".login input");
  console.log(obj);
  const payload = {
    email: obj[0].value,
    password: obj[1].value,
  };
  if (payload.email !== "" && payload.password !== "") {
    fetch("https://healthkartapi.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "User Successfully logged in") {
          localStorage.setItem("token", res.token);
          let loginBtn = document.querySelector("#login_container > button");
          loginBtn.innerText = "Logout";
          loginBtn.setAttribute("onclick", "logoutUser()");
          obj[0].value = "";
          obj[1].value = "";
          toastMixin.fire({
            animation: true,
            title: res.msg,
          });
          localStorage.setItem("cart", JSON.stringify(res.user.carts));
          showCartCount();
          hideLogin();
        } else {
          toastMixin.fire({
            icon: "error",
            animation: true,
            title: "Wrong Credentials",
          });
        }
      });
  }
}

function logoutUser() {
  toastMixin.fire({
    animation: true,
    title: "User logged out!",
  });
  localStorage.removeItem("token");
  let loginBtn = document.querySelector("#login_container > button");
  loginBtn.innerText = "Login";
  loginBtn.setAttribute("onclick", "showLogin()");
  let cart_count = document.getElementById("cart_count");
  cart_count.innerText = 0;
}

//add to cart done
function addToCart(e) {
  const productId = e.getAttribute("data-id");
  fetch(
    `https://healthkartapi.onrender.com/users/addToCart?productId=${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.msg === "Login First!") {
        toastMixin.fire({
          title: response.msg,
          icon: "error",
        });
      } else if (response.msg === "Product Already in cart!") {
        Swal.fire({
          toast: true,
          icon: "warning",
          title: response.msg,

          position: "bottom",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      } else {
        Swal.fire({
          toast: true,
          icon: "success",
          title: response.msg,

          position: "bottom",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        localStorage.setItem("cart", JSON.stringify(response.user.carts));
        showCartCount();
      }
    })
    .catch((error) => alert("Login First!"));
}

function scrollFunction1() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
