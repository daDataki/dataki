const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: "smooth" });
};

export const menuOptions = [
    { name: "Home", path: "/", menuIcon: "/images-proyecto/menuBlack.png" },
   // { name: "About", path: "/about", menuIcon: "/images-proyecto/menuWhite.png" },
    {
        name: "Work",
        path: "/#work",
        menuIcon: "/images-proyecto/menuBlack.png",
        subMenu: [
            { name: "vml", path: "/vml" },
            { name: "aon", path: "/aon" },
            { name: "vida y estilo", path: "/vida-estilo" },
            { name: "daytona", path: "/daytona" },
            { name: "claro", path: "/claro" }
        ]
    },
    { name: "Services", path: "/services", menuIcon: "/images-proyecto/menuWhite.png" },
    { name: "Contact", path: "/#footer", onClick: scrollToFooter, menuIcon: "/images-proyecto/menuWhite.png" }

];