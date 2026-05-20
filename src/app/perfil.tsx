import React from 'react';

import { AppScreen } from '@/components/app-screen';
import { InfoCard, InfoRow } from '@/components/info-card';

export default function PerfilScreen() {
  return (
    <AppScreen
      title="Perfil"
      description="A edicao fica centralizada aqui, sem precisar de uma tela separada de editar.">
      <InfoCard
        title="Dados principais"
        description="Esses blocos ja ficam prontos para receber campos editaveis depois.">
        <InfoRow label="Nome" value="Casa Caramelo" />
        <InfoRow label="Contato" value="(11) 99999-9999" />
        <InfoRow label="E-mail" value="contato@casacaramelo.com" />
      </InfoCard>

      <InfoCard title="Preferencias" description="Informacoes que podem virar switches, selects ou inputs.">
        <InfoRow label="Atendimento" value="Presencial e online" />
        <InfoRow label="Notificacoes" value="Ativas" />
        <InfoRow label="Fuso de agenda" value="America/Sao_Paulo" />
      </InfoCard>
    </AppScreen>
  );
}
