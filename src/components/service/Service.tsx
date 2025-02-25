import './Service.css';

const numberServicie = [1, 2, 3, 4, 5, 6];
const nameServicie = ["Strategy", "Design", "Content", "Media", "Data", "Technology"];

const descriptionService: Record<string, string[]> = {
    Strategy: [
        "Go-to-market.",
        "Growth.",
        "Digital marketing.",
        "Product.",
        "Brand positioning.",
        "Digital transformation consulting.",
        "Consumer research.",
    ],
    Design: [
        "Graphic design for online and offline media.",
        "UX/UI design for websites and apps.",
        "Custom branding and visual identities.",
        "Social media content creation.",
        "Packaging.",
    ],
    Technology: [
        "Front-end & back-end development.",
        "Platform development.",
        "Website performance optimization.",
    ],
    Content: [
        "Audiovisual production for any screen.",
        "Social Media Content & management.",
        "UGC.",
        "Motion graphic & 3D.",
        "B2B content",
        "Content creation for online and offline media.",
        "Social media management and visuals.",
    ],
    Data: [
        "Campaign performance analysis.",
        "Data collection and reporting.",
        "Insights for strategy optimization.",
        "Custom analytics dashboards.",
    ],
    Media: [
        "Campaign Strategy and Planning.",
        "Platform Selection and Setup.",
        "Ad Creation and Management.",
        "Optimization and Scaling.",
        "Analytics and Reporting.",
    ],
};

export default function Service() {
    return (
        <div className="bg-black text-white">
            <div className="relative ">
                {nameServicie.map((name, index) => (
                    <div key={name} className="flex justify-between border-b-2 border-gray-600 div-container">
                        {/* Número + Nombre de la categoría */}
                        <div className='w-[60%] flex justify-start items-center py-8'><h2 className="text-service font-antonio font-bold pl-24">
                            {`${numberServicie[index].toString().padStart(2, "0")} ${name}`}
                        </h2></div>
                        {/* Lista de servicios */}
                        <div className='flex justify-start items-center w-[40%]'><ul className="list-disc list-inside text-service-list font-Poppins font-medium">
                            {descriptionService[name]?.map((service, idx) => (
                                <li key={idx} className="text-gray-300">{service}</li>
                            ))}
                        </ul></div>

                    </div>
                ))}
            </div>
        </div>
    );
}
