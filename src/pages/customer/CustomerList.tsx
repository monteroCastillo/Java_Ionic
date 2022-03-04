import { IonButtons,IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { removeCustomer, saveCustomer, searchCustomers } from './CustomerApi';


const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);

  useEffect(() =>{
    search();
  }, [])

  const search = () =>{
      
    let result = searchCustomers();
    setClientes(result);
  }

  const remove = (id:string)=>{
      removeCustomer(id);
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
    saveCustomer(ejemplo);

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
        <IonTitle>Gestion de Clientes</IonTitle>
        <IonItem>
            <IonButton color="primary" fill ="solid" slot = "end" size="default">
                <IonIcon icon={add}/>
                Agregar Cliente
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

      {clientes.map((cliente:any) =>  
      <IonRow>
          <IonCol>{cliente.firstname}</IonCol>
          <IonCol>{cliente.email}</IonCol>
          <IonCol>{cliente.phone}</IonCol>
          <IonCol>{cliente.address}</IonCol>
          <IonCol>
            <IonButton color="primary" fill="clear">
               <IonIcon icon={pencil} slot='icon-only'/>
            </IonButton>
            <IonButton color="danger" fill="clear"
            onClick={() => remove(cliente.id)}>
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

export default CustomerList;
