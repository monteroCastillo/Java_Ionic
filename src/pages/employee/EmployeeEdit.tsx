import { IonButtons,IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonLabel, IonInput } from '@ionic/react';
import { add, checkmark, close, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Employee from './Employee';
import { removeEmployee, saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';


const EmployeeEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();
    const [employee, setEmployee] = useState<Employee>({});
    const history =useHistory();
  
    useEffect(() =>{
      search();
    }, [])
  
    const search = () =>{
        
      if(id !== 'new'){
        let result = searchEmployeeById(id);
        setEmployee(result);
      }
    }
    
    const save = ()=>{
      
      saveEmployee(employee);
      history.push('/page/employees')
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
          <IonTitle> {id === 'new'  ? 'Agregar Cliente': 'Editar Cliente'}</IonTitle>
          
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput onIonChange={e => employee.firstname = String(e.detail.value)}
                value={employee.firstname}></IonInput>
              </IonItem>
            </IonCol>
          
          
          
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput onIonChange={e => employee.email = String(e.detail.value)}
                value={employee.email}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Telefono</IonLabel>
                <IonInput onIonChange={e => employee.phone = String(e.detail.value)}
                value={employee.phone}></IonInput>
              </IonItem>
            </IonCol>
          


          
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput onIonChange={e => employee.address = String(e.detail.value)}
                value={employee.address}></IonInput>
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
  
  export default EmployeeEdit;