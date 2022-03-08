import Supplier from "./Supplier";

export function searchSuppliers(){

    if(!localStorage['Suppliers']){
        localStorage['Suppliers']='[]';
    }

    let Suppliers = localStorage['Suppliers'];
    Suppliers = JSON.parse(Suppliers)
    return Suppliers;

    
}

export function removeSupplier(id: string){
    let Suppliers=searchSuppliers();
    let indice = Suppliers.findIndex
    ((supplier:Supplier)=> supplier.id===id);
    Suppliers.splice(indice,1);   
    localStorage['Suppliers']= JSON.stringify(Suppliers);
}

export function saveSupplier(supplier:Supplier){
    let Suppliers=searchSuppliers();
    if(supplier.id){
        //Editar
        let indice = Suppliers.findIndex
        ((c:any)=> c.id===supplier.id);
        Suppliers[indice] =supplier
    }else{
        //Nuevo
        supplier.id = String(Math.round(Math.random()*100000))
        Suppliers.push(supplier);
    }
    
    localStorage['Suppliers']= JSON.stringify(Suppliers);

}

export function searchSupplierById(id: string){
    let Suppliers=searchSuppliers();
    return Suppliers.find((supplier:any) => supplier.id === id);
    
}
