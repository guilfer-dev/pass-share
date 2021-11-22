// let history = useHistory();
const randomThings = function (n, thing) {

    const names = ["Bronson Mcconnell",
        "Brady Rodriguez",
        "Selina Adkins",
        "Shyann Bowman",
        "Lukas Ponce",
        "Lilliana Chavez",
        "Quintin Mann",
        "Kasey Mathews",
        "Kira Mckinney",
        "Bentley Clark",
        "Keagan Carpenter",
        "Taryn Stark"]

    const services = ['Netflix', 'Amazon Prime Vídeo', 'HBO-Max', 'Disney+'];
    const values = [39.99, 14.99, 27.00, 119.90];
    const paymentStatus = ['OK', 'PENDING'];
    const plans = ['Basic', 'Pro', 'Max'];

    switch (thing) {
        case 'names':
            thing = names;

            break;
        case 'services':
            thing = services;

            break;
        case 'values':
            thing = values;
            break;
        case 'payment-status':
            thing = paymentStatus;
            break;
        case 'plans':
            thing = plans;
            break;

        default:
            throw Error('thing does not exists');
    }

    const arr = []

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * thing.length))
    }

    return arr.map(e => thing[e])
}

export { randomThings }