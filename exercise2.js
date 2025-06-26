class Ticket {
    destination;
    price;
    status;
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
;
function storeTicketsInfo(ticketDescriptions, criteria) {
    const newArray = ticketDescriptions.map((descr) => descr.split('|')).map((descr) => {
        const ticket = new Ticket(descr[0], Number(descr[1]), descr[2]);
        return ticket;
    });
    switch (criteria) {
        case 'destination':
            newArray.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            newArray.sort((a, b) => b.price - a.price);
            break;
        case 'status':
            newArray.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return newArray;
}
const result = storeTicketsInfo([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log(result);
//# sourceMappingURL=exercise2.js.map