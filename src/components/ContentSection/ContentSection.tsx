import { useState, useRef } from 'react';

const ContentSection = () => {
    const [selectedStep, setSelectedStep] = useState('sentir');
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);

    const steps = [
        { key: 'sentir', label: 'SENTIR' },
        { key: 'permis', label: 'PERMÍS' },
        { key: 'crear', label: 'CREAR' }
    ];

    const contentData = {
        sentir: {
            title: "UN ESPAI PER L'ESCOLTA\nDE SENTIR",
            quote: "\"Tot coneixement comença amb l' experiència sensible...\"",
            author: "Immanuel Kant | filòsof",
            text: `Sentim, hem de sentir...
Vivim en un temps que no propicia escoltar-nos, i d'aquesta manera se'ns fa difícil conèixer i aprendre què sentim i, per tant, elaborar les nostres vivències i reflexionar sobre el fet de viure.

El terme del verb Sentir ve d'assentar, arrelar, perquè el sentiment, a diferència de l'emoció, necessita espai i necessita temps…

Ser colpits per les coses ens fa sentir vulnerables, és cert, però alhora ens dona eines per transformar les nostres experiències de vida i atorgar-hi "Sentit". És per aquesta raó que el filòsof Josep Maria Esquirol parla de la intel.ligència del Sentir….`
        },
        permis: {
            title: "UN ESPAI DE RESPECTE\nI PERMÍS",
            quote: "\"L'objectiu de l' Art és propiciar la construcció gradual, al llarg de la vida, d'un estat d'encís i serenitat\"",
            author: "Glenn Gould | Músic",
            text: `La història de l' Art Occidental en va plena, de persones que han tingut la necessitat d'acostar-se als recursos artístics per la necessitat d'escoltar el seu sentir i prioritzar-lo al marge del que es considerava com a correcte o incorrecte d'expressar...

Per atendre amb cura el sentir i poder-lo desplegar, t'ofereixo un espai respectuós i de permís que propicia l'escolta acurada, com a punt d'inici d'una experiència artística, que comença expressant i acaba re-creant tot aquest material sensible de què som fets en un procés d'aprenentatge ric i personal.`
        },
        crear: {
            title: "UN ESPAI PER EXPRESSAR\nI RECONNECTAR",
            quote: "\"L'artista no és aquell qui somia, sinó qui construeix somis\"",
            author: "Thomas Mann | escriptor",
            text: `L'Expressió és el primer pas per un procès artístic, que acaba sent d'aprenentatge … Des de la plena atenció i des del respecte als ritmes interns, t'ofereixo un espai on la teva capacitat creativa es pugui desplegar sense judicis ni anticipacions…

Reconnectant amb la teva essència més juganera, que val la pena tenir-la sempre ben viva i a la nostra disposició.`
        }
    };

    const currentContent = contentData[selectedStep as keyof typeof contentData];

    const handleArrowClick = () => {
        if (textRef.current) {
            if (isScrolledDown) {
                // Scroll hacia arriba
                textRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setIsScrolledDown(false);
            } else {
                // Scroll hacia abajo
                textRef.current.scrollTo({
                    top: textRef.current.scrollHeight,
                    behavior: 'smooth'
                });
                setIsScrolledDown(true);
            }
        }
    };

    const handleStepChange = (stepKey: string) => {
        setSelectedStep(stepKey);
        setIsScrolledDown(false); // Reset scroll state
        // Reset scroll position
        if (textRef.current) {
            textRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: white;
                        border-radius: 2px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.8);
                    }
                `}
            </style>
            <section className="bg-[#7B8BC7] py-20 px-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* Contenido principal centrado */}
                <div className="flex-1/2">
                    {/* Contenedor con bordes como en la maqueta */}
                    <div className="border-3 border-white rounded-[40px] p-10 text-center">
                        {/* Título principal centrado */}
                        <h2 className="text-white text-2xl lg:text-3xl font-light tracking-wide leading-relaxed mb-8">
                            {currentContent.title.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < currentContent.title.split('\n').length - 1 && <br />}
                                </span>
                            ))}
                        </h2>

                        {/* Cita centrada */}
                        <div className="mb-8">
                            <p className="text-white text-lg italic mb-2">
                                {currentContent.quote}
                            </p>
                            <p className="text-white text-base">
                                {currentContent.author}
                            </p>
                        </div>

                        {/* Línea decorativa */}
                        <div className="border-t-2 border-white max-w-md mx-auto mb-8"></div>

                        {/* Texto descriptivo con overflow y scroll interno */}
                        <div 
                            ref={textRef}
                            className="text-white text-lg leading-relaxed max-w-md mx-auto text-left h-56 overflow-y-auto custom-scrollbar relative"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'white transparent',
                            }}
                        >
                            {currentContent.text.split('\n\n').map((paragraph, index) => (
                                <p key={index} className={index > 0 ? "mt-4" : ""}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Flecha hacia abajo/arriba clickeable */}
                        <div className="mt-8 text-center">
                            <button 
                                onClick={handleArrowClick}
                                className="text-white hover:text-white/70 transition-all duration-200 cursor-pointer transform hover:scale-110"
                            >
                                {isScrolledDown ? (
                                    // Flecha hacia arriba SVG - más gruesa y compacta
                                    <svg 
                                        width="16" 
                                        height="12" 
                                        viewBox="0 0 16 12" 
                                        fill="none" 
                                        className="mx-auto"
                                    >
                                        <path 
                                            d="M2 10L8 4L14 10" 
                                            stroke="currentColor" 
                                            strokeWidth="3" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    // Flecha hacia abajo SVG - más gruesa y compacta
                                    <svg 
                                        width="16" 
                                        height="12" 
                                        viewBox="0 0 16 12" 
                                        fill="none" 
                                        className="mx-auto"
                                    >
                                        <path 
                                            d="M2 2L8 8L14 2" 
                                            stroke="currentColor" 
                                            strokeWidth="3" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navegación vertical a la derecha */}
                <div className="flex-1/4 flex flex-col items-center lg:items-start">
                    <div className="relative flex flex-col justify-between h-full min-h-[500px]">
                        {/* Línea vertical conectora - ajustada para no sobrepasar los puntos */}
                        <div className="absolute w-1 bg-white" style={{
                            left: '6px',  // Un poco más hacia la derecha
                            top: '8px',  // Centro del primer punto (radio 8px)
                            bottom: '8px'  // Centro del último punto (radio 8px)
                        }}></div>
                        
                        {steps.map((step, index) => (
                            <div 
                                key={step.key}
                                className="flex items-center gap-6 cursor-pointer group"
                                onClick={() => handleStepChange(step.key)}
                                style={{
                                    marginTop: index === 0 ? '0' : 'auto',
                                    marginBottom: index === steps.length - 1 ? '0' : 'auto'
                                }}
                            >
                                {/* Punto indicador */}
                                <div className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-200 relative z-10 ${
                                    selectedStep === step.key ? 'bg-white' : 'bg-[#7B8BC7]'
                                }`}></div>
                                
                                {/* Texto del paso */}
                                <span className={`text-white font-medium tracking-wide transition-colors duration-200 ${
                                    selectedStep === step.key ? 'text-white' : 'text-white/70'
                                } group-hover:text-white`}>
                                    {step.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default ContentSection;