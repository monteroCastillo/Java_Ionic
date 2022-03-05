import { IonButtons,IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeApi';


const EmployeeList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() =>{
    search();
  }, [history.location.pathname])

  const search = () =>{
      
    let result = searchEmployees();
    setClientes(result);
  }

  const remove = (id:string)=>{
      removeEmployee(id);
      search();
  }

  const pruebaLocalStorage =() => {
    const ejemplo = {
        id: '1',
        firstname: 'Lucas',
        lastname:'moy',
        email:'Lucas@gmail.com',
        phone:'555',
        address:'avenida 69'
    }
    saveEmployee(ejemplo);

  }

  const addEmployee = ()=> {
    history.push('/page/Employee/new');
  }

  const editEmployee = (id:string)=> {
    history.push('/page/Employee/' + id);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>      
       

  <IonContent>
      <IonCard>
        <IonTitle>Gestion de Empleados</IonTitle>
        <IonItem>
            <IonButton onClick={addEmployee} color="primary" fill ="solid" 
            slot = "end" size="default">
                <IonIcon icon={add}/>
                Agregar Empleado
            </IonButton>
        </IonItem>


    <IonGrid className='table'>
      <IonRow>
        <IonCol>Nombre</IonCol>
        <IonCol>Email</IonCol>
        <IonCol>Teléfono</IonCol>
        <IonCol>Dirección</IonCol>
        <IonCol>Acciones</IonCol>
      </IonRow>

      {clientes.map((cliente:Employee) =>  
      <IonRow>
          <IonCol>{cliente.firstname}</IonCol>
          <IonCol>{cliente.email}</IonCol>
          <IonCol>{cliente.phone}</IonCol>
          <IonCol>{cliente.address}</IonCol>
          <IonCol>
            <IonButton color="primary" fill="clear"
            onClick={() => editEmployee(String(cliente.id))}>
               <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
            <IonButton color="danger" fill="clear"
              onClick={() => remove(String(cliente.id))}>
              <IonIcon icon={close} slot='icon-only'/>
            </IonButton>
          </IonCol>
      </IonRow>
      )}
      
    </IonGrid>
    </IonCard>
  </IonContent>


  <IonButton onClick={pruebaLocalStorage} color="danger" fill="solid">
                prueba Local storage

            </IonButton>




      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;
