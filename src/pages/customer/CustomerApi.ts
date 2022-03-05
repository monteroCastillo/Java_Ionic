import Customer from "./Customer";

export function searchCustomers(){

    if(!localStorage['customers']){
        localStorage['customers']='[]';
    }

    let customers = localStorage['customers'];
    customers = JSON.parse(customers)
    return customers;

    
}

export function removeCustomer(id: string){
    let customers=searchCustomers();
    let indice = customers.findIndex
    ((customer:Customer)=> customer.id===id);
    customers.splice(indice,1);   
    localStorage['customers']= JSON.stringify(customers);
}

export function saveCustomer(customer:Customer){
    let customers=searchCustomers();
    if(customer.id){
        //Editar
        let indice = customers.findIndex
        ((c:any)=> c.id===customer.id);
        customers[indice] =customer
    }else{
        //Nuevo
        customer.id = String(Math.round(Math.random()*100000))
        customers.push(customer);
    }
    
    localStorage['customers']= JSON.stringify(customers);

}

export function searchCustomerById(id: string){
    let customers=searchCustomers();
    return customers.find((customer:any) => customer.id === id);
    
}
