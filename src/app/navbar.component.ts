import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  template: `
    <div class="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Logo_OC_Oerlikon.svg/1149px-Logo_OC_Oerlikon.svg.png"
        alt="logo"
      />
      <h1>Task Assignment</h1>
    </div>
  `,
})
export class NavbarComponent {}
