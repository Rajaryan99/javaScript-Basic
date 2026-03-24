let response: any = '45'

let numbricLenght: number = (response as string).length

console.log(numbricLenght)
 
type Role = "admin" | "user" | 'superAdmin';


function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard")
        return
    }

    if (role === "user") {
        console.log("Redirecting to user Dashboard")
        return
    }
    role;
}