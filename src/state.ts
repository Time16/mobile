const deliveries = [
  {
    id: 0,
    accepted: false,
    finished: false,
    status: 0,
    price: 9,
    size: "Grande",
    pickupName: "Padaria Alem do Pão",
    pickupAddress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
    pickupLocation: {
      latitude: -15.8703626,
      longitude: -47.9686797
    },
    deliveryName: "João Carlos Marinho",
    deliveryAddress: "R. São Francisco número 202",
    deliveryLocation: {
      latitude: -15.8687677,
      longitude: -47.9663086
    },
    timeStart: 12
  },
  {
    id: 1,
    accepted: false,
    finished: false,
    status: 0,
    price: 5,
    size: "Pequeno",
    pickupName: "Mercado da Ana",
    pickupAddress: "R. Jandira Lote 2 Número 1",
    pickupLocation: {
      latitude: -15.8703626,
      longitude: -47.9686797
    },
    deliveryName: "Maria Aparecida",
    deliveryAddress: "R. Araguaia Casa 503",
    deliveryLocation: {
      latitude: -15.8687677,
      longitude: -47.9663086
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
    pickupName: "Mercadinho Melhor Preço",
    pickupAddress: "Avenida Araújo número 2",
    pickupLocation: {
      latitude: -15.8703626,
      longitude: -47.9686797
    },
    deliveryName: "João Carlos Marinho",
    deliveryAddress: "Avenida Araújo Número 505",
    deliveryLocation: {
      latitude: -15.8687677,
      longitude: -47.9663086
    },
    timeStart: 18
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
