const showMenu = () => {
    const nav = document.getElementById("mobileNav");
    console.log("aa");
    if (nav.className === "row mobileNav") {
        nav.className += " show";
    } else {
        nav.className = "row mobileNav";
    }
}