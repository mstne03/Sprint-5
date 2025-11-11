import type { ServiceSection } from '@/types/serveis.types';
import { artterapiaQuotes, artperdinsQuotes } from './quotes';
import ArtterapiaIcon from '@/assets/Imagenes/iconos/3.- ESPACIO/NUBES - ESPACIO.svg';
import ArtperdinsIcon from '@/assets/Imagenes/iconos/1.- FLOR/PLANTA - FLOR.svg';
import CentresIcon from '@/assets/Imagenes/iconos/2.- ARTE/DIBUJO - ARTE.svg';

export const servicesData: ServiceSection[] = [
    {
        id: 'artterapia',
        title: 'ARTTERÀPIA',
        subtitle: "Acompanyem les persones en els seus processos vitals a través de les eines de l'Art.",
        shortDescription: "Acompanyem les persones en els seus processos vitals a través de les eines de l' Art.",
        quotes: artterapiaQuotes,
        bgColor: 'bg-white',
        contentKey: 'artterapia',
        delay: 0.2,
        icon: ArtterapiaIcon
    },
    {
        id: 'artperdins',
        title: 'ARTPERDINS',
        subtitle: "Cursos anuals d'Acompanyament Creatiu d'Expressió Artística per a Adolescents Joves i Adults. Quan fa que no pintes",
        shortDescription: "Cursos anuals d'Acompanyament Creatiu d'Expressió Artística per a Adolescents\nJoves i Adults.",
        quotes: artperdinsQuotes,
        bgColor: 'bg-[#F5EFE7]',
        contentKey: 'artperdins',
        delay: 0.3,
        icon: ArtperdinsIcon
    },
    {
        id: 'centres-educatius',
        title: 'CENTRES EDUCATIUS',
        subtitle: "Sessions monogràfiques per a la difusió pedagògica de les Arts Plàstiques.",
        shortDescription: "Sessions monogràfiques per a la difusió pedagògica de les Arts Plàstiques.",
        quotes: [],
        bgColor: 'bg-white',
        contentKey: 'centres-educatius',
        delay: 0.4,
        icon: CentresIcon
    }
];
