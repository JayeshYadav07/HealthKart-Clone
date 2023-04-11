const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
var toastMixin = Swal.mixin({
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
    fetch("https://wild-gold-calf-robe.cyclic.app/users/cart", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let cart_count = document.getElementById("cart_count");
            cart_count.innerText = data.length;
        });
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

function signupUser() {
    let obj = document.querySelectorAll(".signup input");
    const payload = {
        name: obj[0].value,
        email: obj[1].value,
        password: obj[2].value,
    };

    fetch("https://wild-gold-calf-robe.cyclic.app/users/register", {
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
        fetch("https://wild-gold-calf-robe.cyclic.app/users/login", {
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
                    let loginBtn = document.querySelector(
                        "#login_container > button"
                    );
                    loginBtn.innerText = "Logout";
                    loginBtn.setAttribute("onclick", "logoutUser()");
                    obj[0].value = "";
                    obj[1].value = "";
                    toastMixin.fire({
                        animation: true,
                        title: res.msg,
                    });
                    showCartCount();
                    hideLogin();
                } else {
                    toastMixin.fire({
                        icon: "error",
                        animation: true,
                        title: "Wrong Credentials",
                    });
                }
            })
            .catch((err) => alert("Wrong Credentials"));
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
async function addToCart(e) {
    const productId = e.getAttribute("data-id");
    await fetch(
        `https://wild-gold-calf-robe.cyclic.app/users/addToCart?productId=${productId}`,
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
                showCartCount();
            }
        })
        .catch((error) => alert("Login First!"));
}

function scrollFunction1() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
