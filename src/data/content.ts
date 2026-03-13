import { Boxes, ClipboardList, MessageCircleMore, NotebookPen, PackageSearch, Users, Warehouse, History, Clock3, FileX2, Shuffle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const problemItems: IconCard[] = [
  {
    title: 'Pedidos por WhatsApp',
    description: 'Mensajes mezclados que terminan en entregas tardías o perdidas.',
    icon: MessageCircleMore
  },
  {
    title: 'Stock en Excel',
    description: 'Planillas desactualizadas que no reflejan el movimiento real.',
    icon: Boxes
  },
  {
    title: 'Clientes en la cabeza',
    description: 'Información importante sin registro, difícil de seguir.',
    icon: Users
  },
  {
    title: 'Cuentas en cuaderno',
    description: 'Números dispersos que complican decisiones y cierres.',
    icon: NotebookPen
  }
];

export const costItems: IconCard[] = [
  {
    title: 'Pedidos perdidos',
    description: 'Ventas que se caen por falta de seguimiento.',
    icon: FileX2
  },
  {
    title: 'Errores de stock',
    description: 'Compras y faltantes por información inconsistente.',
    icon: PackageSearch
  },
  {
    title: 'Tiempo desperdiciado',
    description: 'Horas resolviendo caos en lugar de vender más.',
    icon: Clock3
  },
  {
    title: 'Clientes confundidos',
    description: 'Respuestas tardías y experiencias poco confiables.',
    icon: Shuffle
  }
];

export const solutionItems: IconCard[] = [
  {
    title: 'Pedidos',
    description: 'Centralizá cada orden y su estado para no perder ventas.',
    icon: ClipboardList
  },
  {
    title: 'Clientes',
    description: 'Toda la información de clientes en un perfil simple.',
    icon: Users
  },
  {
    title: 'Stock',
    description: 'Controlá entradas y salidas con datos actualizados.',
    icon: Warehouse
  },
  {
    title: 'Historial',
    description: 'Revisá decisiones pasadas y proyectá con claridad.',
    icon: History
  }
];

export const diagnosisSteps = [
  'Entendemos cómo funciona hoy tu negocio.',
  'Identificamos dónde aparece el caos operativo.',
  'Te mostramos cómo organizar pedidos, clientes y stock.'
];
