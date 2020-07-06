const deliveries = [
  {
    id: 0,
    accepted: false,
    finished: false,
    status: 0,
    price: 7,
    size: "Grande",
    pickupName: "Vicarlú Mercado Açougue e Hortifruti",
    pickupAddress: "R. Acácia, 608 - Jardim das Flores, Osasco - SP, 06120-120",
    pickupLocation: {
      latitude: -23.540701,
      longitude: -46.7955556
    },
    deliveryName: "Maria Aparecida Oliveira",
    deliveryAddress: "R. Miosótis, 399-249 - Jardim das Flores, Osasco - SP, 06110-230",
    deliveryLocation: {
      latitude: -23.534591,
      longitude: -46.792328
    },
    timeStart: 10
  },
  {
    id: 1,
    accepted: false,
    finished: false,
    status: 0,
    price: 5,
    size: "Pequeno",
    pickupName: "Mini Mercado & Casa de Carnes Verônica",
    pickupAddress: "Praça Oito de Maio de 1965, 15 - Vila Osasco, Osasco - SP, 06086-160",
    pickupLocation: {
      latitude: -23.5371108,
      longitude: -46.7936673
    },
    deliveryName: "Marcos da Silva Aquino",
    deliveryAddress: "Av. das Flores, 570 - Jardim das Flores",
    deliveryLocation: {
      latitude: -23.5338679,
      longitude: -46.7916198
    },
    timeStart: 10
  },
  {
    id: 2,
    accepted: false,
    finished: false,
    status: 0,
    price: 7,
    size: "Médio",
    pickupName: "Mercado Leo",
    pickupAddress: "356, Av. Santo Antônio, 342 - Vila Osasco, Osasco - SP",
    pickupLocation: {
      latitude: -23.5347206,
      longitude: -46.792058
    },
    deliveryName: "Ana Maria Ferreira",
    deliveryAddress: "R. Açucena, 314-476 - Jardim das Flores, Osasco - SP, 06110-160",
    deliveryLocation: {
      latitude: -23.532498,
      longitude: -46.790982
    },
    timeStart: 18
  },
  {
    id: 3,
    accepted: false,
    finished: false,
    status: 0,
    price: 9,
    size: "Grande",
    pickupName: "Mercado Gomes",
    pickupAddress: "R. Alberto Cortez - Pestana, Osasco - SP, 02675-031",
    pickupLocation: {
      latitude: -23.5331541,
      longitude: -46.7946788
    },
    deliveryName: "João Souza",
    deliveryAddress: "R. Papoula, 559-425 - Jardim das Flores, Osasco - SP, 06110-210",
    deliveryLocation: {
      latitude: -23.533445,
      longitude: -46.795257
    },
    timeStart: 20
  }
];

export function getAccepted() {
  return deliveries.filter(delivery => delivery.accepted === true && delivery.finished === false);
}

export function getAvailable() {
  return deliveries.filter(delivery => delivery.accepted === false);
}

export function getHistory() {
  return deliveries.filter(delivery => delivery.finished === true);
}

export function initDeliveryStatus(id: number) {
  const delivery = deliveries.find(delivery => delivery.id === id);

  if (delivery && delivery.status === 0) {
    delivery.status++;
  }
}

export function updateVeliveryStatus(id: number) {
  const delivery = deliveries.find(delivery => delivery.id === id);

  if (delivery) {
    delivery.status++;
  }
}

export function acceptDelivery(id: number) {
  const delivery = deliveries.find(delivery => delivery.id === id);

  if (delivery) {
    delivery.accepted = true;
  }
}

export function finishDelivery(id: number) {
  const delivery = deliveries.find(delivery => delivery.id === id);

  if (delivery) {
    delivery.finished = true;
  }
}
