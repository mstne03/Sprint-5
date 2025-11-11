import type { ContentStep } from '@/types/contentSection.types';
import SentirIcon from '@/assets/Imagenes/iconos/3.- ESPACIO/CORAZÓN - ESPACIO.svg';
import PermisIcon from '@/assets/Imagenes/iconos/3.- ESPACIO/VENTANA - ESPACIO.svg';
import CrearIcon from '@/assets/Imagenes/iconos/4.- CUERPO/MANOS - CUERPO.svg';

export const contentSteps: ContentStep[] = [
    { key: 'sentir', label: 'SENTIR', icon: SentirIcon },
    { key: 'permis', label: 'PERMÍS', icon: PermisIcon },
    { key: 'crear', label: 'CREAR', icon: CrearIcon }
];
