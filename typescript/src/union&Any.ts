let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = 'success'


let orders = ["28", '12', '77', '69']

let currentorder: string | undefined;

for (let order of orders) {
    if (order === '69') {
        currentorder = order
        break
    }

    currentorder = '11'
}

console.log(currentorder)