import { IonButtons,IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } from '@ionic/react';
import { add, checkmark, close, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import { removeSupplier, saveSupplier, searchSupplierById, searchSuppliers } from './SupplierApi';


const SupplierEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();
    const [Supplier, setSupplier] = useState<Supplier>({});
    const history =useHistory();
  
    useEffect(() =>{
      search();
    }, [])
  
    const search = () =>{
        
      if(id !== 'new'){
        let result = searchSupplierById(id);
        setSupplier(result);
      }
    }
    
    const save = ()=>{
      
      saveSupplier(Supplier);
      history.push('/page/Suppliers')
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
          <IonTitle> {id === 'new'  ? 'Agregar Empleado': 'Editar Empleado'}</IonTitle>
          
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput onIonChange={e => Supplier.name = String(e.detail.value)}
                value={Supplier.name}></IonInput>
              </IonItem>
            </IonCol>
          
          
          
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput onIonChange={e => Supplier.email = String(e.detail.value)}
                value={Supplier.email}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Telefono</IonLabel>
                <IonInput onIonChange={e => Supplier.phone = String(e.detail.value)}
                value={Supplier.phone}></IonInput>
              </IonItem>
            </IonCol>
          


          
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput onIonChange={e => Supplier.address = String(e.detail.value)}
                value={Supplier.address}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>


          
          <IonItem>
              <IonButton onClick={save}  color="success" 
                fill ="solid" slot = "end" size="default">
                  <IonIcon icon={checkmark}/>
                  Guardar
              </IonButton>
  
          </IonItem>
       
      </IonCard>
    </IonContent>   
    </IonContent>
    </IonPage>
    );
  
};
  
  export default SupplierEdit;