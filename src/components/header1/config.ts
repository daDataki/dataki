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
            { name: "aon", path: "/aon" },
            { name: "cis latam", path: "/cis-latam" },
            { name: "milaires", path: "/milaires" },
            { name: "daytona", path: "/daytona" },
            { name: "vida & estilo", path: "/vida-estilo" },
            { name: "vml", path: "/vml" },
            { name: "claro", path: "/claro" }, 
            { name: "tango", path: "/tango" }, 
        ]
    },
    { name: "Services", path: "/services", menuIcon: "/images-proyecto/menuWhite.png" },
    { name: "Contact", path: "/#footer", onClick: scrollToFooter, menuIcon: "/images-proyecto/menuWhite.png" }

];