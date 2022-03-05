import employee from "./Employee";

export function searchEmployees(){

    if(!localStorage['employees']){
        localStorage['employees']='[]';
    }

    let employees = localStorage['employees'];
    employees = JSON.parse(employees)
    return employees;

    
}

export function removeEmployee(id: string){
    let employees=searchEmployees();
    let indice = employees.findIndex
    ((employee:employee)=> employee.id===id);
    employees.splice(indice,1);   
    localStorage['employees']= JSON.stringify(employees);
}

export function saveEmployee(employee:employee){
    let employees=searchEmployees();
    if(employee.id){
        //Editar
        let indice = employees.findIndex
        ((c:any)=> c.id===employee.id);
        employees[indice] =employee
    }else{
        //Nuevo
        employee.id = String(Math.round(Math.random()*100000))
        employees.push(employee);
    }
    
    localStorage['employees']= JSON.stringify(employees);

}

export function searchEmployeeById(id: string){
    let employees=searchEmployees();
    return employees.find((employee:any) => employee.id === id);
    
}
