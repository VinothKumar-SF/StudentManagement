import { LightningElement, track, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getPickListValuesIntoList from '@salesforce/apex/StudentApplication.getPickListValuesIntoList';

export default class StudentApplication extends NavigationMixin(LightningElement) {

   value = 'None';
   @track wiredTransRec;

   get option() {
    return [
        { label: 'Arts', value: 'Arts' },
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Medical', value: 'Medical' },
    ];
}

    get options() {
        return [
            { label: 'Male', value: 'options' }
        ];
    }
        
    get options1() {
            return [
                { label: 'Female', value: 'options1' }
            ];
        }
    get options2() {
                return [
                    { label: 'Others', value: 'options2'}
                ];
        }
    
    

//Close the modal pop-up function
    hideModalBox() {  
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Student_Application__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }

    //to display toast messages

    ShowToast(title, message, variant, mode){
            const evt = new ShowToastEvent({
                title: title,
                message:message,
                variant: variant,
                mode: mode
            });
                this.dispatchEvent(evt);
            //this.ShowToast('Success', 'Object Created Successfully', 'success', 'dismissable');
    }

    //To get picklist values based on department
    @wire(getPickListValuesIntoList, {
        
        })
        wiredTransRec({ error, data }) {
        if (error) {   
        console.log(error); 
        } else if (data) {  
        console.log(data);  
        var options = [];   
        var conRecTypes = data[0];
        
        
        }
    }
    
    degree(){


    }
   
  
  
  

}