import React from 'react';

import { AppScreen } from '@/components/app-screen';
import { InfoCard, InfoRow } from '@/components/info-card';

export default function HomeScreen() {
  return (
    <AppScreen
      title="Casa Caramelo"
      description="Uma base inicial do app com navegacao preparada para funcionar bem no mobile e na web.">
      <InfoCard
        title="Resumo do dia"
        description="O conteudo aqui pode virar cards reais assim que definirmos os dados da home.">
        <InfoRow label="Atendimentos confirmados" value="3 para hoje" />
        <InfoRow label="Recomendacoes pendentes" value="2 itens para revisar" />
        <InfoRow label="Proximo horario livre" value="14:30" />
      </InfoCard>

      <InfoCard
        title="Proximos passos"
        description="Deixei a estrutura pronta para componentizar o restante das telas sem duplicar layout.">
        <InfoRow label="Perfil" value="Edicao feita direto na propria tela" />
        <InfoRow label="Recomendacoes" value="Espaco para listas e destaques" />
        <InfoRow label="Agendamento" value="Espaco para agenda, slots e confirmacoes" />
      </InfoCard>
    </AppScreen>
  );
}
