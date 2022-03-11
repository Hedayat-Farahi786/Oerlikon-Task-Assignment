import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';
import customerData from '../assets/customerData.json';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oerlikon_assignment';

  customers: Customer[] = customerData;
  submitted!: boolean;
  customer!: Customer;
  customerDialog!: boolean;
  customerInfoDialog: boolean = false;
  checked: boolean = true;
  searchText!: string;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {;
    console.log(this.customers);
  }


  filter(event: any){
    this.searchText = event.target.value;
    if(this.searchText === ""){
      this.customers = customerData;
    }else {

      this.customers = this.customers.filter(customer => {
        return customer.first_name.toLowerCase().includes(this.searchText.toLowerCase());
      })
    }
  }


  editCustomer(customer: Customer) {
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  openCustomer(customer: Customer) {
    this.customer = { ...customer };
    this.submitted = false;
    this.customerInfoDialog = true;
  }

  deleteCustomer(customer: Customer) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + customer.first_name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.customers = this.customers.filter((val) => val.id !== customer.id);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Deleted',
          life: 3000,
        });
      },
    });
  }

  saveCustomer() {
    this.submitted = true;

    if (this.customer.first_name.trim()) {
      if (this.customer.id) {
        this.customers[this.findIndexById(this.customer.id)] = this.customer;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Updated',
          life: 3000,
        });
      }
      this.customers = [...this.customers];
      this.customerDialog = false;
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
  }

  hideInfoDialog() {
    this.customerInfoDialog = false;
    this.submitted = false;
  }
}
