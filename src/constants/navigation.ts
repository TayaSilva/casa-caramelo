import type { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

type AppTabConfig = {
  name: 'index' | 'perfil' | 'recomendacoes' | 'agendamento';
  label: string;
  accessibilityLabel: string;
  icon: ComponentProps<typeof Ionicons>['name'];
};

export const APP_TABS = [
  {
    name: 'index',
    label: 'Inicio',
    accessibilityLabel: 'Abrir tela inicial',
    icon: 'home-outline',
  },
  {
    name: 'perfil',
    label: 'Perfil',
    accessibilityLabel: 'Abrir perfil',
    icon: 'person-outline',
  },
  {
    name: 'recomendacoes',
    label: 'Recomendacoes',
    accessibilityLabel: 'Abrir recomendacoes',
    icon: 'sparkles-outline',
  },
  {
    name: 'agendamento',
    label: 'Agendamento',
    accessibilityLabel: 'Abrir agendamento',
    icon: 'calendar-outline',
  },
] as const satisfies readonly AppTabConfig[];
