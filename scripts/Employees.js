import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

//document. is refering to the entire landing page, since the whole project is one web page
//addEventListener is a method that primes the document to "listen" for a browser generated event WITHIN the document, ("this is the TYPE of event" (this is the parameter for the function))

document.addEventListener(
    "click",
    (clickEvent) => {
        //giving itemClicked the value of the clickEvent TARGET ie. where the mouse clicked
        const itemClicked = clickEvent.target
        //checking if the id attribute of the html element clicked, starts with the string of "employee", and will evaluate to true or false
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            //iterating the employees array, and storing ONE object in the newly declared variable of employee
            for (const employee of employees) {
                //checks if employee.id strictly equals the string value of itemClicked.id.split("--") that is the employeeId variable and the parseInt method converts the string argument to an integer
                // where are these coming from? and what are their values?
                if (employee.id === parseInt(employeeId)) {
                    //checking if employee.id STRICTLY equals the order.employeeId, it stores that value in the method argument
                    //setting the value of the variable employeeOrders to a newly generated array, VIA the filter() method
                    const employeeOrders = orders.filter(order => order.employeeId === employee.id)
                    //it be puttin an alert on the window that says, what it says
                    window.alert(`${employee.name} sold ${employeeOrders.length} products`)
                }
            }
        }
    })

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}



