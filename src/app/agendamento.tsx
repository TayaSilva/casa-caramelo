import React from 'react';

import { AppScreen } from '@/components/app-screen';
import { InfoCard, InfoRow } from '@/components/info-card';

export default function AgendamentoScreen() {
  return (
    <AppScreen
      title="Agendamento"
      description="Tela pronta para concentrar agenda, disponibilidade e confirmacoes em um so fluxo.">
      <InfoCard title="Proximos atendimentos" description="Estrutura inicial para lista de compromissos.">
        <InfoRow label="09:00" value="Retorno com Marina" />
        <InfoRow label="11:30" value="Avaliacao com Paulo" />
        <InfoRow label="15:00" value="Consulta online com Bruna" />
      </InfoCard>

      <InfoCard title="Disponibilidade" description="Depois podemos transformar isso em calendario e selecao de slots.">
        <InfoRow label="Hoje" value="14:30, 16:00 e 17:30 livres" />
        <InfoRow label="Amanha" value="Manha com agenda aberta" />
      </InfoCard>
    </AppScreen>
  );
}
