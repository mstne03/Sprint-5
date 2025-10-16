


import ButtonComponent from '../ButtonComponent/ButtonComponent';

const services = [
    {
        title: 'ARTTERÀPIA',
        content: `Acompanyem les persones en els seus processos vitals a través de les eines de l’ Art`,
    },
    {
        title: 'ARTPERDINS',
        content: `Cursos anuals d’Acompanyament Creatiu d’Expressió Artística`,
    },
    {
        title: 'CENTRES EDUCATIUS',
        content: `Sessions monogràfiques per a la difusió pedagògica de les Arts Plàstiques.`,
    },
];

const Services = () => {
    return (
        <section className="bg-amber-50 py-16 flex justify-center items-center">
            <div className="border-2 border-[#945696] rounded-lg bg-amber-50 px-10 py-8 flex flex-row gap-8 w-fit mx-auto">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="flex flex-col items-center justify-between bg-amber-50 rounded-lg px-8 py-6 w-80 h-[340px]"
                    >
                        <h2 className="text-xl font-medium tracking-widest mb-6 text-[#222] text-center">{service.title}</h2>
                        <p className="text-base text-[#222] mb-8 text-center">
                            {service.content}
                        </p>
                        <ButtonComponent text="Comencem? ↓" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
