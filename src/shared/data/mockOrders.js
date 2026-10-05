/**
 * Datos iniciales simulados para el Portal Interno de Taller (MIE)
 */

export const INITIAL_WORK_ORDERS = [
  {
    id: "OT-501",
    clientName: "Martín Gómez",
    clientPhone: "+54 9 380 455-8899",
    vehicle: "Toyota Hilux 2.8 D-4D",
    plate: "AF 124 XY",
    year: "2021",
    service: "Distribución completa y bomba de agua",
    assignedMechanic: "Carlos Espinosa (Jefe de Taller)",
    status: "in_progress", // 'received', 'in_progress', 'waiting_parts', 'completed', 'delivered'
    statusLabel: "En Reparación",
    dateIn: "2026-10-05 09:15",
    estimatedDate: "2026-10-06 18:00",
    budget: "$ 385.000",
    notes: "Cliente autorizó cambio de termostato y refrigerante orgánico tras video enviado por WhatsApp.",
    whatsappEvidenceSent: true
  },
  {
    id: "OT-502",
    clientName: "Valeria Herrera",
    clientPhone: "+54 9 380 433-2121",
    vehicle: "Volkswagen Gol Trend 1.6",
    plate: "AA 789 LK",
    year: "2017",
    service: "Diagnóstico OBD-II y Limpieza de Inyectores",
    assignedMechanic: "Lucas (Electrónica)",
    status: "completed",
    statusLabel: "Listo para Entrega",
    dateIn: "2026-10-04 16:45",
    estimatedDate: "2026-10-05 13:00",
    budget: "$ 140.000",
    notes: "Se limpiaron inyectores por ultrasonido y se reseteó testigo check engine. Falla erradicada.",
    whatsappEvidenceSent: true
  },
  {
    id: "OT-503",
    clientName: "Esteban Casas",
    clientPhone: "+54 9 380 466-9900",
    vehicle: "Chevrolet Cruze 1.4 Turbo",
    plate: "AC 450 MN",
    year: "2019",
    service: "Frenos delanteros y discos ventilados",
    assignedMechanic: "Ramiro (Tren Delantero)",
    status: "waiting_parts",
    statusLabel: "Esperando Repuesto",
    dateIn: "2026-10-05 11:30",
    estimatedDate: "2026-10-07 12:00",
    budget: "$ 210.000",
    notes: "Llegada de pastillas cerámicas importadas confirmada para mañana por la mañana.",
    whatsappEvidenceSent: true
  },
  {
    id: "OT-504",
    clientName: "Lorena Silva",
    clientPhone: "+54 9 380 411-7744",
    vehicle: "Ford Fiesta Kinetic 1.6",
    plate: "OZK 345",
    year: "2015",
    service: "Service de 10.000 km y Control Pre-RTO",
    assignedMechanic: "Carlos Espinosa",
    status: "received",
    statusLabel: "Recibido / En Fila",
    dateIn: "2026-10-05 17:00",
    estimatedDate: "2026-10-06 12:30",
    budget: "$ 98.000",
    notes: "Ingresó para cambio de aceite 5W-30 sintético y chequeo de holguras en rótulas para verificación técnica.",
    whatsappEvidenceSent: false
  }
];

export const WORKSHOP_COLLABORATORS = [
  { id: 1, name: "Carlos Espinosa", role: "Jefe de Taller & Diagnóstico", code: "ESP-01" },
  { id: 2, name: "Lucas D'Alessandro", role: "Especialista en Inyección & Scanner", code: "MEC-02" },
  { id: 3, name: "Ramiro Vega", role: "Mecánico Tren Delantero & Frenos", code: "MEC-03" },
  { id: 4, name: "Mariana Espinosa", role: "Recepción y Administración", code: "ADM-01" }
];

