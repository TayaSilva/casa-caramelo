import React from 'react';

import { AppScreen } from '@/components/app-screen';
import { InfoCard, InfoRow } from '@/components/info-card';

export default function RecomendacoesScreen() {
  return (
    <AppScreen
      title="Recomendacoes"
      description="Uma area dedicada para sugestoes, destaques e acompanhamentos personalizados.">
      <InfoCard title="Hoje" description="Exemplo de bloco reutilizavel para recomendacoes em destaque.">
        <InfoRow label="Rotina matinal" value="Enviar checklist para novos clientes" />
        <InfoRow label="Retencao" value="Reforcar retorno com quem nao agenda ha 30 dias" />
      </InfoCard>

      <InfoCard title="Oportunidades" description="Pode evoluir para cards com CTA, tags e status.">
        <InfoRow label="Upsell" value="Sugerir pacote mensal para 4 perfis" />
        <InfoRow label="Conteudo" value="Publicar recomendacao da semana na home" />
      </InfoCard>
    </AppScreen>
  );
}
